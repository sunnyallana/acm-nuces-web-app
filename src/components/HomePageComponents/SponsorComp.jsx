import { div } from 'framer-motion/client'
import React from 'react'
import GoldSponsor from './GoldSponsor'
import PremiumSponsor from './PremiumSponsor'

const SponsorComp = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[100%] gap-y-12 py-12'>
        <div className='flex flex-col justify-center items-center w-[100%] gap-y-4 py-16'>
            <h1 className="fira-code text-[#FFFFFF] text-6xl">
                <span className="text-[#17A0B7]">SPONSORS</span>
            </h1>
            <p className='md:w-6/12 text-3xl text-center text-white'>Interesting in <span className='font-bold'>Sponsoring?</span> Contact us</p>
        </div>
        <GoldSponsor/>
        <PremiumSponsor/>
    </div>
  )
}

export default SponsorComp