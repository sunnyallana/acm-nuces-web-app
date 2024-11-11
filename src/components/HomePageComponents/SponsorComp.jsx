import React from 'react';
import './SponsorComp.css'; // Make sure to import the CSS file

const SponsorComp = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[100%] py-12">
      <div className="flex flex-col justify-center items-center w-[100%] py-12">
        <h1 className="text-center font-bold text-4xl md:text-7xl bg-gradient-to-b from-gray-200 to-gray-300 text-transparent bg-clip-text">
          OUR <span className="text-[#17A0B7]">PARTNERS</span>
        </h1>
      </div>
      <div className="flex justify-center px-2 sm:px-0 text-center items-center mb-4">
        {/* Sponsor logos section */}
        <div className="sponsor-container flex flex-wrap justify-center items-center gap-8">
          <div className="sponsor-logo">
            <img
              src="https://res.cloudinary.com/dlriiwcsn/image/upload/v1731348643/Circliphy_Tech_partner_qk9s4z.png"
              alt="Circliphy Tech Partner"
              className="sponsor-image"
            />
          </div>
          <div className="sponsor-logo">
            <img
              src="https://res.cloudinary.com/dlriiwcsn/image/upload/v1731348560/Untitled_design_5_uzzrl0.png"
              alt="Blockeyfi"
              className="sponsor-image"
            />
          </div>
          <div className="sponsor-logo">
            <img
              src="https://res.cloudinary.com/dlriiwcsn/image/upload/v1731348617/Datacamp_1_rq7xyo.png"
              alt="Datacamp"
              className="sponsor-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorComp;