import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Header() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegisterClick = () => {
    navigate('/registration'); // Navigate to the registration page
  };

  return (
    <div className="mt-32">
      <div className="flex flex-col-reverse sm:flex-row items-center text-white mx-auto w-[85%]">
        {/* Text Section */}
        <div className="sm:w-[50%] md:w-[47%] sm:border-l-4 border-white sm:px-3 pt-6 text-center sm:text-start">
          <p className="bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-transparent uppercase text-[40px] 2xl:text-[80px] font-bold mb-3 sm:mb-2 xl:mb-3 xl:text-[55px] lg:text-[40px] md:text-[28px] sm:text-[25px]">
            MUST WATCH
          </p>

          <p className="md:mt-1 sm:mt-1 uppercase text-[14px] 2xl:text-2xl xl:text-[17px] lg:text-[14px] md:text-[12px] sm:text-[11px]">
            A complete guide resource for filling the Coders Cup Registration Form
          </p>

          <button
            className="bg-[#155084] 2xl:px-6 2xl:py-3 2xl:text-4xl xl:py-3 xl:px-4 lg:py-2 lg:px-4 py-2 px-4 font-bold lg:mt-5 2xl:mt-7 sm:mt-2 mt-4 rounded-md hover:bg-[#33618a] transition duration-100 xl:text-[22px] lg:text-[16px] md:text-[12px] sm:text-[12px] text-[20px]"
            onClick={handleRegisterClick}
          >
            Register Now
          </button>
        </div>

        {/* Spacer */}
        <div className="2xl:w-[10%] xl:w-[15%] lg:w-[15%] md:w-[20%] sm:w-[10%]"></div>

        {/* Responsive Rectangular Video Section */}
        <div className="w-full sm:w-auto mb-3 sm:mb-0">
          <div className="relative w-[320px] sm:w-[400px] md:w-[500px] lg:w-[600px] aspect-[16/9] mx-auto">
            <iframe
              className="absolute inset-0 w-full h-full rounded-3xl shadow-lg"
              src="https://www.youtube.com/embed/plWzLoYqJgY?autoplay=1&mute=1&loop=1&playlist=plWzLoYqJgY"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; loop; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
