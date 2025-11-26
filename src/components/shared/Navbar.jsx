"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import FullScreenMenu from "./ScreenMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const menuRef = useRef(null);
  const fullScreenMenuRef = useRef(null);

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  const marqueeRef = useRef(null);
  const btnRef = useRef(null);

  // --- Scroll Hide/Show Logic ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 0) return;

      if (currentScroll > lastScroll && currentScroll > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  useEffect(() => {
    // --- Marquee Logic ---
    const marqueeWidth = marqueeRef.current?.scrollWidth / 2;
    const marqueeTl = gsap.timeline({ repeat: -1, defaults: { ease: "linear" } });

    if (marqueeRef.current) {
      marqueeTl.to(marqueeRef.current, { x: -marqueeWidth, duration: 4 });
    }

    if (btnRef.current) {
      btnRef.current.addEventListener("mouseenter", () => marqueeTl.pause());
      btnRef.current.addEventListener("mouseleave", () => marqueeTl.resume());
    }

    const distance = 40;
    const hoverMenu = () => {
      if (isMenuOpen) return;

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
      fullScreenMenuRef.current.close();
    } else {
      fullScreenMenuRef.current.open();
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`w-full text-[#f5f7f5] py-6 overflow-hidden fixed top-0 left-0 z-50 transition-all duration-300 ${
          showNavbar ? "backdrop-blur-md bg-black/70" : "-translate-y-full"
        }`}
      >
        <div className="px-[15px] md:px-[40px] lg:px-[58px] xl:px-[15px] 2xl:px-16 flex items-center justify-between relative">

          {/* LEFT – MENU */}
          <div
            ref={menuRef}
            onClick={toggleMenu}
            className="flex flex-col cursor-pointer space-y-[6px] overflow-hidden w-8 h-4 relative"
          >
            <span
              ref={line1Ref}
              className="block w-8 h-[2px] bg-white absolute top-0"
            ></span>
            <span
              ref={line2Ref}
              className="block w-8 h-[2px] bg-white absolute bottom-0"
            ></span>
          </div>

          {/* CENTER – LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[220px] h-[55px] flex items-center">
            <Image
              src="/images/logo-update.png"
              alt="logo"
              width={220}
              height={55}
              priority
              className="h-full w-auto object-contain"
            />
          </div>

          {/* RIGHT – GET IN TOUCH BUTTON */}
          <button
            ref={btnRef}
            className="relative w-[180px] overflow-hidden border-y border-white py-6 hidden sm:block"
          >
            <div
              ref={marqueeRef}
              className="whitespace-nowrap flex text-[16px] absolute top-1/2 -translate-y-1/2"
            >
              <span className="mr-8">GET IN TOUCH  •</span>
              <span className="mr-8">GET IN TOUCH  •</span>
              <span className="mr-8">GET IN TOUCH  •</span>
              <span className="mr-8">GET IN TOUCH  •</span>
            </div>
          </button>
        </div>
      </nav>

      <FullScreenMenu ref={fullScreenMenuRef} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
