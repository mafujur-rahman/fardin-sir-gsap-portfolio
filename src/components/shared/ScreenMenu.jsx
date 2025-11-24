"use client";
import React, { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import Image from "next/image";
import gsap from "gsap";

const menuItems = [
  { id: "01", name: "Homes" },
  { id: "02", name: "About" },
  { id: "03", name: "Portfolio" },
  { id: "04", name: "Pages" },
  { id: "05", name: "Blog" },
  { id: "06", name: "Contact" },
];

const FullScreenMenu = forwardRef(({ onClose }, ref) => {
  const containerRef = useRef(null);
  const leftBgRef = useRef(null);
  const rightBgRef = useRef(null);
  const contentRef = useRef(null);
  const rightElementsRef = useRef([]);

  const animateMenu = (direction) => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut", duration: 0.8 },
      onStart: () => {
        if (direction === "open") containerRef.current.classList.remove("hidden");
      },
      onComplete: () => {
        if (direction === "close") containerRef.current.classList.add("hidden");
      },
    });

    if (direction === "open") {
      tl.to(leftBgRef.current, { y: 0 })
        .to(rightBgRef.current, { y: 0 }, "<")
        .fromTo(
          contentRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.06, duration: 0.5 },
          "-=0.4"
        )
        .fromTo(
          rightElementsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.5 },
          "-=0.4"
        );
    } else {
      tl.to([...contentRef.current.children, ...rightElementsRef.current], {
        opacity: 0,
        y: -20,
        stagger: 0.05,
        duration: 0.3,
      })
        .to(leftBgRef.current, { y: "-100%" })
        .to(rightBgRef.current, { y: "100%" }, "<");
    }
  };

  useImperativeHandle(ref, () => ({
    open: () => animateMenu("open"),
    close: () => animateMenu("close"),
  }));

  useEffect(() => {
    const keyListener = (e) => {
      if (e.key === "Escape") {
        animateMenu("close");
        onClose();
      }
    };
    document.addEventListener("keydown", keyListener);
    return () => document.removeEventListener("keydown", keyListener);
  }, [onClose]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 hidden overflow-hidden min-h-screen min-w-screen"
    >
      {/* LEFT BG */}
      <div
        ref={leftBgRef}
        className="absolute top-0 left-0 w-full md:w-1/2 h-full bg-[#121212] translate-y-[-100vh]"
      />

      {/* RIGHT BG (desktop only) */}
      <div
        ref={rightBgRef}
        className="hidden md:block absolute top-0 right-0 w-1/2 h-full bg-black translate-y-[100vh]"
      />

      {/* CONTENT */}
      <div className="absolute inset-0 flex justify-center text-white">
        {/* Constrain width on lg screens */}
        <div className="w-full px-6 sm:px-8 md:px-12 xl:px-16 flex flex-col md:flex-row justify-between">
          {/* LEFT MENU */}
          <div ref={contentRef} className="flex flex-col space-y-4 pt-10">
            {/* TOP LOGO */}
            <div className="z-[60] opacity-0">
              <Image
                src="/images/Fardeen-Ahmed-logo.png"
                alt="Logo"
                width={150}
                height={150}
                className="object-cover"
              />
            </div>

            {menuItems.map((item) => (
              <div
                key={item.id}
                className="group flex items-center justify-between w-[350px] cursor-pointer py-2 border-b border-gray-700 opacity-0"
              >
                {/* Hide IDs on mobile & md */}
                <span className="text-2xl text-gray-400 group-hover:text-white transition hidden md:inline">
                  {item.id}
                </span>

                <span className="text-5xl font-extrabold group-hover:pl-4 transition-all">
                  {item.name}
                </span>

                <span className="text-4xl text-gray-400 group-hover:text-white transition">
                  +
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE (desktop only) */}
          <div className="hidden md:flex flex-col justify-between w-[400px] pt-10">
            {/* IMAGE */}
            <div
              ref={(el) => (rightElementsRef.current[0] = el)}
              className="flex-1 flex items-end justify-center opacity-0"
            >
              <div className="relative w-[320px] h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/menu-image.jpg"
                  alt="Menu Image"
                  width={500}
                  height={700}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* FOOTER */}
            <div
              ref={(el) => (rightElementsRef.current[1] = el)}
              className="text-sm opacity-0"
            >
              © 2025 Fardeen Ahmed, All rights reserved.
            </div>
          </div>

          {/* CLOSE ICON (always right) */}
          <div className="absolute top-10 right-6 md:right-16 z-[60]">
            <div
              onClick={() => {
                animateMenu("close");
                onClose();
              }}
              className="cursor-pointer relative w-10 h-10 flex items-center justify-center"
            >
              <span className="absolute block w-8 h-[2px] bg-white rotate-45" />
              <span className="absolute block w-8 h-[2px] bg-white -rotate-45" />
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND TEXT */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[200px] font-extrabold text-white opacity-5 pointer-events-none">
        MENU
      </div>
    </div>
  );
});

FullScreenMenu.displayName = "FullScreenMenu";
export default FullScreenMenu;
