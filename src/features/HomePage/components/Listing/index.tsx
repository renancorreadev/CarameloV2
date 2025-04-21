import Image from 'next/image'
import Link from 'next/link'

export function Listing() {
  return (
    <div className="w-full lg:py-32 py-12 relative flex flex-col items-center justify-start gap-10 md:gap-20">
      <h3 className="text-white text-shadow-text font-normal text-2xl md:text-[96px]">LISTED BY:</h3>
      
      <section 
        className="w-full w-full bg-[url('/listed-by/list.svg')] bg-center bg-contain bg-no-repeat h-[280px] md:h-[950px]"
      >
        <div className="w-full h-full max-w-[1560px] m-auto md:px-8 px-4">
          <div className="size-full relative flex items-center justify-center">
            <div className="md:w-[830px] w-[320px] h-[200px] md:h-[450px] flex items-center justify-center md:gap-x-12 gap-x-6 gap-y-1 md:gap-y-6 flex-wrap">
              <Link 
                href="https://www.binance.com/en/price/czsdog-CARAMELO" 
                target="_blank"
                className="md:text-3xl text-[10px] text-black font-extrabold font-sans italic"
              >
                BINANCE ALPHA
              </Link>
              
              <Link 
                href="https://www.bybit.com/trade/usdt/CARAMELOUSDT" 
                target="_blank"
                className="relative md:h-[54px] md:w-[137px] h-[18px] w-[45px]"
              >
                <Image 
                  src="/listed-by/bybit.svg" 
                  alt="" 
                  fill 
                  className="size-full object-contain"
                />
              </Link>

              <Link 
                href="https://www.coingecko.com/en/coins/czs-dog" 
                target="_blank"
                className="relative md:size-[80px] size-[27px]"
              >
                <Image 
                  src="/listed-by/coingecko.svg" 
                  alt="" 
                  fill 
                  className="size-full object-contain"
                />
              </Link>

              <Link 
                href="https://www.kcex.com/exchange/CARAMELO_USDT" 
                target="_blank"
                className="relative md:size-[85px] size-[28px]"
              >
                <Image 
                  src="/listed-by/kcex.svg" 
                  alt="" 
                  fill 
                  className="size-full object-contain"
                />
              </Link>

              <Link 
                href="https://www.coinex.com/en/exchange/CARAMELO-usdt" 
                target="_blank"
                className="relative md:h-[122px] md:w-[163px] h-[40px] w-[55px]"
              >
                <Image 
                  src="/listed-by/coinex.svg" 
                  alt="" 
                  fill 
                  className="size-full object-contain"
                />
              </Link>

              <Link 
                href="https://coinmarketcap.com/currencies/czsdog-CARAMELO/" 
                target="_blank"
                className="relative md:size-[80px] size-[27px]"
              >
                <Image 
                  src="/listed-by/coinmarket.svg" 
                  alt="" 
                  fill 
                  className="size-full object-contain"
                />
              </Link>

              <Link 
                href="https://www.gate.io/trade/CARAMELO_USDT" 
                target="_blank"
                className="relative md:size-[80px] size-[27px]"
              >
                <Image 
                  src="/listed-by/gate.io.svg" 
                  alt="" 
                  fill 
                  className="size-full object-contain"
                />
              </Link>

              <Link 
                href="https://bingx.com/en/spot/CARAMELOUSDT/" 
                target="_blank"
                className="relative md:size-[161px] size-[54px]"
              >
                <Image 
                  src="/listed-by/bingx.svg" 
                  alt="" 
                  fill 
                  className="size-full object-contain"
                />
              </Link>

              <Link 
                href="https://www.bitget.com/spot/CARAMELOUSDT" 
                target="_blank"
                className="relative md:size-[81px] size-[27px]"
              >
                <Image 
                  src="/listed-by/bitget.svg" 
                  alt="" 
                  fill 
                  className="size-full object-contain"
                />
              </Link>

              <Link 
                href="https://www.bitmart.com/trade/en-US?symbol=CARAMELO_USDT" 
                target="_blank"
                className="relative md:h-[97px] md:w-[81px] h-[32px] w-[27px]"
              >
                <Image 
                  src="/listed-by/bitmart.svg" 
                  alt="" 
                  fill 
                  className="size-full object-contain"
                />
              </Link>

              <Link 
                href="https://www.bitunix.com/spot-trade/CARAMELOUSDT" 
                target="_blank"
                className="relative md:size-[81px] size-[27px]"
              >
                <Image 
                  src="/listed-by/logos.svg" 
                  alt="" 
                  fill 
                  className="size-full object-contain"
                />
              </Link>

              <Link 
                href="https://www.lbank.com/trade/CARAMELO_usdt" 
                target="_blank"
                className="relative md:size-[152px] size-[51px]"
              >
                <Image 
                  src="/listed-by/ibank.svg" 
                  alt="" 
                  fill 
                  className="size-full object-contain"
                />
              </Link>

              <Link 
                href="https://www.weex.com/trade/CARAMELO-USDT" 
                target="_blank"
                className="relative md:h-[100px] md:w-[160px] h-[33px] w-[53px]"
              >
                <Image 
                  src="/listed-by/yellow.svg" 
                  alt="" 
                  fill 
                  className="size-full object-contain"
                />
              </Link>

              <Link 
                href="https://www.mexc.com/exchange/CARAMELO_USDT" 
                target="_blank"
                className="relative md:h-[62px] md:w-[101px] h-[22px] w-[34px]"
              >
                <Image 
                  src="/listed-by/clip.svg" 
                  alt="" 
                  fill 
                  className="size-full object-contain"
                />
              </Link>
            </div>

            <div className="absolute left-[4%] md:left-[8%] top-0 md:-top-2 md:h-[190px] h-[52px] w-[180px] md:w-[660px]">
              <Image 
                src="/listed-by/ruler.svg" 
                alt="" 
                fill 
                className="object-contain size-full"
              />
            </div>

            <div className="absolute right-[26%] md:right-[30%] -bottom-6 md:-bottom-12 h-[85px] md:h-[315px] md:w-[540px] w-[150px]">
              <Image 
                src="/listed-by/triangle.svg" 
                alt="" 
                fill 
                className="object-contain size-full"
              />
            </div>
          </div>
        </div>
      </section>

  

      <div className="lg:inline-block hidden absolute right-4 top-[45%] h-[280px] w-[180px]">
        <Image 
          src="/listed-by/dividers.svg" 
          alt="" 
          fill 
          className="object-contain size-full"
        />
      </div>
    </div>
  )
} 