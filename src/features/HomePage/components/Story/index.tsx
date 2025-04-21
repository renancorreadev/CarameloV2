import Image from 'next/image'

export function Story() {
  return (
    <div className="w-full hero-bg">
      <div className="w-full relative">
        <section className="w-full relative lg:py-20 py-10">
          <div className="w-full h-full max-w-[1560px] m-auto md:px-8 px-4">
            <div className="w-full grid xl:grid-cols-[1.5fr,1fr] gap-8 xl:gap-0">
              <aside className="size-full text-white font-normal flex flex-col items-center justify-start gap-4 md:gap-8">
                <h3 className="md:text-[96px] text-[32px] text-shadow-text text-center">CARAMELO's story</h3>
                <p className="text-lg md:text-3xl text-center text-shadow-text">CARAMELO is a Belgian Malinois recently adopted by the founder of Binance.</p>
                <p className="text-lg md:text-3xl text-center text-shadow-text">Paying homage to CZ's dog CARAMELO, this token was the first to be deployed on BNB Chain through the platform four.meme.</p>
                <p className="text-lg md:text-3xl text-center text-shadow-text">The CARAMELO token is managed and owned by its community, with love.</p>
                <p className="text-gray-400">Caramelo&apos;s journey began with a simple idea</p>
                <p className="text-gray-400">Caramelo&apos;s vision is to create</p>
              </aside>
              <aside className="h-[500px] md:h-[900px] w-full relative">
                <div className="size-full absolute top-0 -right-8 2xl:-right-20">
                  <div className="size-full relative -mr-20">
                    <Image 
                      src="/gallery.png" 
                      alt="Gallery" 
                      fill 
                      className="object-contain"
                    />
                  </div>
                </div>
              </aside>
            </div>
            <div className="absolute -left-5 sm:left-0 -bottom-14 md:-bottom-28 2xl:-bottom-44 size-[200px] md:size-[550px]">
              <div className="relative size-full">
                <Image 
                  src="/anim/petting.webp" 
                  alt="Petting" 
                  fill 
                  className="size-full object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>
  
      </div>
    </div>
  )
} 