import Image from 'next/image'

export function Story() {
  return (
    <div className="w-full bg-[#ffffff]">
      <div className="w-full relative">
        <section className="w-full relative lg:py-20 py-10">
          <div className="w-full h-full max-w-[1560px] m-auto md:px-8 px-4">
            <div className="w-full flex flex-col md:flex-row gap- md:items-center">
              <aside className="size-full text-[#ffc107] font-normal flex flex-col items-center justify-start gap-4 md:gap-8">
                <h3 className="text-[28px] sm:text-[2rem] md:text-[56px] text-center w-full max-w-[300px] sm:max-w-none text-[#ffc107] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_100%)]">A história do Caramelo</h3>
                <p className="text-base sm:text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[5rem] text-center max-w-[300px] sm:max-w-none text-[#ffc107] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_100%)]">O cachorro caramelo brasileiro é um cão vira-lata, muito comum nas ruas do Brasil. Ele representa a resistência, a simplicidade e o afeto do povo brasileiro, tornando-se um símbolo cultural de identificação, humor e carinho nacional..</p>
                <p className="text-base sm:text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[5rem] text-center max-w-[300px] sm:max-w-none text-[#ffc107] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_100%)]">Desenvolvido pela rede BNB Smart-Chain, no coração da Caramelo Coin, está um movimento criptográfico dedicado a apoiar ONGs que lutam diariamente para dar dignidade e um lar para os amados cachorros "Caramelo".</p>
                <p className="text-base sm:text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[5rem] text-center max-w-[300px] sm:max-w-none text-[#ffc107] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_100%)]">Cada transação com CarameloCoin tem o potencial de transformar a vida de um animal vulnerável, proporcionando recursos para alimentação, tratamentos veterinários e campanhas de adoção.</p>
                <p className="text-sm sm:text-base text-gray-400 max-w-[300px] sm:max-w-none">A visão da Caramelo é criar</p>
              </aside>
              <aside className="h-[300px] md:h-[600px] w-full md:w-[40%] relative">
                <div className="size-full absolute top-0 -right-8 2xl:-right-20">
                  <div className="size-full relative -mr-20">
                    <Image 
                      src="/caramelos-de-rua.png" 
                      alt="Gallery" 
                      fill 
                      className="object-contain"
                    />
                  </div>
                </div>
              </aside>
            </div>
            {/* <div className="absolute -left-5 sm:left-0 -bottom-14 md:-bottom-28 2xl:-bottom-44 size-[200px] md:size-[550px]">
              <div className="relative size-full">
                <Image 
                  src="/anim/petting.webp" 
                  alt="Petting" 
                  fill 
                  className="size-full object-contain"
                  unoptimized
                />
              </div>
            </div> */}
          </div>
        </section>
  
      </div>
    </div>
  )
} 