import React from 'react';

const CodersCupBanner = () => {
  return (
    <div className="w-3/4 max-w-full h-full rounded-2xl border border-white text-center mx-auto m-8 p-6">
      <div>
        <span className="text-[#17A0B7] text-[6vw] font-bold font-mono break-words">
          CODERS CUP
        </span>
        <span className="bg-gradient-to-b from-gray-200 to-gray-300 text-transparent bg-clip-text text-[6vw] font-bold font-mono break-words mb-6">
          {' '}2024
        </span>
      </div>
      <div className="text-white text-[3vw] font-light font-mono break-words mb-4">
        Technology beyond Imagination
      </div>
    </div>
  );
};

export default CodersCupBanner;