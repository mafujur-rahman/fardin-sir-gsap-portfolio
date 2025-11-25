"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BrandCards() {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

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

  useEffect(() => {
    const cards = cardsRef.current;
    ScrollTrigger.getAll().forEach((t) => t.kill());

    cards.forEach((card, i) => {
      if (!card) return;

      const nextCard = cards[i + 1];

      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        endTrigger: nextCard || card,
        end: nextCard ? "top top" : "bottom bottom",
        pin: true,
        pinSpacing: false,
        markers: false,
        anticipatePin: 1,
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#121212] text-white w-full min-h-screen py-20 space-y-20"
    >
      {items.map((item, i) => (
        <div
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 py-24 px-6 sm:px-8 md:px-12 xl:px-40 bg-[#121212] border-t border-[#2c2c2c]"
        >
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between space-y-6 max-w-xl w-full">
            {/* Content wrapper that takes only the width of the brand name */}
            <div className="space-y-4 w-max">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none">{item.title}</h1>
              <p className="text-[#b4b4b4] text-xl leading-relaxed max-w-lg">{item.desc}</p>
            </div>

            {/* Role, Category, Tag */}
            <div className="flex flex-col divide-y divide-[#2c2c2c] border-t border-[#2c2c2c] max-w-lg">
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

            {/* Project button */}
            <button className="mt-6 flex items-center gap-3 group w-fit">
              <span className="text-xl font-medium">Project Details</span>
              <div className="w-12 h-12 border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all rounded-full">
                ↗
              </div>
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[380px] lg:h-[500px] flex items-center justify-center">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
