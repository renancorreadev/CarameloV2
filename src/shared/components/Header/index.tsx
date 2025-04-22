import Image from 'next/image'
import Link from 'next/link'

import { ConnectButton } from '@rainbow-me/rainbowkit';

export function Header() {
  return (
    <section className="w-full bg-white h-[66px] md:h-[113px] p-8">
      <div className="w-full h-full max-w-[1560px] m-auto md:px-8 px-4">
        <nav className="size-full flex items-center justify-between">
          <Link href="/" className="size-[95px] md:size-[100px] relative">
            <Image 
              src="/dog.png" 
              alt="Logo" 
              fill 
              className="size-full object-contain"
            />
          </Link>
          <div className="flex items-center gap-4 sm:gap-16">
            <a 
              target="_blank" 
              href="https://t.me/caramelocoincripto" 
              className="md:h-[50px] size-[24px] md:w-[55px] relative"
            >
              <Image 
                src="/tg.svg" 
                alt="Telegram" 
                fill 
                className="size-full object-contain"
              />
            </a>
            <a 
              target="_blank" 
              href="https://x.com/caramelocoinofc" 
              className="md:size-[50px] size-[20px] relative"
            >
              <Image 
                src="/x.svg" 
                alt="X" 
                fill 
                className="size-full object-contain"
              />
            </a>
        
            <ConnectButton />
          </div>
        </nav>
      </div>
    </section>
  )
} 