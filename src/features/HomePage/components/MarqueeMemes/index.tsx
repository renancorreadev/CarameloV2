import Image from "next/image";
import "./marquee.css";

export function MarqueeMemes() {
  const memes = Array.from({ length: 14 }, (_, i) => `/memes/Meme${i + 1}.svg`);

  return (
    <div className="w-full pb-10 overflow-hidden z-10 flex flex-col md:pt-[120px] md:!pb-[120px] bg-[#ffffff]">
      <div
        className="rfm-marquee"
        style={{
          ["--play" as any]: "running",
          ["--direction" as any]: "normal",
          ["--duration" as any]: "22.2912255859375s",
          ["--delay" as any]: "0s",
          ["--iteration-count" as any]: "infinite",
          ["--min-width" as any]: "100%",
        }}
      >
        {memes.map((src, i) => (
          <div
            key={`second-${i}`}
            className="rfm-child"
            style={{ ["--transform" as any]: "none" }}
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
  );
}
