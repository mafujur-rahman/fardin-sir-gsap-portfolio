"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Footer() {
  const companyLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Brands", id: "brands" },
    { name: "Skills", id: "skills" },
    { name: "Awards", id: "awards" },
    { name: "Contact", id: "contact" },
  ];

  // Ensure smooth scroll works in client
  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      // Use offsetTop if parent has scroll
      const top = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer id="contact" className="bg-black text-[#f5f7f5] w-full pt-[100px] lg:pt-[140px] font-sans">
      <div className="section-padding 2xl:max-w-[1500px] 2xl:mx-auto">

        {/* BIG EMAIL */}
        <h1 className="text-[7vw] sm:text-[6vw] md:text-[7vw] xl:text-[5vw] font-semibold text-center leading-tight break-words">
          root@fardeenahmed.info
        </h1>

        {/* TOP BORDER */}
        <div className="w-full border-t border-[#828282] mt-[40px] mb-[75px] "></div>

        {/* GRID CONTENT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-40">
          {/* LOGO + TEXT */}
          <div className="flex flex-col h-full w-full justify-start">
            <div className="w-[220px] h-auto flex items-center ">
              <Image
                src="/images/logo-update.png"
                alt="logo"
                width={800}
                height={800}
                className="object-cover z-999"
              />
            </div>
            <p className="text-[#bfbfbf] leading-relaxed mt-4">
              We can create solutions that elevate growth and sales.
            </p>
          </div>

          {/* COMPANY LINKS */}
          <div className="flex flex-col h-full w-full justify-start">
            <h3 className="text-xl font-semibold">Company</h3>
            <ul className="space-y-2 mt-4 text-[#cdcdcd]">
              {companyLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScroll(link.id)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ADDRESS */}
          <div className="flex flex-col h-full w-full justify-start">
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="text-[#cdcdcd] leading-relaxed mt-4">
              Germany — 785 15h Street, Office 478 <br /> Berlin, De 81566
            </p>
            <p className="text-[#cdcdcd] mt-2">(704) 555-0127</p>
            <p className="text-[#cdcdcd] mt-2">root@fardeenahmed.info</p>
          </div>

          {/* CONTACT FORM */}
          <div className="flex flex-col h-full w-full justify-start">
            <h3 className="text-xl font-semibold">Contact</h3>
            <form className="flex flex-col gap-3 mt-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-[#828282] px-5 py-3 bg-transparent text-white placeholder:text-[#bfbfbf] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-[#828282] px-5 py-3 bg-transparent text-white placeholder:text-[#bfbfbf] focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                className="border border-[#828282] px-5 py-3 bg-transparent text-white placeholder:text-[#bfbfbf] focus:outline-none resize-none h-[84px]"
              />
              <button
                type="submit"
                className="px-6 py-3 border border-[#828282] bg-white text-black hover:bg-transparent hover:text-white transition-all"
              >
                Send
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* SOCIAL + COPYRIGHT */}
      <div className="section-padding 2xl:max-w-[1500px] 2xl:mx-auto border-t border-[#828282] mt-[40px]">
        <div className="flex flex-col lg:flex-row items-center justify-between  py-[35px] ">
          <p className="text-[#f5f7f5bc] text-center lg:text-left">
            All rights reserved — 2025 © Fardeen Ahmed
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-[36px] py-[4px] text-[14px] rounded-full border border-[#8[4px]8[4px]82] hover:bg-white hover:text-black transition-all">
              LINKEDIN
            </button>
            <button className="px-[36px] py-[4px] text-[14px] rounded-full border border-[#828282] hover:bg-white hover:text-black transition-all">
              GITHUB
            </button>
            <button className="px-[36px] py-[4px] text-[14px] rounded-full border border-[#828282] hover:bg-white hover:text-black transition-all">
              INSTAGRAM
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
