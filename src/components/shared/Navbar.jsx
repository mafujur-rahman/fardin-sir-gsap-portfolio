"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import FullScreenMenu from "./ScreenMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const fullScreenMenuRef = useRef(null); // Ref for the FullScreenMenu

  // Refs for the burger icon lines
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  // Existing Marquee and Button refs
  const marqueeRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    // --- Existing Marquee and Hover Logic ---
    const marqueeWidth = marqueeRef.current.scrollWidth / 2;
    const marqueeTl = gsap.timeline({ repeat: -1, defaults: { ease: "linear" } });
    marqueeTl.to(marqueeRef.current, { x: -marqueeWidth, duration: 4 });

    // Ensure refs are available before adding listeners
    if (btnRef.current) {
      btnRef.current.addEventListener("mouseenter", () => marqueeTl.pause());
      btnRef.current.addEventListener("mouseleave", () => marqueeTl.resume());
    }

    // --- Existing Menu Hover Animation Logic ---
    const distance = 40;
    const hoverMenu = () => {
      if (isMenuOpen) return; // Don't run hover animation if menu is open

      const tl = gsap.timeline();
      tl.to(line1Ref.current, { x: distance, duration: 0.35, ease: "power2.inOut" })
        .set(line1Ref.current, { x: -distance })
        .to(line1Ref.current, { x: 0, duration: 0.35, ease: "power2.out" });

      tl.to(
        line2Ref.current,
        { x: distance, duration: 0.35, ease: "power2.inOut" },
        "-=0.9"
      )
        .set(line2Ref.current, { x: -distance })
        .to(line2Ref.current, { x: 0, duration: 0.35, ease: "power2.out" });
    };

    if (menuRef.current) {
      menuRef.current.addEventListener("mouseenter", hoverMenu);
    }

    return () => {
      // Cleanup listeners
      if (btnRef.current) {
        btnRef.current.removeEventListener("mouseenter", () => marqueeTl.pause());
        btnRef.current.removeEventListener("mouseleave", () => marqueeTl.resume());
      }
      if (menuRef.current) {
        menuRef.current.removeEventListener("mouseenter", hoverMenu);
      }
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (!fullScreenMenuRef.current) return;

    if (isMenuOpen) {
      // Closing the menu
      fullScreenMenuRef.current.close();
    } else {
      // Opening the menu
      fullScreenMenuRef.current.open();
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="w-full bg-[#121212] text-white py-6 overflow-hidden relative z-10">
        <div className="px-6 sm:px-8 md:px-12 xl:px-16 flex items-center justify-between">
          {/* LOGO */}
          <div className="w-[220px] h-auto flex items-center ">
            <Image
              src="/images/logo-update.png"
              alt="logo"
              width={800}
              height={800}
              className="object-cover z-999"
            />
          </div>

          <div className="flex-1"></div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-8">
            {/* BUTTON WITH MARQUEE - HIDDEN ON MOBILE */}
            <button
              ref={btnRef}
              className="relative w-[180px] overflow-hidden border-y border-white py-6 hidden sm:block"
            >
              <div
                ref={marqueeRef}
                className="whitespace-nowrap flex absolute top-1/2 -translate-y-1/2"
              >
                <span className="mr-8">GET IN TOUCH •</span>
                <span className="mr-8">GET IN TOUCH •</span>
                <span className="mr-8">GET IN TOUCH •</span>
                <span className="mr-8">GET IN TOUCH •</span>
              </div>
            </button>

            {/* MENU ICON */}
            <div
              ref={menuRef}
              onClick={toggleMenu}
              className="flex flex-col cursor-pointer space-y-[6px] overflow-hidden w-8 h-4 relative"
            >
              <span ref={line1Ref} className="block w-8 h-[2px] bg-white absolute top-0"></span>
              <span ref={line2Ref} className="block w-8 h-[2px] bg-white absolute bottom-0"></span>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Component */}
      <FullScreenMenu ref={fullScreenMenuRef} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
