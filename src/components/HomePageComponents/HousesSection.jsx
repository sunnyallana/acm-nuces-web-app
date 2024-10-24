import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Player from "../../assets/images/houses/ronaldo.png";
import RealMadridPlayer from "../../assets/images/houses/ronaldo.png";
import ManchestorPlayer from "../../assets/images/houses/Rooney.png";
import BarcelonaPlayer from "../../assets/images/houses/Messi.png";
import ArsenalPlayer from "../../assets/images/houses/Ozil.png";
import RealMadrid from "../../assets/images/houses/real-madrid.png";
import Manchestor from "../../assets/images/houses/manchestor.png";
import Barcelona from "../../assets/images/houses/barcelona.png";
import Arsenal from "../../assets/images/houses/arsenal.png";
import Background from "../../assets/images/houses/bg.png";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const HousesSection = () => {
  const [currentPlayer, setCurrentPlayer] = useState(Player);

  // Create refs for animated elements
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const playerImageRef = useRef(null);
  const clubCardsRef = useRef([]);

  useEffect(() => {
    // Ensure ScrollTrigger is refreshed after layout render
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      // Background parallax effect
      gsap.to(".background", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Title Animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Left and Right Columns Animation
      gsap.fromTo(
        [leftColumnRef.current, rightColumnRef.current],
        { opacity: 0, x: (index) => (index === 0 ? -100 : 100) },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: leftColumnRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Player Image Animation
      gsap.fromTo(
        playerImageRef.current,
        { opacity: 0, scale: 0.8, rotation: -15 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: playerImageRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Club Cards Animation
      clubCardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            delay: index * 0.2,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleHover = (playerImage) => {
    gsap.to(playerImageRef.current, {
      opacity: 0,
      scale: 0.8,
      rotation: -15,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        setCurrentPlayer(playerImage);
        gsap.to(playerImageRef.current, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });
      },
    });
  };

  return (
    <div ref={sectionRef} className="relative flex flex-col justify-center items-center gap-y-4 p-8 min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div
          className="background w-full md:w-11/12 h-screen bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${Background})` }}
        />
      </div>

      {/* Title Section */}
      <h1
        ref={titleRef}
        className="text-white text-center text-4xl md:text-5xl lg:text-6xl font-bold z-10 mb-8"
      >
        HOUSES DETAILS
      </h1>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-y-8 lg:gap-x-4 z-10">
        {/* Left Column */}
        <div
          ref={leftColumnRef}
          className="flex flex-col items-center gap-y-8 p-6 md:p-12"
        >
          <ClubCard
            ref={(el) => (clubCardsRef.current[0] = el)}
            image={RealMadrid}
            playerImage={RealMadridPlayer}
            name="GALACTICOS"
            description="Precision, skill, and unmatched excellence."
            handleHover={handleHover}
          />
          <ClubCard
            ref={(el) => (clubCardsRef.current[1] = el)}
            image={Arsenal}
            playerImage={ArsenalPlayer}
            name="GUNNERS"
            description="Creativity, innovation, and outside-the-box thinking."
            handleHover={handleHover}
          />
        </div>

        {/* Player Image (Center) */}
        <div
          ref={playerImageRef}
          className="w-full md:w-3/4 lg:w-auto flex justify-center"
        >
          <img
            src={currentPlayer}
            alt="Player"
            className="hidden md:block w-full md:w-3/4 lg:w-auto"
          />
        </div>

        {/* Right Column */}
        <div
          ref={rightColumnRef}
          className="flex flex-col items-center gap-y-8 p-6 md:p-12"
        >
          <ClubCard
            ref={(el) => (clubCardsRef.current[2] = el)}
            image={Manchestor}
            playerImage={ManchestorPlayer}
            name="RED DEVILS"
            description="Resilience, teamwork, and relentless drive."
            handleHover={handleHover}
          />
          <ClubCard
            ref={(el) => (clubCardsRef.current[3] = el)}
            image={Barcelona}
            playerImage={BarcelonaPlayer}
            name="CULERS"
            description="Collaboration and technical finesse at their finest."
            handleHover={handleHover}
          />
        </div>
      </div>
    </div>
  );
};

const ClubCard = React.forwardRef(({ image, playerImage, name, description, handleHover }, ref) => (
  <div
    ref={ref}
    className="card justify-center items-center flex flex-col gap-y-4 p-8 cursor-pointer transition-transform duration-300 hover:scale-105"
    onMouseEnter={() => handleHover(playerImage)}
  >
    <img src={image} alt={name} className="w-48 md:w-64" />
    <p className="text-white text-sm md:text-base text-center">
      <strong>{name}</strong>
    </p>
    <p className="text-white text-sm md:text-base text-center">
      {description}
    </p>
  </div>
));

ClubCard.displayName = 'ClubCard';

export default HousesSection;