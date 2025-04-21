import Image from 'next/image'

export function Footer() {
  return (
    <footer className="w-full hero-bg">
      <section className="pt-10 sm:pt-20 w-full">
        <div className="w-full h-full max-w-[1560px] m-auto md:px-8 px-4">
          <div className="w-full flex items-center md:flex-row flex-col justify-between gap-6">
            <h4 className="text-white font-normal text-lg md:text-4xl text-center text-shadow-text">
              Join the strongest, most unstoppable community on BNB by connecting with us through our socials!!
            </h4>
            <div className="flex items-center gap-4 -mr-48 md:mr-0">
              <div className="flex flex-col gap-5">
                <a 
                  target="_blank" 
                  className="relative size-[56px] xl:size-[256px]" 
                  href="https://t.me/CARAMELOportal_bsc"
                >
                  <Image 
                    src="/tg-footer.svg" 
                    alt="Telegram" 
                    fill 
                    className="size-full object-contain"
                  />
                </a>
                <a 
                  target="_blank" 
                  className="relative size-[56px] xl:size-[256px]" 
                  href="https://x.com/CARAMELOCTO_BNB"
                >
                  <Image 
                    src="/x-footer.svg" 
                    alt="X" 
                    fill 
                    className="size-full object-contain"
                  />
                </a>
                <a 
                  target="_blank" 
                  className="relative size-[56px] xl:size-[256px] z-10" 
                  href="https://dexscreener.com/bsc/0xa5067360b13fc7a2685dc82dcd1bf2b4b8d7868b"
                >
                  <Image 
                    src="/dex-white.png" 
                    alt="DexScreener" 
                    fill 
                    className="size-full object-contain"
                  />
                </a>
              </div>
              <div className="relative xl:w-[236px] w-[62px] h-[197px] xl:h-[730px]">
                <Image 
                  src="/socials-1.svg" 
                  alt="Socials" 
                  fill 
                  className="size-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-[240px] lg:h-[900px] relative -mt-16 xl:-mt-40">
        <Image 
          src="/anim/footer.webp" 
          alt="Footer" 
          fill 
          className="size-full object-cover object-center"
          unoptimized
        />
      </div>
    </footer>
  )
} 