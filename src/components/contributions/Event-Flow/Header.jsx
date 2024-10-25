'use client'

import React, { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import rightImg from "../../../assets/images/header-registration.svg"

gsap.registerPlugin(ScrollTrigger)

export default function Header() {
  const navigate = useNavigate()
  const headerRef = useRef(null)

  const handleDragStart = (event) => {
    event.preventDefault()
  }

  const handleRegisterClick = () => {
    navigate('/registration')
  }

  useEffect(() => {
    const header = headerRef.current
    const title = header.querySelector('.title')
    const subtitle = header.querySelector('.subtitle')
    const button = header.querySelector('.register-button')
    const image = header.querySelector('.header-image')

    gsap.fromTo(title, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: header,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        }
      }
    )

    gsap.fromTo(subtitle, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: header,
          start: "top 75%",
          end: "top 25%",
          scrub: 1,
        }
      }
    )

    gsap.fromTo(button, 
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1,
        scrollTrigger: {
          trigger: header,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        }
      }
    )

    gsap.fromTo(image, 
      { opacity: 0, x: 100 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: header,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        }
      }
    )
  }, [])

  return (
    <div ref={headerRef} className="mt-32 z-10">
      <div className="flex flex-col-reverse sm:flex-row items-center text-white mx-auto w-[85%]">
        <div className="sm:w-[50%] md:w-[47%] sm:border-l-4 border-white sm:px-3 pt-6 text-center sm:text-start">
          <p className="title uppercase text-[40px] 2xl:text-[80px] font-bold mb-3 sm:mb-2 xl:mb-3 xl:text-[55px] lg:text-[40px] md:text-[28px] sm:text-[25px] bg-gradient-to-b from-gray-200 to-gray-300 text-transparent bg-clip-text">
            JOIN US
          </p>
          <p className="subtitle md:mt-1 sm:mt-1 uppercase text-[14px] 2xl:text-2xl xl:text-[17px] lg:text-[14px] md:text-[12px] sm:text-[11px]">
            {"DON'T MISS OUT ON THE EXCITEMENT! SIGN UP NOW TO RESERVE YOUR PLACE AT THIS AMAZING EVENT!"}
          </p>
          <button
            className="register-button bg-[#155084] 2xl:px-6 2xl:py-3 2xl:text-4xl xl:py-3 xl:px-4 lg:py-2 lg:px-4 py-2 px-4 font-bold lg:mt-5 2xl:mt-7 sm:mt-2 mt-4 rounded-md hover:bg-[#33618a] transition duration-100 xl:text-[22px] lg:text-[16px] md:text-[12px] sm:text-[12px] text-[20px]"
            onClick={handleRegisterClick}
          >
            Register Now
          </button>
        </div>
        <div className="2xl:w-[10%] xl:w-[15%] lg:w-[15%] md:w-[20%] sm:w-[10%]"></div>
        <div className="2xl:w-[40%] xl:w-[35%] lg:w-[35%] md:w-[33%] sm:w-[40%] w-[75%] mb-3 sm:mb-0" style={{ userSelect: 'none' }}>
          <img 
            className="header-image"
            src={rightImg} 
            alt="right-img" 
            style={{ userSelect: 'none' }} 
            onDragStart={handleDragStart}
          />
        </div>
      </div>
    </div>
  )
}