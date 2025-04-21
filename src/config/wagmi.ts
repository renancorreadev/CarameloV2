import { bsc } from "wagmi/chains";
import { rainbowWallet, 
  metaMaskWallet, 
  trustWallet, 
  injectedWallet, 
  walletConnectWallet 
} from '@rainbow-me/rainbowkit/wallets';
import { rainbowWeb3AuthConnector } from "./RaimbowWeb3AuthConnector";
import { http } from "wagmi";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet } from 'wagmi/chains'

function walletconnect() {
  return walletConnectWallet({
    projectId: "1874f7d69584a7d65db6382fd0760fcf",
    options: {
      qrModalOptions: {
        desktopWallets: [
          {
            id: "metaMask",
            name: "MetaMask",
            links: {
              native: "metamask://",
              universal: "https://metamask.io"
            }
          }
        ],
        mobileWallets: [
          {
            id: "trust",
            name: "Trust Wallet",
            links: {
              native: "trust://",
              universal: "https://trustwallet.com"
            }
          },
          {
            id: "metaMask",
            name: "MetaMask",
            links: {
              native: "metamask://",
              universal: "https://metamask.io"
            }
          },
          {
            id: "coinbaseWallet",
            name: "Coinbase Wallet",
            links: {
              native: "coinbase://",
              universal: "https://wallet.coinbase.com"
            }
          }
        ]
      }
    }
  });
}

export const config = getDefaultConfig({
  appName: 'Caramelo',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '',
  chains: [mainnet, bsc],
  transports: {
    [mainnet.id]: http(),
    [bsc.id]: http(),
  },
  ssr: true,
  wallets: [{
    groupName: 'Recommended',
    wallets: [
      rainbowWallet,
      rainbowWeb3AuthConnector,
      metaMaskWallet,
      // coinbaseWallet,
      trustWallet,
      injectedWallet,
      walletconnect,
      // phantomWallet
    ],
  }],
});