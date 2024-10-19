import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import img from "../../../assets/images/header-registration.svg";

export default function Header() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDragStart = (event) => {
    event.preventDefault();
  };

  const handleRegisterClick = () => {
    navigate('/registration'); // Navigate to the registration page
  };

  return (
    <div className="mt-32">
      <div className="flex flex-col-reverse sm:flex-row items-center text-white mx-auto w-[85%]">
        <div className="sm:w-[50%] md:w-[47%] sm:border-l-4 border-white sm:px-3 pt-6 text-center sm:text-start"> {/* Increased padding-top */}
          <p className="uppercase text-[40px] 2xl:text-[80px] font-bold mb-3 sm:mb-2 xl:mb-3 xl:text-[55px] lg:text-[40px] md:text-[28px] sm:text-[25px]">
            any heading
          </p>
          <p className="md:mt-1 sm:mt-1 uppercase text-[14px] 2xl:text-2xl xl:text-[17px] lg:text-[14px] md:text-[12px] sm:text-[11px]">
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ment
            text and icons.
          </p>

          <button
            className="bg-[#155084] 2xl:px-6 2xl:py-3 2xl:text-4xl xl:py-3 xl:px-4 lg:py-2 lg:px-4 py-2 px-4 font-bold lg:mt-5 2xl:mt-7 sm:mt-2 mt-4 rounded-md hover:bg-[#33618a] transition duration-100 xl:text-[22px] lg:text-[16px] md:text-[12px] sm:text-[12px] text-[20px]"
            onClick={handleRegisterClick} // Handle button click
          >
            Register Now
          </button>
        </div>
        <div className="2xl:w-[10%] xl:w-[15%] lg:w-[15%] md:w-[20%] sm:w-[10%]"></div>
        <div className="2xl:w-[40%] xl:w-[35%] lg:w-[35%] md:w-[33%] sm:w-[40%] w-[75%] mb-3 sm:mb-0" style={{ userSelect: 'none' }}>
          <img 
            src={img} 
            alt="right-img" 
            style={{ userSelect: 'none' }} 
            onDragStart={handleDragStart}
          />
        </div>
      </div>
    </div>
  );
}