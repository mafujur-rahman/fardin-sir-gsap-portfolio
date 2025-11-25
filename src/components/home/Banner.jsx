"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowDownLong } from "react-icons/fa6";
import { MdWavingHand } from "react-icons/md";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Banner = () => {
  const helloRef = useRef(null);

  useEffect(() => {
    const wrapLetters = (element) => {
      element.innerHTML = element.textContent
        .split("")
        .map(char => {
          if (char === " ") return `<span class="letter">&nbsp;</span>`;
          return `<span class="letter">${char}</span>`;
        })
        .join("");
    };

    const helloText = helloRef.current;

    wrapLetters(helloText);

    // Timeline for coordinated animation - EXACT SAME AS BEFORE
    const tl = gsap.timeline();

    // Animate paragraph letters from right - EXACT SAME ANIMATION
    tl.from(helloText.querySelectorAll(".letter"), {
      x: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 0.8,
      ease: "power2.out",
    });

  }, []);

  return (
    <section className="bg-[#121212] text-white h-auto lg:h-[90vh] overflow-hidden font-sans">
      <div className="flex flex-col lg:flex-row ">

        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative h-[80vh] lg:h-screen" >
          <Image
            src="/images/bg.png"
            alt="Fardeen Ahmed"
            fill
            className="object-cover object-top "
            priority
          />
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between px-6 sm:px-8 md:px-12 xl:px-16 py-10 md:py-16 xl:py-0 ">
          <div className="flex flex-col justify-center flex-1">
            <p
              ref={helloRef}
              className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl tracking-wider flex items-center justify-start overflow-hidden"
            >
              <span className="mr-2 text-[#deff00]">
                <MdWavingHand />
              </span>
              👋 Hello, I’m Fardeen Ahmed
            </p>

            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-8xl font-bold leading-none mt-4 overflow-hidden"
            >
              Cyber Security <br /> Leader
            </h1>

            {/* Founder text and line */}
            <div className="lg:max-w-2xl xl:mx-0 flex flex-col xl:flex-row items-start xl:items-center gap-8 xl:gap-20 mt-6">
              <div className="w-72 h-0.5 bg-gray-100 mx-auto xl:mx-0 hidden xl:block" />
              <p className="text-lg md:text-2xl text-start text-gray-100 font-light">
                Founder of Ethical Den, Eduden & Hiyvr.ai
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col w-fit md:flex-row md:flex-wrap justify-start lg:justify-start gap-3 mt-10">
              {['LINKEDIN', 'GITHUB', 'INSTAGRAM'].map((label) => (
                <Link
                  key={label}
                  href="#"
                  className="border border-white py-2 px-10 text-md font-medium tracking-wider hover:bg-white hover:text-gray-900 transition duration-300 rounded-full"
                >
                  {label}
                </Link>
              ))}
            </div>



            {/* Keep Scrolling */}
            <div className="flex items-center justify-end gap-2 mt-12">
              <p className="text-xs tracking-widest uppercase text-white text-right">
                Keep <br /> Scrolling
              </p>
              <FaArrowDownLong className="w-6 h-6 animate-bounce text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;