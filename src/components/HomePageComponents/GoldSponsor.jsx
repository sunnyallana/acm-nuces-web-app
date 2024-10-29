import React from 'react';

const tempImage = "https://res.cloudinary.com/dm1xi8zff/image/upload/v1730217455/main-sponsor_jyp6zk.png ";

const GoldSponsor = () => {
  return (
    <div className='w-[100%] flex justify-center items-center flex-col gap-y-4'>
        <h1 className="fira-code text-[#FFFFFF] text-4xl">
            <span className="text-[#FF6089] text-center">Title Sponsor</span>
        </h1>
        <div className='flex sm:flex-row flex-col justify-center items-center sm:gap-x-8 gap-y-8 w-[50%]'>
            <img src={tempImage} alt="Gold Sponsor 2" className='w-72' />
        </div>
    </div>
  )
}

export default GoldSponsor;