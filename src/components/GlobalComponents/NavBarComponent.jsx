import logo from '../../assets/images/coders-cup-logo.png';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Homepage', bgColor: 'bg-[#58151E]' },
    { label: 'Rules and Event Flow', bgColor: 'bg-[#1E1E1E]' },
    { label: 'Registration', bgColor: 'bg-[#987734]' },
    { label: 'FAQ', bgColor: 'bg-[#155084]' }
  ];

  return (
    <nav className="rounded-lg mt-4 w-11/12 mx-auto absolute top-0 left-0 right-0 bg-[#ffffff29] bg-opacity-50">
      <div className="max-w-[90rem] mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <img src={logo} alt="Coders Cup Logo" className="h-8 sm:h-12 w-auto" />

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`${item.bgColor} text-white border border-white px-3 xl:px-10 flex items-center justify-center py-1 text-sm xl:text-base whitespace-nowrap`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Register Now Button */}
          <button className="hidden lg:block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors whitespace-nowrap">
            Register Now
          </button>
        </div>

        {/* Mobile/Tablet Navigation */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:hidden absolute left-0 right-0 top-full bg-[#ffffff29] backdrop-blur-md rounded-b-lg z-50`}
        >
          <div className="px-2 pt-2 pb-3 space-y-2 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:space-y-0 sm:gap-2 sm:p-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`${item.bgColor} text-white border border-white px-3 py-2 text-base font-medium text-center 
                  sm:flex-1 sm:min-w-[150px] sm:max-w-[200px] sm:py-1`}
              >
                {item.label}
              </a>
            ))}
            <button className="bg-red-600 text-white px-4 py-2 rounded w-full sm:flex-1 sm:min-w-[150px] sm:max-w-[200px] sm:py-1 
              hover:bg-red-700 transition-colors">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}