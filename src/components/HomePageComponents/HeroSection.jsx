import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import heroBg from '../../assets/images/backgrounds/hero-bg.png';
import sponsor from '../../assets/images/sponsors/sponsor-logo.png';

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

export default function HeroSection() {
    const navigate = useNavigate();

    // Refs for elements to animate
    const logoRef = useRef(null);
    const buttonRef = useRef(null);
    const sponsorRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        // Initial animations when the section loads
        gsap.fromTo(
            logoRef.current,
            { opacity: 0, scale: 0.5, y: -100 },
            { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'elastic.out(1, 0.75)' }
        );

        gsap.fromTo(
            buttonRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.2 }
        );

        gsap.fromTo(
            sponsorRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1.2, ease: 'expo.out', delay: 0.5 }
        );

        // Scroll-triggered parallax effect on the background
        gsap.to(containerRef.current, {
            backgroundPosition: '50% 30%',
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
            },
        });

        // Scroll-triggered animation for the sponsor section
        gsap.fromTo(
            sponsorRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sponsorRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, []);

    const handleRegisterClick = () => {
        navigate('/registration');
    };

    return (
        <div
            className="w-full bg-cover bg-center h-full flex flex-col justify-between py-20 overflow-hidden"
            style={{ backgroundImage: `url(${heroBg})` }}
            ref={containerRef} // Parallax effect container
        >
            <div className="flex flex-col items-center mt-12">
                <img
                    className="w-64 h-auto mb-4"
                    src="https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964433/coders-cup-logo_n2cwdl.png" // Updated logo URL
                    alt="Coders Cup Logo"
                    ref={logoRef} // Logo animation ref
                />
                <button
                    className="text-white text-lg bg-[#0F5DA3] border border-white rounded-md px-8 py-3 hover:bg-[#0C4B85] transition-transform transform hover:scale-105 active:scale-95"
                    ref={buttonRef} // Button animation ref
                    onClick={handleRegisterClick}
                >
                    Register Now
                </button>
            </div>

            <div className="flex flex-col items-end pr-4 sm:pr-10 mt-12 md:mt-0">
                <p className="text-white font-bold text-sm mb-2 pr-2">POWERED BY</p>
                <a href="https://www.instagram.com/circliphy" target="_blank" rel="noopener noreferrer">
                    <img
                        className="w-24 h-auto max-w-full"
                        src={sponsor}
                        alt="Sponsor Logo"
                        ref={sponsorRef}
                    />
                </a>
            </div>
        </div>
    );
}
