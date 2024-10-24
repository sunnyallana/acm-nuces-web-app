import React from "react";
import part1 from "../../../assets/images/Part-1.png";
import part2 from "../../../assets/images/Part-2.png";
import part3 from "../../../assets/images/Part-3.png";
import bar from "../../../assets/images/bar.png";

export default function EventFlowComponent() {
  return (
    <>
      <div className="my-14 sm:my-20 text-[#FFFFFF] text-center z-10">
        <h1 className="text-[37px] md:text-[42px] lg:text-[56px] xl:text-[96px] font-[700]">
          EVENT FLOW
        </h1>
      </div>

      <div className="mx-6 sm:mx-14 md:mx-20 lg:mx-auto">
        {/* First Part*/}
        <div className="mx-auto relative lg:w-[890px] xl:w-[1080px] 2xl:w-[1300px]">
          <div className="flex justify-center items-center">
            <img src={part1} alt="" />
          </div>

          <div className="absolute flex top-5 sm:top-8 lg:top-10 2xl:top-20 md:left-[-1px] xl:left-[1px] justify-start lg:h-[53%] 2xl:h-auto">
            <div>
              <img
                className="max-w-[0.75rem] sm:max-w-[1.2rem] md:max-w-[1.4rem] lg:max-w-7 xl:max-w-8 2xl:max-w-[100%]"
                src={bar}
                alt=""
              />
            </div>
            <div className="ml-3 mb-5 sm:mb-7 2xl:mt-0 lg:mb-0 xl:mt-5 lg:mt-9 flex flex-col justify-center xl:gap-0 2xl:gap-3 text-[#FFFFFF] w-[74%] sm:w-[60%] lg:w-[45%] xl:w-[40%] 2xl:w-[30%] text-[1.2rem] sm:text-[1.5rem] md:text-[1.76rem] lg:text-[2.3rem] xl:text-[2.5em] 2xl:text-[2.7rem]">
              <h1 className="fira-code-heading font-[600]">
                <span className="whitespace-nowrap">25 October</span>
              </h1>
              <p className="lg:mb-0 mb-2">Registration Starts</p>
              {/* <p className="text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.5rem] 2xl:text-[1.7rem]">
                Sign up to showcase your skills in an exciting competition!
              </p> */}
            </div>

          </div>
        </div>

        {/* Second Part*/}
        <div className="mx-auto relative lg:w-[890px] xl:w-[1080px] 2xl:w-[1300px] bottom-2 md:bottom-3 lg:bottom-4 xl:bottom-5 2xl:bottom-6">
          <div className="flex justify-center items-center">
            <img src={part2} alt="" />
          </div>

          <div className="absolute flex top-5 sm:top-8 lg:top-10 2xl:top-20 right-[22%] md:right-[22.2%] lg:right-[12.3rem] xl:right-[15rem] 2xl:right-[17.8rem] justify-end lg:h-[53%] 2xl:h-auto">
            <div className="mr-3 mb-5 sm:mb-7 2xl:mt-0 lg:mb-0 xl:mt-5 lg:mt-9 flex flex-col justify-center text-end xl:gap-0 2xl:gap-3 text-[#FFFFFF] w-[74%] sm:w-[63.2%] lg:w-[45%] xl:w-[40%] 2xl:w-[50%] text-[1.2rem] sm:text-[1.5rem] md:text-[1.76rem] lg:text-[2.3rem] xl:text-[2.5rem] 2xl:text-[2.7rem]">
              <h1 className="fira-code-heading font-[600]"><span className="whitespace-nowrap">7 November</span></h1>
              <p className="lg:mb-0 mb-2">Qualifier Round Begins</p>
              {/* <p className="text-[0.726rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.5rem] 2xl:text-[1.7rem]">
                Compete to secure your spot in the finals—let the games begin!
              </p> */}
            </div>
            <div>
              <img
                className="max-w-[0.75rem] sm:max-w-[1.2rem] md:max-w-[1.4rem] lg:max-w-7 xl:max-w-8 2xl:max-w-[100%]"
                src={bar}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Third Part*/}
        <div className="mx-auto relative lg:w-[890px] xl:w-[1080px] 2xl:w-[1300px] bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 xl:bottom-9 2xl:bottom-11">
          <div className="flex justify-center items-center">
            <img src={part3} alt="" />
          </div>

          <div className="absolute flex top-5 sm:top-8 lg:top-10 2xl:top-20 left-[22.7%] md:left-[23%] lg:left-[12.7rem] xl:left-[15.4rem] 2xl:left-[18.3rem] justify-start lg:h-[53%] 2xl:h-auto">
            <div>
              <img
                className="max-w-[0.75rem] sm:max-w-[1.2rem] md:max-w-[1.4rem] lg:max-w-7 xl:max-w-8 2xl:max-w-[100%]"
                src={bar}
                alt=""
              />
            </div>
            <div className="ml-3 mb-7 2xl:mt-0 lg:mb-0 xl:mt-5 lg:mt-9 flex flex-col justify-center xl:gap-0 2xl:gap-3 text-[#FFFFFF] w-[78%] sm:w-[60%] lg:w-[45%] xl:w-[40%] 2xl:w-[30%] text-[1.2rem] sm:text-[1.5rem] md:text-[1.76rem] lg:text-[2.3rem] xl:text-[2.5rem] 2xl:text-[2.7rem]">
              <h1 className="fira-code-heading font-[600]"><span className="whitespace-nowrap">14 November</span></h1>
              <p className="lg:mb-0 mb-2">Drafting</p>
              {/* <p className="text-[0.75rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.5rem] 2xl:text-[1.7rem]">
                Finalize your strategies and prepare for the ultimate contest!
              </p> */}
            </div>
          </div>
        </div>

        {/* Fourth Part */}
        <div className="mx-auto relative lg:w-[880px] xl:w-[1080px] 2xl:w-[1300px] bottom-5 sm:bottom-8 md:bottom-9 lg:bottom-12 xl:bottom-14 2xl:bottom-16">
          <div className="flex justify-center items-center">
            <img src={part2} alt="" />
          </div>

          <div className="absolute flex top-5 sm:top-8 lg:top-10 2xl:top-20 right-[22%] md:right-[22.2%] lg:right-[12.3rem] xl:right-[15rem] 2xl:right-[17.8rem] justify-end lg:h-[53%] 2xl:h-auto">
            <div className="mr-3 mb-5 sm:mb-7 2xl:mt-0 lg:mb-0 xl:mt-5 lg:mt-9 flex flex-col justify-center text-end xl:gap-0 2xl:gap-3 text-[#FFFFFF] w-[74%] sm:w-[63.2%] lg:w-[45%] xl:w-[40%] 2xl:w-[50%] text-[1.2rem] sm:text-[1.5rem] md:text-[1.76rem] lg:text-[2.3rem] xl:text-[2.5rem] 2xl:text-[2.7rem]">
              <h1 className="fira-code-heading font-[600]"><span className="whitespace-nowrap">19 November</span></h1>
              <p className="lg:mb-0 mb-2">Final Round & Closing Ceremony</p>
              {/* <p className="text-[0.726rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.5rem] 2xl:text-[1.7rem]">
                 Watch top competitors battle for victory!
              </p> */}
            </div>
            <div>
              <img
                className="max-w-[0.75rem] sm:max-w-[1.2rem] md:max-w-[1.4rem] lg:max-w-7 xl:max-w-8 2xl:max-w-[100%]"
                src={bar}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}