import Image from 'next/image'
import "./marquee.css"


export function MarqueeMemes() {
    const memes = Array.from({ length: 14 }, (_, i) => `/memes/Meme${i + 1}.svg`);
  
    return (
      <div className="w-full pb-10 overflow-hidden z-10 flex flex-col xl:-mt-32">
      <div className="w-[120%] filter drop-shadow-[8px_8px_12px_rgba(0,0,0,0.6)] -ml-10 sm:-ml-24 relative h-[120px] md:h-[400px] transform -rotate-[10deg]">
        <Image 
          src="/br-top-4.png" 
          alt="Top" 
          fill 
          className="object-cover object-top w-full"
        />
      </div>
      <div className="w-[120%] overflow-hidden h-[130px] md:h-[640px] relative z-20 bg-white transform -rotate-[10deg] -mt-16 -ml-10 md:-ml-20">
      <div 
        className="rfm-marquee-container w-full h-full flex items-center" 
        style={{
          ['--pause-on-hover' as any]: 'running',
          ['--pause-on-click' as any]: 'running',
          ['--width' as any]: '100%',
          ['--transform' as any]: 'none'
        }}
      >
        <div
          className="rfm-marquee"
          style={{
            ['--play' as any]: 'running',
            ['--direction' as any]: 'normal',
            ['--duration' as any]: '22.2912255859375s',
            ['--delay' as any]: '0s',
            ['--iteration-count' as any]: 'infinite',
            ['--min-width' as any]: '100%'
          }}
        >
          <div className="rfm-initial-child-container">
            {memes.map((src, i) => (
              <div 
                key={`first-${i}`}
                className="rfm-child"
                style={{ ['--transform' as any]: 'none' }}
              >
                <div className="relative size-[84px] md:size-[400px] mx-4 md:mx-10">
                  <Image
                    alt=""
                    src={src}
                    fill
                    className="object-cover size-full object-center"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <div
          className="rfm-marquee"
          style={{
            ['--play' as any]: 'running',
            ['--direction' as any]: 'normal',
            ['--duration' as any]: '22.2912255859375s',
            ['--delay' as any]: '0s',
            ['--iteration-count' as any]: 'infinite',
            ['--min-width' as any]: '100%'
          }}
        >
          {memes.map((src, i) => (
            <div 
              key={`second-${i}`}
              className="rfm-child"
              style={{ ['--transform' as any]: 'none' }}
            >
              <div className="relative size-[84px] md:size-[400px] mx-4 md:mx-10">
                <Image
                  alt=""
                  src={src}
                  fill
                  className="object-cover size-full object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <div className="w-[120%] -ml-10 sm:-ml-16 filter drop-shadow-[8px_8px_12px_rgba(0,0,0,0.6)] relative h-[100px] -mt-8 md:-mt-16 md:h-[400px] transform -rotate-[10deg]">
        <Image 
          src="/br-bottom-3.png" 
          alt="Bottom" 
          fill 
          className="object-cover object-right-bottom w-full"
        />
      </div>
    </div>
    );
  }
  