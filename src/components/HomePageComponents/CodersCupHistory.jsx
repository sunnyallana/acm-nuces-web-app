import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Import images
import event1 from "../../assets/images/events/event1.jpg";
import event2 from '../../assets/images/events/event2.jpg';
import event3 from '../../assets/images/events/event3.jpg';
import event4 from '../../assets/images/events/event4.jpg';
import event5 from '../../assets/images/events/event5.jpg';
import event6 from '../../assets/images/events/event6.jpg';
import event7 from '../../assets/images/events/event7.jpg';
import event8 from '../../assets/images/events/event8.jpg';
import event9 from '../../assets/images/events/event9.jpg';
import event10 from '../../assets/images/events/event10.jpg';
import event11 from '../../assets/images/events/event11.jpg';
import event12 from '../../assets/images/events/event12.jpg';
import event13 from '../../assets/images/events/event13.jpg';
import event14 from '../../assets/images/events/event14.jpg';
import event15 from '../../assets/images/events/event15.jpg';
import event16 from '../../assets/images/events/event16.jpg';
import event17 from '../../assets/images/events/event17.jpg';
import event18 from '../../assets/images/events/event18.jpeg';
import event19 from '../../assets/images/events/event19.jpg';
import event20 from '../../assets/images/events/event20.jpg';
import event21 from '../../assets/images/events/event21.jpg';
import event22 from '../../assets/images/events/event22.jpg';
import event23 from '../../assets/images/events/event23.jpg';

// Store images in an array
const eventImages = [
  event1, event2, event3, event4, event5, event6, event7, event8,
  event9, event10, event11, event12, event13, event14, event15,
  event16, event17, event18, event19, event20, event21, event22, event23
];

const CodersCupHistory = () => {
  // Refs to target elements for animation
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Heading Animation on Scroll
    gsap.fromTo(
      headingRef.current,
      { y: -100, opacity: 0 }, // Initial state
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%', // Animation starts when 80% of the element is visible
          toggleActions: 'play none none none',
        },
      }
    );

    // Description Animation on Scroll
    gsap.fromTo(
      descRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: descRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Image Slider Animation on Scroll
    gsap.fromTo(
      sliderRef.current.querySelectorAll('.splide__slide'),
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2, // Stagger the animation for each slide
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sliderRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div className="bg-transparent text-white p-6">
      {/* Heading */}
      <h1
        ref={headingRef}
        className="text-center text-3xl md:text-7xl font-bold py-6 px-2 mb-6 bg-gradient-to-b from-gray-200 to-gray-300 text-transparent bg-clip-text"
      >
        <span className="text-[#17A0B7]">CODERS CUP</span> HISTORY
      </h1>

      {/* Description */}
      <p
        ref={descRef}
        className="text-center text-lg md:text-xl mb-10 px-4 md:px-20"
      >
        Over the years, the event has grown in scale, attracting talented participants. Coder's Cup not only nurtures technical excellence but also encourages collaboration and teamwork, establishing itself as a prestigious platform for budding coders.
      </p>

      {/* Image Slider */}
      <div ref={sliderRef} className="w-full sm:max-w-[90%] mx-auto">
        <Splide
          options={{
            rewind: true,
            gap: '',
            width: '100%',
            autoplay: true,
            pauseOnHover: true,
            type: 'loop',
          }}
          aria-label="Event Highlights"
        >
          {eventImages.map((src, index) => (
            <SplideSlide key={index}>
              <img
                src={src}
                alt={`Event ${index + 1}`}
                className="w-full mx-auto pb-4 rounded-xl object-contain h-[400px] md:h-[600px]"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .splide__arrow {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CodersCupHistory;
