import React from 'react'
import TitleSponsor from "./TitleSponsor.jsx";
import PremiumSponsor from './PremiumSponsor.jsx';

const SponsorComp = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[100%] py-12'>
        <div className='flex flex-col justify-center items-center w-[100%] py-12'>
            <h1 className="text-center font-bold text-4xl md:text-7xl bg-gradient-to-b from-gray-200 to-gray-300 text-transparent bg-clip-text">
              OUR <span className="text-[#17A0B7]">PARTNERS</span>
            </h1>
        </div>
      <div className="flex justify-center px-2 sm:px-0 text-center items-center mb-4">
      </div>
        <TitleSponsor/>
        <PremiumSponsor/>
    </div>
  )
}

export default SponsorComp