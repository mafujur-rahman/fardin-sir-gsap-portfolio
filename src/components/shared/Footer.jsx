"use client";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white w-full pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10">

        {/* BIG EMAIL */}
        <h1 className="text-[7vw] sm:text-[6vw] md:text-[7vw] xl:text-[5vw] font-semibold text-center leading-tight break-words">
          root@fardeenahmed.info
        </h1>

        {/* TOP BORDER */}
        <div className="w-full border-t border-[#2c2c2c] mt-5 md:mt-10 mb-5 lg:mb-14"></div>

        {/* GRID CONTENT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* LOGO + TEXT */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/Fardeen-Ahmed-logo.png"
              alt="fardeen logo"
              width={150}
              height={50}
              className="object-contain w-[130px] sm:w-[150px]"
            />
            <p className="text-[#bfbfbf] leading-relaxed max-w-xs">
              We can create solutions that elevate growth and sales.
            </p>
          </div>

          {/* COMPANY LINKS */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Company</h3>
            <ul className="space-y-2 text-[#cdcdcd]">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Landing</li>
            </ul>
          </div>

          {/* ADDRESS */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="text-[#cdcdcd] leading-relaxed max-w-xs">
              Germany — 785 15h Street, Office 478 <br /> Berlin, De 81566
            </p>
            <p className="text-[#cdcdcd]">(704) 555-0127</p>
            <p className="text-[#cdcdcd]">root@fardeenahmed.info</p>
          </div>

          {/* CONTACT FORM */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Contact</h3>

            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-[#2c2c2c] px-5 py-3 bg-transparent text-white placeholder:text-[#bfbfbf] focus:outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border border-[#2c2c2c] px-5 py-3 bg-transparent text-white placeholder:text-[#bfbfbf] focus:outline-none"
              />

              <textarea
                placeholder="Your Message"
                className="border border-[#2c2c2c] px-5 py-3 bg-transparent text-white placeholder:text-[#bfbfbf] focus:outline-none resize-none h-[84px]"
              />

              <button
                type="submit"
                className="px-6 py-3 border border-[#2c2c2c] bg-white text-black hover:bg-transparent hover:text-white transition-all"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* SOCIAL + COPYRIGHT */}
      <div className="w-full border-t border-[#2c2c2c] mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-6 px-6 sm:px-10 md:px-12 xl:px-16">
          <p className="text-[#a1a1a1] text-center lg:text-left">
            All rights reserved — 2025 © Fardeen Ahmed
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-6 py-2 rounded-full border border-[#2c2c2c] hover:bg-white hover:text-black transition-all">
              LINKEDIN
            </button>
            <button className="px-6 py-2 rounded-full border border-[#2c2c2c] hover:bg-white hover:text-black transition-all">
              GITHUB
            </button>
            <button className="px-6 py-2 rounded-full border border-[#2c2c2c] hover:bg-white hover:text-black transition-all">
              INSTAGRAM
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
