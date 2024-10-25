'use client'

import React, { useEffect, useRef } from "react"
import Marquee from "react-fast-marquee"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import img1 from "../../../assets/images/coders-cup-23-glimpse/acm-coders-cup-23-1.jpg"
import img2 from "../../../assets/images/coders-cup-23-glimpse/acm-coders-cup-23-2.jpg"
import img3 from "../../../assets/images/coders-cup-23-glimpse/acm-coders-cup-23-3.jpg"
import img4 from "../../../assets/images/coders-cup-23-glimpse/acm-coders-cup-23-4.jpg"
import img5 from "../../../assets/images/coders-cup-23-glimpse/acm-coders-cup-23-5.jpg"
import img6 from "../../../assets/images/coders-cup-23-glimpse/acm-coders-cup-23-6.jpg"
import img7 from "../../../assets/images/coders-cup-23-glimpse/acm-coders-cup-23-7.jpg"
import img8 from "../../../assets/images/coders-cup-23-glimpse/acm-coders-cup-23-8.jpg"
import img9 from "../../../assets/images/coders-cup-23-glimpse/acm-coders-cup-23-9.jpg"
import img10 from "../../../assets/images/coders-cup-23-glimpse/acm-coders-cup-23-10.jpg"
import img11 from "../../../assets/images/coders-cup-23-glimpse/acm-coders-cup-23-11.jpg"
import img12 from "../../../assets/images/coders-cup-23-glimpse/acm-coders-cup-23-12.jpg"
import img13 from "../../../assets/images/coders-cup-23-glimpse/acm-coders-cup-23-13.jpg"

gsap.registerPlugin(ScrollTrigger)

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
]

export default function GlimpseComponentlow() {
  const componentRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const component = componentRef.current
    const title = titleRef.current

    gsap.fromTo(
      title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: component,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    )

    gsap.fromTo(
      component,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: component,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    )
  }, [])

  return (
    <div ref={componentRef}>
      <div className="flex justify-center px-2 sm:px-0 text-center items-center mb-12 md:mb-20 text-[34px] md:text-[41px] lg:text-[57px] xl:text-[70px] 2xl:text-7xl font-[700]">
        <h1 ref={titleRef} className="fira-code-heading text-[#FFFFFF]">
          <span className="text-[#17A0B7]">CODERS CUP 2023 </span>
          <span className="bg-gradient-to-b from-gray-200 to-gray-300 text-transparent bg-clip-text">GLIMPSE</span>
        </h1>
      </div>
    
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        {images.map((image, index) => (
          <div key={index} className="w-[180px] h-[120px] sm:w-[240px] sm:h-[160px] md:w-[270px] md:h-[180px] lg:w-[360px] lg:h-[240px] xl:w-[400px] xl:h-[267px] 2xl:w-[400px] 2xl:h-[267px] bg-[#D9D9D9] mx-4 flex items-center justify-center rounded-xl">
            <img src={image} alt={`Coders Cup ${index + 1}`} className="w-full h-full object-cover rounded-xl" />
          </div>
        ))}
      </Marquee>
    </div>
  )
}