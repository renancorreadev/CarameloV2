/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { ethers, formatUnits } from 'ethers';
import {
  useWalletClient,
  useAccount,
  useBalance,
  useAccountEffect,
  useWatchAsset,
} from 'wagmi';
import {
  CarameloPreSale__factory,
  Caramelo__factory,
} from '@/utils/typechain';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { useIsMobile } from '@/hooks/useMobile';
import toast from 'react-hot-toast';
import TutorialModal from '../Modal';
import { trackEvent } from "@/utils/bpixel";

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CARAMELO_PRESALE_CONTRACT || '';
const TOKEN_ADDRESS = process.env.NEXT_PUBLIC_CARAMELO_CONTRACT || '';

const ALLOWED_ADDRESSES = [
  '0xdCA1b295fAb25ebCFA1BF3834599Bd8606A64bF6'.toLowerCase(),
  '0x14864Bc81FEed0ec2AA2E1826f82b1801D55C47f'.toLowerCase(),
  '0x5707595910eC3D839d8348720E9C7E1d47784457'.toLowerCase(),
  '0x5C63ccd7eA8f1676F7A8E20C0084De8e7d98E419'.toLowerCase(),
];

export function PresaleForm() {
  const { data: walletClient } = useWalletClient();
  const { watchAsset, isError, isSuccess } = useWatchAsset();
  const { data: balanceData } = useBalance();
  const { isConnected, address } = useAccount();
  const [isModalOpen, setModalOpen] = useState(false);

  const [contract, setContract] = useState<any>(null);
  const [amount, setAmount] = useState<string>('');
  const [remaining, setRemaining] = useState<string>('0');
  const [totalRaised, setTotalRaised] = useState<string>('0');
  const [carameloBalance, setCarameloBalance] = useState<string>('0');
  const [tokenContract, setTokenContract] = useState<any>(null);
  const [BNBBalance, setBNBBalance] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const isAllowedAddress = useMemo(() => {
    return address ? ALLOWED_ADDRESSES.includes(address.toLowerCase()) : false;
  }, [address]);

  useAccountEffect({
    onConnect({ address, connector, isReconnected }) {
      console.log('Conectado', { address, connector, isReconnected });
      toast.success('Carteira conectada com sucesso!');
    },
    onDisconnect() {
      toast.success('Carteira desconectada com sucesso!');
      // Removendo o reload da página
      setContract(null);
      setTokenContract(null);
      setBNBBalance(null);
      setRemaining('0');
      setTotalRaised('0');
      setCarameloBalance('0');
      setAmount('');
    },
  });

  const setupContract = useCallback(async () => {
    if (!walletClient) return;
    
    try {
      const provider = new ethers.BrowserProvider(walletClient);
      const signer = await provider.getSigner();
      const contractInstance = CarameloPreSale__factory.connect(
        CONTRACT_ADDRESS,
        signer
      );

      const tokenContractInstance = Caramelo__factory.connect(
        TOKEN_ADDRESS,
        signer
      );
      setContract(contractInstance);
      setTokenContract(tokenContractInstance);

      const balance = await provider.getBalance(walletClient.account.address);
      setBNBBalance(Number(formatUnits(balance, 18)));
    } catch (error) {
      toast.error('Erro ao carregar informações.');
      console.error('Erro ao carregar informações:', error);
    }
  }, [walletClient]);

  useEffect(() => {
    setupContract();
  }, [setupContract]);

  const loadPresaleInfo = useCallback(async () => {
    if (!contract || !tokenContract || !walletClient?.account?.address) return;

    try {
      const [remainingTokens, totalRaisedBNB, carameloTokenBalance] = await Promise.all([
        contract.tokensRemaining(),
        contract.totalBNBReceived(),
        tokenContract.balanceOf(walletClient.account.address)
      ]);

      setRemaining(ethers.formatUnits(remainingTokens, 6));
      setTotalRaised(ethers.formatUnits(totalRaisedBNB, 18));
      setCarameloBalance(ethers.formatUnits(carameloTokenBalance, 9));
    } catch (error) {
      toast.error('Erro ao carregar informações da pré-venda.');
      console.error('Erro ao carregar informações:', error);
    }
  }, [contract, tokenContract, walletClient]);

  useEffect(() => {
    if (contract) {
      loadPresaleInfo();
      // Configurar um intervalo para atualizar as informações a cada 30 segundos
      const interval = setInterval(loadPresaleInfo, 30000);
      return () => clearInterval(interval);
    }
  }, [contract, loadPresaleInfo]);

  const handleBuy = async () => {
    trackEvent("Purchase");

    if (!contract) {
      toast.error('Conecte sua carteira antes de comprar.');
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      toast.error('Por favor, insira um valor válido de BNB.');
      return;
    }

    if (BNBBalance && parseFloat(amount) > BNBBalance) {
      toast.error('Saldo insuficiente de BNB.');
      return;
    }

    try {
      toast.loading('Processando compra...');

      const tx = await contract.buyTokens({
        value: ethers.parseEther(amount),
      });
      await tx.wait();
      await toast.dismiss();
      toast.success('Compra realizada com sucesso!');
      loadPresaleInfo();
    } catch (error) {
      console.error('Erro ao comprar tokens:', error);
      toast.error(parseContractError(error));
    }
  };

  const parseErrorMessage = (errorMsg: string): string => {
    const errorMessages = {
      InsufficientFunds:
        'Saldo insuficiente para compra. Verifique seu saldo e tente novamente.',
      InvalidPhase:
        'A pré-venda não está ativa no momento. Aguarde a fase correta.',
      PreSaleNotActive:
        'A pré-venda ainda não está ativa. Tente novamente mais tarde.',
      NoTokensAvailable:
        'Não há tokens suficientes disponíveis para compra. Tente um valor menor.',
      InvalidTokenAmount:
        'A quantidade de tokens inserida é inválida. Insira um valor válido.',
      PreSaleAlreadyInitialized:
        'A pré-venda já foi inicializada. Não é possível reiniciá-la.',
      ZeroAddress:
        'Endereço de destino inválido. Verifique os dados e tente novamente.',
      WithdrawalFailed:
        'Falha ao tentar sacar os fundos. Entre em contato com o suporte.',
      MaxTokensBuyExceeded:
        'Você excedeu o limite máximo de tokens permitidos. Tente um valor menor.',
      InvalidPhaseRate:
        'Taxa de fase inválida. Entre em contato com o suporte para mais informações.',
    };

    for (const [key, message] of Object.entries(errorMessages)) {
      if (errorMsg.includes(key)) return message;
    }
    return 'Erro desconhecido. Por favor, tente novamente mais tarde.';
  };

  const parseContractError = (error: any): string => {
    if (error?.data?.message) {
      return parseErrorMessage(error.data.message);
    }

    if (error?.code === 'CALL_EXCEPTION' && !error.reason && !error.data) {
      return 'Saldo insuficiente para pagar o gás da transação. Deposite BNB em sua carteira.';
    }

    if (error?.message?.includes('insufficient funds')) {
      return 'Saldo insuficiente na carteira para completar a transação.';
    }

    return 'Erro desconhecido. Por favor, tente novamente mais tarde.';
  };

  useEffect(() => {
    if (!isConnected) {
      setContract(null);
      setTokenContract(null);
      setBNBBalance(null);
      setRemaining('0');
      setTotalRaised('0');
      setCarameloBalance('0');
      setAmount('');
      toast.success('Carteira desconectada com sucesso!');
    }
  }, [isConnected]);

  if (!isConnected) {
    return (
      <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md max-w-md mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">Conecte sua carteira</h2>
        <p className="text-gray-400">
          Para acessar a pré-venda, conecte sua carteira usando o botão acima.
        </p>
      </div>
    );
  }

  const handleAddToken = async () => {
    trackEvent("Add Token", { method: "handleAddToken" }); 

    if (isMobile) {
      setModalOpen(true);
    } else {
      try {
        await watchAsset({
          type: 'ERC20',
          options: {
            address: TOKEN_ADDRESS,
            symbol: 'CARAMELO',
            decimals: 9,
            image: 'https://i.postimg.cc/wB37FMbj/caramelo-Token.png',
          },
        });
        toast.success('Token adicionado à carteira com sucesso!');
      } catch (error) {
        console.error('Erro ao adicionar token:', error);
        toast.error('Erro ao adicionar o token. Verifique sua carteira.');
      }
    }
  };

  return (
    <div
      id="presale-form"
      className="bg-gray-700 text-white p-10 rounded-2xl shadow-lg max-w-5xl mx-auto space-y-8 lg:space-y-0 lg:flex lg:items-start lg:gap-10"
    >
      {/* Informações do Presale */}
      <div className="flex-1 space-y-6">
        <h1 className="font-normal text-4xl text-center lg:text-left text-slate-200">
          🚀 Pré-venda Caramelo 🚀
        </h1>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="mb-6 xs:flex xs:flex-col">
            <div className="flex sm:items-center sm:gap-3 mb-2 xs:justify-start">
              <BsCurrencyBitcoin className="text-yellow-400 text-3xl" />
              <span className="text-gray-400 text-lg font-medium">
                Tokens Disponíveis
              </span>
            </div>
            <div className="bg-gray-700 h-4 rounded-lg overflow-hidden mb-2">
              <div
                className="bg-carameloAccent h-full transition-all duration-300 "
                style={{ width: `${(Number(remaining) / 1000000) * 100}%` }}
              />
            </div>
            <div className="sm:text-start text-sm text-gray-400 xs:flex xs:justify-center xs:items-center">
              {remaining}
            </div>
          </div>

          {isConnected &&
            isAllowedAddress && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <div className="flex items-center gap-3">
                  <img src="/bnb.png" alt="BNB" className="w-8 h-8" />
                  <span className="text-gray-400 text-lg">
                    BNB Arrecadados:
                  </span>
                </div>
                <span className="font-semibold text-white text-lg sm:text-right">
                  {Number(totalRaised).toFixed(1)} BNB
                </span>
              </div>
            )}

          <div className="flex flex-col sm:flex-row sm:items-center justify-around mb-4 gap-2">
            <div className="flex items-center gap-3 w-full">
              <img src="/dog.png" alt="Caramelo" className="w-8 h-8" />
              <span className="text-gray-400 text-lg sm:w-full">
                Saldo Caramelo:
              </span>
            </div>
            <span className="font-normal text-white text-lg sm:text-right sm:w-full sm:flex sm:flex-col sm:items-end">
              {carameloBalance} CARAMELO
            </span>
          </div>
        </div>
      </div>

      {/* Formulário de Compra */}
      <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-md space-y-6">
        <div>
          <label
            htmlFor="bnb"
            className="block text-gray-300 text-lg font-medium mb-2"
          >
            Quantidade em BNB
          </label>
          <input
            id="bnb"
            type="number"
            placeholder="Digite a quantidade de BNB"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-carameloAccent"
          />
        </div>
        {!isMobile && <div id="connect-wallet" onClick={() => trackEvent("Connect Wallet")}> <ConnectButton label="Connectar" /> </div>}
        {isMobile && (
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-lg">Saldo BNB:</span>
              <img src="/bnb.png" alt="BNB" className="w-5 h-5" />
            </div>

            <span className="font-semibold text-white text-lg">
              {Number(BNBBalance).toFixed(8)} BNB
            </span>
          </div>
        )}

        <button
          id="buy-tokens"
          onClick={handleBuy}
          className="w-full bg-carameloAccent text-white font-bold py-4 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300"
        >
          Comprar Tokens
        </button>

        <button
          id="add-token"
          onClick={handleAddToken}
          className="w-full bg-carameloAccent text-white font-bold py-4 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300"
        >
          Adicionar Token à Carteira
        </button>
        {isMobile && (
          <TutorialModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          />
        )}
        {isError && (
          <p className="text-red-500">
            Erro ao adicionar o token. Verifique sua carteira.
          </p>
        )}
        {isSuccess && (
          <p className="text-green-500">Token adicionado com sucesso!</p>
        )}
      </div>
    </div>
  );
};

export default PresaleForm;
