import React from "react";
import part1 from "../../../assets/images/Part-1.png";
import part2 from "../../../assets/images/Part-2.png";
import bar from "../../../assets/images/bar.png";

export default function EventFlowComponent() {
  return (
    <>
      <div className="my-20 text-center">
        <h1 className="font-[700] text-[34px] 2xl:text-[80px] xl:text-[66px] lg:text-[55px] md:text-[40px] sm:text-[30px]">
          <span className="bg-gradient-to-b from-gray-200 to-gray-300 text-transparent bg-clip-text">
            EVENT FLOW
          </span>
        </h1>
      </div>

      <div className="mx-auto">
        <div className="mx-auto relative xl:w-[1080px] 2xl:w-[1300px]">
          <div className="flex justify-center items-center">
            <img src={part1} alt="" />
          </div>

          <div className="absolute flex xl:top-10 2xl:top-20 xl:right-[16%] xl:left-[-1.2px] justify-start xl:h-[53%] 2xl:h-auto">
            <div>
              <img className="xl:max-w-8 2xl:max-w-[100%]" src={bar} alt="" />
            </div>
            <div className="ml-3 flex flex-col justify-center xl:gap-0 2xl:gap-3 text-[#FFFFFF] xl:w-[40%] 2xl:w-[30%] xl:text-[2.5em] 2xl:text-[2.7rem]">
              <h1>20 August</h1>
              <p>event code</p>
              <p className="xl:text-[1.5rem] 2xl:text-[1.7rem]">
                Gorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>

        {/* Second Part*/}
        <div className="mx-auto relative xl:w-[1080px] 2xl:w-[1300px] xl:bottom-5 2xl:bottom-6">
          <div className="flex justify-center items-center">
            <img src={part2} alt="" />
          </div>

          <div className="absolute flex xl:top-10 2xl:top-20 xl:right-[15rem] 2xl:right-[17.8rem] justify-end xl:h-[53%] 2xl:h-auto">
            <div className="mr-3 flex flex-col justify-center xl:gap-0 2xl:gap-3 text-[#FFFFFF] xl:w-[40%] 2xl:w-[30%] xl:text-[2.5rem] 2xl:text-[2.7rem]">
              <h1>20 August</h1>
              <p>event code</p>
              <p className="xl:text-[1.5rem] 2xl:text-[1.7rem]">
                Gorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div>
              <img className="xl:max-w-8 2xl:max-w-[100%]" src={bar} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}