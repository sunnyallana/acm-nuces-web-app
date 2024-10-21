import React from "react";

export default function Rules() {
  return (
    <>
      <div className="lg:my-28 md:my-20 sm:my-12 my-16">
        <div className="text-white text-center sm:mb-8 md:mb-14 lg:mb-20 mb-14 sm:mt-0 mt-8">
          <h1 className="font-[700] text-[34px] 2xl:text-[80px] xl:text-[66px] lg:text-[55px] md:text-[40px] sm:text-[30px]">
            <span className="bg-gradient-to-b from-gray-200 to-gray-300 text-transparent bg-clip-text">
              RULES &amp; REGULATIONS
            </span>
          </h1>
        </div>
        <div className="flex justify-center items-center max-w-[93%] sm:max-w-[92%] md:max-w-[85%] bg-[#FDFDFD1C] mx-auto rounded-2xl border border-[#FFFFFF]">
          <ul className="text-white w-[87%] my-8 text-left list-disc text-[15px] sm:text-[14px] md:text-[15px] xl:text-[18px] 2xl:text-[25px] 2xl:ml-5 xl:ml-8 ml-5">
            <li className="mb-4">
              Internet access is only allowed for code submission via Vjudge.
            </li>
            <li className="mb-4">
              Use of ChatGPT, Google Bard, or similar tools will result in disqualification.
            </li>
            <li className="mb-4">
              Mobile usage is strictly prohibited throughout the competition.
            </li>
            <li className="mb-4">
              Teams collaborating with others in any way will be disqualified.
            </li>
            <li className="mb-4">
              Only C/C++, Python, and Java are allowed for coding.
            </li>
            <li className="mb-4">
              Partial submissions will not earn any points.
            </li>
            <li className="mb-4">
              Vjudge will be used as the competition platform, and teams must create their own accounts.
            </li>
            <li className="mb-4">
              No food or drinks are allowed inside the competition venue.
            </li>
            <li className="mb-4">
              Disqualification will result from plagiarism, unauthorized internet usage (except for Vjudge and IDE), or misconduct with invigilators or participants.
            </li>
            <li className="mb-4">
              Teams should not bring laptops, as PCs will be provided in the lab venue as communicated earlier.
            </li>
            <li className="mb-4">
              The competition will begin at the announced time, and teams must arrive early for instructions.
            </li>
            <li className="mb-4">
              Organizers may adjust rules or competition parameters if unforeseen issues arise, with timely updates to ensure fairness.
            </li>
            <li>
              Note: Any violation of these rules may lead to strict academic consequences.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
