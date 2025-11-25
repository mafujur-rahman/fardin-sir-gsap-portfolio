"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BrandCards() {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const leftRefs = useRef([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const [heights, setHeights] = useState([]);

  const items = [
    {
      title: "Ethicalden",
      desc:
        "A cybersecurity-driven tech collective empowering the next generation of ethical hackers, builders and innovators.",
      role: "Founder & CEO",
      category: "Website",
      tag: "Business, Elegant",
      img: "/images/company/Ethicalden.png",
    },
    {
      title: "Eduden",
      desc:
        "A next-gen learning platform helping students master ethical hacking & emerging technologies through real-world labs.",
      role: "Founder & CEO",
      category: "Website",
      tag: "Business, Elegant",
      img: "/images/company/Eduden.jpg",
    },
    {
      title: "Hivyr",
      desc:
        "AI-powered workflow intelligence tools designed to automate operations and scale businesses efficiently.",
      role: "Founder & CEO",
      category: "Website",
      tag: "Business, Elegant",
      img: "/images/company/hivyr.png",
    },
    {
      title: "Corvtron",
      desc:
        "Leading innovative robotics solutions to automate tasks, enhance efficiency, and transform industries with cutting-edge technology.",
      role: "Founder & CEO",
      category: "Website",
      tag: "Business, Elegant",
      img: "/images/company/corvtron-2.png",
    },
  ];

  // Set window width after mount
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Capture left content heights for XL/2XL images
  useEffect(() => {
    const leftHeights = leftRefs.current.map((ref) => ref?.offsetHeight || 0);
    setHeights(leftHeights);
  }, [windowWidth]);

  // GSAP Animations for LG+ devices
  useEffect(() => {
    if (windowWidth < 1280) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      cards.forEach((card, i) => {
        if (!card) return;
        const leftContent = leftRefs.current[i];

        // Animate left content
        gsap.from(leftContent, {
          x: -200,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });

        // Pin card for smooth scroll
        const nextCard = cards[i + 1];
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: nextCard || card,
          end: nextCard ? "top top" : "bottom bottom",
          pin: true,
          pinSpacing: false,
        });
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, [windowWidth]);

  return (
    <section
      ref={containerRef}
      className="bg-[#121212] text-white w-full min-h-screen py-16 lg:py-20 space-y-10 xl:space-y-20"
    >
      {items.map((item, i) => (
        <div
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-14 pt-5 md:pt-8 xl:pt-24 px-6 sm:px-8 md:px-12 xl:px-16 bg-[#121212] border-t border-[#2c2c2c] ${i === items.length - 1 ? "border-b border-[#2c2c2c]" : ""
            } items-start`}
        >
          {/* LEFT SIDE */}
          <div
            ref={(el) => (leftRefs.current[i] = el)}
            className="flex flex-col justify-between space-y-6 w-full order-1"
          >
            <div className="space-y-4 w-max">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-bold leading-none">
                {item.title}
              </h1>
              <p className="text-[#b4b4b4] text-xl leading-relaxed max-w-[280px] md:max-w-xl lg:max-w-md xl:max-w-lg">
                {item.desc}
              </p>
            </div>

            <div className="flex flex-col divide-y divide-[#2c2c2c] border-t border-[#2c2c2c] w-full lg:max-w-lg">
              <div className="flex items-center gap-4 py-4">
                <span className="font-semibold w-28">Role:</span>
                <span>{item.role}</span>
              </div>
              <div className="flex items-center gap-4 py-4">
                <span className="font-semibold w-28">Category:</span>
                <span>{item.category}</span>
              </div>
              <div className="flex items-center border-b border-[#2c2c2c] gap-4 py-4">
                <span className="font-semibold w-28">Tag:</span>
                <span>{item.tag}</span>
              </div>
            </div>

            <div className="flex items-center mt-6">
              <span className="text-xl md:text-2xl mr-5">View Brand</span>
              <button className="bg-transparent border-2 border-white rounded-full w-16 h-16 flex justify-center items-center text-3xl cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black">
                &rarr;
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          {windowWidth < 1024 ? (
            <div className="w-full md:mt-6 order-2">
              <Image
                src={item.img}
                alt={item.title}
                width={1200}
                height={700}
                className="w-full h-auto object-contain"
              />
            </div>
          ) : (
            <div
              className="relative w-full flex items-center justify-center order-2 lg:order-2"
              style={{
                height:
                  windowWidth < 1280
                    ? (heights[i] || 500) * 1.2
                    : heights[i] || 650,
              }}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
