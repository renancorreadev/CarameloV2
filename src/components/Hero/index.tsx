import Image from 'next/image'

export function Hero() {
  return (
    <div className="w-full h-[calc(100dvh-66px)] md:h-[calc(100dvh-113px)] relative hero-bg">
      <section className="w-full size-full">
        <div className="w-full h-full max-w-[1560px] m-auto md:px-8 px-4">
          <div className="size-full flex flex-col items-center justify-center">
            <h1 className="text-[48px] md:text-[168px] font-normal text-white text-shadow-text bg-clip-text bg-transparent">CARAMELO</h1>
          </div>
        </div>
      </section>
      <div className="size-full top-0 left-0 absolute">
        <div className="size-full relative z-10">
          <Image 
            src="/anim/banner.webp" 
            alt="Banner" 
            fill 
            className="size-full object-cover object-center"
            unoptimized
          />
        </div>
      </div>
    </div>
  )
} 