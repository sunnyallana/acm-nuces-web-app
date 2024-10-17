import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const FooterComponent = () => {
  return (
    <footer className="bg-[#000017] text-white">
      <div className="container mx-auto flex flex-row justify-between items-start px-8 py-8 md:px-24">
        <div className="flex-1 mb-6 md:mb-0">
          <div className="rounded bg-zinc-300 w-72 h-72 md:w-72 md:h-72 xl:w-96 xl:h-96 2xl:w-96 2xl:h-96"></div>
        </div>

        <div className="flex-1 flex flex-col items-center md:items-between text-center md:text-left md:ml-4">
          <div className="mb-4">
            <p className="mb-4 mr-4 text-[15px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[25px] font-normal">
              Follow Us
            </p>
            <div className="flex space-x-4">
  <div className="rounded bg-zinc-300 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"></div>
  <div className="rounded bg-zinc-300 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"></div>
  <div className="rounded bg-zinc-300 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"></div>
  <div className="rounded bg-zinc-300 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"></div>
</div>

            <ul className="mt-4 space-y-1 mb-4 text-[15px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[25px] font-normal">
              <li><a href="" className="hover:underline">Privacy Policy</a></li>
              <li><a href="" className="hover:underline">Terms and Conditions</a></li>
              <li><a href="" className="hover:underline">Code Of Conduct</a></li>
            </ul>

            <div className="mt-8">
              <p className="text-[15px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[25px] font-normal">
                Contact Us
              </p>
              <p className="flex items-center text-[15px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[25px] font-normal">
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-white" /> +12-8883456789
              </p>
              <p className="flex items-center text-[15px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[25px] font-normal">
                <span className="mr-2">✉️</span> example@email.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-2 border-t border-black mt-auto">
        <p className="text-center text-[15px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-normal">
          &copy; 2024 ACM | All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default FooterComponent;
