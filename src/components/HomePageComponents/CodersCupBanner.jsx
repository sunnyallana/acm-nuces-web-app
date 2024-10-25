import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CodersCupBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      bannerRef.current,
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: bannerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={bannerRef} 
      className="w-3/4 max-w-full h-full rounded-2xl border border-white text-center mx-auto m-8 p-6"
    >
      <div>
        <span className="text-[#17A0B7] text-[6vw] font-bold font-mono break-words">
          CODERS CUP
        </span>
        <span className="bg-gradient-to-b from-gray-200 to-gray-300 text-transparent bg-clip-text text-[6vw] font-bold font-mono break-words mb-6">
          {' '}2024
        </span>
      </div>
      <div className="text-white text-[3vw] font-light font-mono break-words mb-4">
        Code, Compile, and Conquer
      </div>
    </div>
  );
};

export default CodersCupBanner;
