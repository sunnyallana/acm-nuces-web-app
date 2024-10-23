import { div } from 'framer-motion/client'
import React from 'react'
import GoldSponsor from './GoldSponsor'
import PremiumSponsor from './PremiumSponsor'

const SponsorComp = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[100%] gap-y-12 py-12'>
        <div className='flex flex-col justify-center items-center w-[100%] gap-y-4 py-16'>
            <h1 className="text-center font-bold text-4xl md:text-7xl bg-gradient-to-b from-gray-200 to-gray-300 text-transparent bg-clip-text">
              OUR <span className="text-[#17A0B7]">PARTNERS</span>
            </h1>
        </div>
        {/* <GoldSponsor/> */}
        <PremiumSponsor/>
    </div>
  )
}

export default SponsorComp