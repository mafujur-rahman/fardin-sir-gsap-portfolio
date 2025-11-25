"use client";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white w-full pt-28 pb-10 font-sans">
      {/* TOP CONTENT: BIG EMAIL + GRID */}
      <div className="max-w-7xl mx-auto">
        {/* BIG EMAIL */}
        <h1 className="text-[5vw] leading-none font-semibold text-center break-words">
          root@fardeenahmed.info
        </h1>

        {/* TOP BORDER FULL WIDTH BELOW EMAIL */}
        <div className="w-full border-t border-[#2c2c2c] mt-10 mb-16"></div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* LOGO + TEXT BELOW */}
          <div className="flex flex-col justify-start gap-4">
            <Image
              src="/images/Fardeen-Ahmed-logo.png" 
              alt="fardeen Logo"
              width={150}
              height={50}
              className="object-contain"
            />
            <p className="text-[#bfbfbf] leading-relaxed max-w-xs">
              We can create solutions that elevate growth and sales.
            </p>
          </div>

          {/* COMPANY LINKS */}
          <div className="flex flex-col justify-start gap-4">
            <h3 className="text-xl font-semibold mb-2">Company</h3>
            <ul className="space-y-2 text-[#cdcdcd]">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Landing</li>
            </ul>
          </div>

          {/* ADDRESS */}
          <div className="flex flex-col justify-start gap-4">
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-[#cdcdcd] leading-relaxed max-w-xs">
              Germany — 785 15h Street, Office 478 <br /> Berlin, De 81566
            </p>
            <p className="text-[#cdcdcd]">(704) 555-0127</p>
            <p className="text-[#cdcdcd]">root@fardeenahmed.info</p>
          </div>

          {/* CONTACT FORM */}
          <div className="flex flex-col justify-start gap-4">
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
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
                className="px-6 py-3 border border-[#2c2c2c] hover:bg-white hover:text-black transition-all"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* BOTTOM CONTENT: SOCIAL + COPYRIGHT (FULL WIDTH) */}
      <div className="w-full border-t border-[#2c2c2c] mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-6 px-6 sm:px-8 md:px-12 xl:px-16">
          <p className="text-[#a1a1a1]">
            All rights reserved — 2025 © Fardeen Ahmed
          </p>

          <div className="flex items-center gap-4">
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
