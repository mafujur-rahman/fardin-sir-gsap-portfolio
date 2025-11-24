"use client";
import { LuArrowRight } from "react-icons/lu";
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Skills = () => {
    const services = [
        { name: 'Website design' },
        { name: 'Branding' },
        { name: 'UI/UX design' },
        { name: 'Graphic design' }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const cardRefs = useRef([]);
    const iconRefs = useRef([]);

    const animateCard = (index) => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        cardRefs.current.forEach((card, i) => {
            if (!card) return;
            tl.to(card, { backgroundColor: i === index ? "#1f1f1f" : "#121212", duration: 0.2 }, 0);
        });

        iconRefs.current.forEach((icon, i) => {
            if (!icon) return;
            if (i === index) {
                // Hover: rotate upper-right
                tl.to(icon, { rotation: -45, scale: 1.2, color: "#ffffff", duration: 0.2 }, "-=0.1");
            } else {
                // Default: pointing right
                tl.to(icon, { rotation: 0, scale: 1, color: "#888888", duration: 0.2 }, "-=0.2");
            }
        });
    };

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
        animateCard(index);
    };

    useEffect(() => {
        animateCard(activeIndex);
    }, []);

    return (
        <section className="bg-[#121212] text-white px-6 sm:px-8 md:px-12 xl:px-16 w-full min-h-screen flex items-center justify-center z-10">
            <div className="flex flex-col lg:flex-row gap-12 xl:gap-42 items-center w-full">
                {/* Left Content */}
                <div className="flex-1 flex flex-col justify-center">
                    <p className="text-gray-300 text-xl font-bold tracking-widest uppercase mb-4">
                        My Expertise
                    </p>
                    <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none mb-6">
                        Professional <br /> Skills
                    </h2>
                    <p className="text-2xl text-gray-300 mb-8 max-w-lg">
                        Beautiful, functional websites created using the powerful Webflow platform. Highly customizable and easily manageable, even with no prior.
                    </p>
                    <button className="flex items-center justify-center w-40 h-14 border border-white rounded-full text-lg hover:bg-white hover:text-black transition-colors duration-300">
                        All Skills
                        <LuArrowRight className="h-5 w-5 ml-2 transition-transform duration-300" />
                    </button>
                </div>

                {/* Right Cards */}
                <div className="flex-2/3 flex flex-col w-full">
                    {services.map((service, index) => (
                        <div
                            key={service.name}
                            ref={(el) => (cardRefs.current[index] = el)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            className="py-14 px-12 cursor-pointer transition-all duration-300 ease-in-out"
                        >
                            <div className="flex justify-between items-center gap-48">
                                <h3
                                    className={`text-3xl lg:text-5xl font-medium transition-colors duration-200 `}
                                >
                                    {service.name}
                                </h3>
                                <LuArrowRight
                                    ref={(el) => (iconRefs.current[index] = el)}
                                    className="h-7 w-7 text-gray-400 transform transition-all duration-200"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
