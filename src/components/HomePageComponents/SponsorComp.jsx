import React from 'react'

const SponsorComp = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[100%] py-12'>
        <div className='flex flex-col justify-center items-center w-[100%] py-12'>
            <h1 className="text-center font-bold text-4xl md:text-7xl bg-gradient-to-b from-gray-200 to-gray-300 text-transparent bg-clip-text">
              OUR <span className="text-[#17A0B7]">PARTNERS</span>
            </h1>
        </div>
      <div className="flex justify-center px-2 sm:px-0 text-center items-center mb-4">
        {/* <h1 className="fira-code text-[#FFFFFF] text-4xl"> */}
        <h6 className="text-center font-bold text-4xl md:text-4xl bg-gradient-to-b from-gray-200 to-gray-300 text-transparent bg-clip-text">
          TO BE REVEALED SOON
          {/* <span className="text-[#FFD866]">PREMIUM SPONSORS</span> */}
        </h6>
      </div>
        {/* <GoldSponsor/> */}
        {/* <PremiumSponsor/> */}
    </div>
  )
}

export default SponsorComp