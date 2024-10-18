import React from "react";
import Marquee from "react-fast-marquee";

export default function GlimpseComponentlow() {
  return (
    <Marquee gradient={false} speed={50} pauseOnHover={true}>
      <div className="w-[260px] h-[195px] sm:w-[340px] sm:h-[255px] md:w-[390px] md:h-[300px] lg:w-[480px] lg:h-[360px] xl:w-[510px] xl:h-[382.5px] 2xl:w-[510px] 2xl:h-[382.5px] bg-[#D9D9D9] mx-4 flex items-center justify-center rounded-xl">
        <p>Div 1</p>
      </div>
      <div className="w-[260px] h-[195px] sm:w-[340px] sm:h-[255px] md:w-[390px] md:h-[300px] lg:w-[480px] lg:h-[360px] xl:w-[510px] xl:h-[382.5px] 2xl:w-[510px] 2xl:h-[382.5px] bg-[#D9D9D9] mx-4 flex items-center justify-center rounded-xl">
        <p>Div 2</p>
      </div>
      <div className="w-[260px] h-[195px] sm:w-[340px] sm:h-[255px] md:w-[390px] md:h-[300px] lg:w-[480px] lg:h-[360px] xl:w-[510px] xl:h-[382.5px] 2xl:w-[510px] 2xl:h-[382.5px] bg-[#D9D9D9] mx-4 flex items-center justify-center rounded-xl">
        <p>Div 3</p>
      </div>
      <div className="w-[260px] h-[195px] sm:w-[340px] sm:h-[255px] md:w-[390px] md:h-[300px] lg:w-[480px] lg:h-[360px] xl:w-[510px] xl:h-[382.5px] 2xl:w-[510px] 2xl:h-[382.5px] bg-[#D9D9D9] mx-4 flex items-center justify-center rounded-xl">
        <p>Div 4</p>
      </div>
    </Marquee>
  );
}
