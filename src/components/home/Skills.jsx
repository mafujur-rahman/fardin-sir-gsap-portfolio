"use client";
import { LuArrowRight } from "react-icons/lu";
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Skills = () => {
    const services = [
        { name: 'Cyber Security' },
        { name: 'AI & Automation' },
        { name: 'Software Development' },
        { name: 'Cloud & DevOps Infrastructure' },
        { name: 'Mentorship & Training' },
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
        <section className="bg-[#121212] text-white px-6 sm:px-8 md:px-12 xl:px-40 w-full min-h-screen flex items-center justify-center py-10 md:py-16  z-10">
            <div className="flex flex-col lg:flex-row gap-12 xl:gap-52 lg:items-center w-full">
                {/* Left Content */}
                <div className="flex-1 flex flex-col justify-center">
                    <p className="text-gray-300 text-xl font-bold tracking-widest uppercase mb-4">
                        My Expertise
                    </p>
                    <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-8xl font-bold leading-none mb-6">
                        Expertise & <br />Capabilities
                    </h2>
                    <p className="text-lg md:text-2xl text-gray-300 mb-8 md:max-w-xl">
                        Combining cyber security intelligence, automation innovation, and software engineering to build secure, scalable, and future-ready technology solutions.
                    </p>
                    <div className="flex items-center mt-5">
                        <span className="text-xl md:text-2xl mr-5">All Skills</span>

                        <button
                            className="bg-transparent border-2 border-white rounded-full w-16 h-16 flex justify-center items-center text-3xl cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black"
                        >
                            &rarr;
                        </button>
                    </div>
                </div>

                {/* Right Cards */}
                <div className="flex-2/3 flex flex-col w-full">
                    {services.map((service, index) => (
                        <div
                            key={service.name}
                            ref={(el) => (cardRefs.current[index] = el)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            className="py-4 px-4 md:py-8 md:px-8 xl:py-10 xl:px-8 cursor-pointer transition-all duration-300 ease-in-out"
                        >
                            <div className="flex justify-between items-center gap-5 ">
                                <h3
                                    className={`text-2xl md:text-3xl lg:text-4xl font-medium transition-colors duration-200 `}
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
