import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-[#ffc107] px-[4rem]">
      <section className="pt-10 sm:pt-20 w-full">
        <div className="w-full h-full max-w-[1560px] m-auto md:px-8 px-4">
          <div className="w-full flex items-center md:flex-row flex-col justify-between gap-6text-white font-normal text-lg text-center text-shadow-text">
            <h4 className="text-[#fff] text-base sm:text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[5rem] text-center max-w-[300px] sm:max-w-none ] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_100%)] tracking-wider" >
              Venha fazer parte da comunidade brasileira mais fiel e forte –
              siga a Caramelo Coin nas redes e corra com a gente!
            </h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:mr-0">
              <div className="flex flex-row md:flex-col gap-5 justify-center mt-10 md:mt-0">
                <a
                  target="_blank"
                  className="relative size-[56px] xl:size-[256px]"
                  href="https://t.me/caramelocoincripto"
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
                  href="https://x.com/caramelocoinofc"
                >
                  <Image
                    src="/x-footer.svg"
                    alt="X"
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
                  className="size-full object-contain md:rotate-0 -rotate-90"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center p-[0rem] md:p-[6rem]">
          <Image
            src="/Tokenomics.png"
            width={1200}
            height={800}
            alt="Tokenomics"
            className="w-full max-w-[1200px] h-auto object-contain"
          />
        </div>
      </section>
    </footer>
  );
}
