import React from 'react';
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
      
        {/* Blockeyfi Logo (Placed at the top) */}
        <div className="blockeyfi-logo-container mb-6">
          <img src="https://res.cloudinary.com/dlriiwcsn/image/upload/v1731348560/Untitled_design_5_uzzrl0.png" alt="Blockeyfi" className="max-w-[150px]" />
        </div>

        {/* Sponsor Logos in Row */}
        <div className="flex justify-center gap-6">
          {/* Circliphy Logo (Left) */}
          <img src="https://res.cloudinary.com/dlriiwcsn/image/upload/v1731348643/Circliphy_Tech_partner_qk9s4z.png" alt="Circliphy" className="max-w-[150px]" />
          
          {/* Datacamp Logo (Right) */}
          <img src="https://res.cloudinary.com/dlriiwcsn/image/upload/v1731348617/Datacamp_1_rq7xyo.png" alt="Datacamp" className="max-w-[150px]" />
        </div>
      
        <TitleSponsor />
        <PremiumSponsor />
    </div>
  );
}

export default SponsorComp;