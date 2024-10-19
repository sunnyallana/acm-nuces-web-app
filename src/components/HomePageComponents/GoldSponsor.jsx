import React from 'react'
import temp from "../../assets/images/temp.png"

const GoldSponsor = () => {
  return (
    <div className='w-[100%] flex justify-center items-center flex-col gap-y-4'>
        <h1 className="fira-code text-[#FFFFFF] text-4xl">
            <span className="text-[#FF6089]">Gold Sponsors</span>
        </h1>
        <div className='flex sm:flex-row flex-col justify-center items-center sm:gap-x-8 gap-y-8 w-[50%]'>
            <img src={temp} alt="" className='w-72'/>
            <img src={temp} alt="" className='w-72'/>
        </div>
    </div>
  )
}

export default GoldSponsor