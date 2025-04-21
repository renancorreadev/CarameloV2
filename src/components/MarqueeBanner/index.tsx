import Marquee from "react-fast-marquee";

export  function MarqueeBanner() {
  return (
    <div className="bg-black h-[56px] md:h-[210px] flex items-center">
      <Marquee speed={60} gradient={false}>
        {Array.from({ length: 20 }).map((_, i) => (
          <h2
            key={i}
            className="text-shadow-text text-white mx-3 md:mx-8 font-normal text-[15px] md:text-[96px]"
          >
            CARAMELO
          </h2>
        ))}
      </Marquee>
    </div>
  );
}
