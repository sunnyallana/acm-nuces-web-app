import React from "react";
import Marquee from "react-fast-marquee";

// Importing images with the correct paths
import temp from "../../assets/images/temp.png";

const images = [
  temp,
  temp,
  temp,
  temp,
  temp,
  temp,
  temp,
];

const moreImages = [
  temp,
  temp,
  temp,
  temp,
  temp,
  temp,
  temp,
];

export default function PremiumSponsor() {
  return (
    <>
      {/* Marquee moving to the right */}
      <Marquee gradient={false} speed={50} pauseOnHover={true} direction="right">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-[300px] h-[100px] md:w-[350px] md:h-[120px] lg:w-[400px] lg:h-[140px] bg-[#D9D9D9] mx-3 flex items-center justify-center rounded-lg"
          >
            <img
              src={image}
              alt={`Coders Cup ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Marquee>

      {/* Marquee moving to the left */}
      <Marquee gradient={false} speed={50} pauseOnHover={true} direction="left">
        {moreImages.map((image, index) => (
          <div
            key={index}
            className="w-[300px] h-[100px] md:w-[350px] md:h-[120px] lg:w-[400px] lg:h-[140px] bg-[#D9D9D9] mx-3 flex items-center justify-center rounded-lg"
          >
            <img
              src={image}
              alt={`Coders Cup Extra ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Marquee>
    </>
  );
}
