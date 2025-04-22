
export function Listing() {
  return (
    <div className="w-full lg:py-32 py-12 relative flex flex-col items-center justify-start gap-10 md:gap-20 bg-[#ffc107]">
      <h3 className="text-white text-shadow-text font-normal text-4xl sm:text-2xl md:text-[96px] md:pt-[4rem]">
        Token
      </h3>

      <section className="w-full bg-[url('/listed-by/list.svg')] bg-center bg-contain bg-no-repeat md:w-[600px] h-[280px] md:h-[450px] flex items-center justify-center">
        <div className="w-full h-auto m-auto md:px-8 px-4 flex flex-col gap-4 items-center">
          <span className="text-black text-shadow-text font-normal text-2xl text-center">Nome: <span className=" text-[#ffc107] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_100%)]">Caramelo Coin</span></span>
          <span className="text-black text-shadow-text font-normal text-2xl text-center">Símbolo: <span className=" text-[#ffc107] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_100%)]">CARAMELO</span></span>
          <span className="text-black text-shadow-text font-normal text-2xl text-center">Supply Total: <span className=" text-[#ffc107] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_100%)]">420,000,000,000,000,000</span></span>
          <span className="text-black text-shadow-text font-normal text-2xl text-center">Contrato: <span className=" text-[#ffc107] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_100%)]">0x0...0000</span></span>
        </div>
      </section>
    </div>
  );
}
