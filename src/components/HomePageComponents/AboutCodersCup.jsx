
import logo from '../../assets/images/coders-cup-logo.png';

export default function AboutCodersCup() {
    return (
        <div className="text-white bg-[#000017] pt-12">
            <h1 className="bg-[#052F54] text-center text-5xl font-semibold py-6 mb-12">ABOUT CODER'S CUP</h1>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center px-4">
                <p className='w-full md:w-6/12 text-center md:text-left'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img className='w-full md:w-4/12' src={logo} alt="Coders Cup Logo" />
            </div>
        </div>
    );
}

import logo from '../../assets/images/coders-cup-logo.png'

export default function AboutCodersCup() {
    return (
        <div className="text-white bg-[#000017] py-8 md:py-12 overflow-hidden">
            <h1 className="bg-[#052F54] text-center text-2xl md:text-3xl lg:text-5xl font-semibold py-4 md:py-6 mb-6 md:mb-12">
                ABOUT CODER'S CUP
            </h1>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center px-4 md:px-8 lg:px-16">
                <p className='w-full md:w-7/12 lg:w-6/12 text-sm md:text-base lg:text-lg text-justify md:text-left'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <img 
                    className='w-64 md:w-4/12 lg:w-3/12 mt-4 md:mt-0' 
                    src={logo} 
                    alt="Coder's Cup Logo"
                />
            </div>
        </div>
    );
}
