"use client";
import { LuArrowRight } from "react-icons/lu";
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { titleAnimation } from "../utils/title-anime";
import { scrollContentAnimation } from "../utils/content-anime";

const Skills = () => {
    const services = [
        { name: 'Cyber Security' },
        { name: 'AI & Automation' },
        { name: 'Software Development' },
        { name: 'Cloud & DevOps Infrastructure' },
        { name: 'Mentorship & Training' },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const cardRefs = useRef([]);
    const iconRefs = useRef([]);
    const buttonIconRef = useRef(null);
    const titleRef = useRef(null);
    const ParRef = useRef(null);
    const ParRef2 = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        titleAnimation(titleRef.current);
        titleAnimation(ParRef.current);
        titleAnimation(ParRef2.current);
    }, []);

    useEffect(() => {
        scrollContentAnimation(contentRef.current, { distance: 50, duration: 1, delay: 0.5 });
    }, []);

    // Initialize all card SVGs to rotated state (45° up)
    useEffect(() => {
        iconRefs.current.forEach((icon, i) => {
            if (!icon) return;
            gsap.to(icon, {
                rotation: -45,
                duration: 0
            });
        });

        // Initialize button SVG to rotated state
        if (buttonIconRef.current) {
            gsap.to(buttonIconRef.current, {
                rotation: -45,
                duration: 0
            });
        }
    }, []);

    const animateCard = (index) => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        cardRefs.current.forEach((card, i) => {
            if (!card) return;
            tl.to(card, { backgroundColor: i === index ? "#1f1f1f" : "black", duration: 0.2 }, 0);
        });

        iconRefs.current.forEach((icon, i) => {
            if (!icon) return;
            if (i === index) {
                // Hover: rotated up (-45°)
                tl.to(icon, { rotation: -45, scale: 1.2, color: "#ffffff", duration: 0.3 }, "-=0.1");
            } else {
                // Default: rotate to straight (0°)
                tl.to(icon, { rotation: 0, scale: 1, color: "#888888", duration: 0.3 }, "-=0.2");
            }
        });
    };

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
        animateCard(index);
    };

    const handleButtonMouseEnter = () => {
        setIsButtonHovered(true);
        if (buttonIconRef.current) {
            gsap.to(buttonIconRef.current, {
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    };

    const handleButtonMouseLeave = () => {
        setIsButtonHovered(false);
        if (buttonIconRef.current) {
            gsap.to(buttonIconRef.current, {
                rotation: -45,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    };

    useEffect(() => {
        animateCard(activeIndex);
    }, []);

    return (
        <section id="skills" className="bg-black text-[#f5f7f5]  w-full min-h-screen flex items-center justify-center py-[100px] lg:py-[140px] z-10">
            <div className="section-padding 2xl:max-w-[1700px] 2xl:mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-52 lg:items-start w-full">
                    {/* Left Content */}
                    <div className="flex-1 flex flex-col justify-center">
                        <p ref={ParRef} className="text-[16px] font-bold tracking-widest uppercase mb-4">
                            My Expertise
                        </p>
                        <h2 ref={titleRef} className="text-[60px]  md:text-[90px] lg:text-[70px] xl:text-[90px] font-bold leading-none mb-6">
                            Expertise & <br />Capabilities
                        </h2>
                        <p ref={ParRef2} className="text-[16px] text-[#f5f7f5cc] mb-8 ">
                            Combining cyber security intelligence, automation innovation, and software engineering to build secure, scalable, and future-ready technology solutions.
                        </p>
                        <div ref={contentRef} className="flex items-center mt-5">
                            <span className="common-btn-size">All Skills</span>

                            <button
                                className="bg-transparent border-2 border-[#f5f7f5] rounded-full w-16 h-16 flex justify-center items-center text-3xl cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black"
                                onMouseEnter={handleButtonMouseEnter}
                                onMouseLeave={handleButtonMouseLeave}
                            >
                                <svg
                                    ref={buttonIconRef}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="36"
                                    height="26"
                                    viewBox="0 0 36 26"
                                    fill="none"
                                >
                                    <path
                                        d="M20.5078 0C20.5051 7.18628 27.3242 13.0013 35.754 13.0013M35.7432 12.999C27.3134 12.999 20.49 18.814 20.4873 26.0003M0.75 13.0039H33.3462"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                    />
                                </svg>
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
                                className="py-[40px] px-[30px]  md:py-[45px] md:px-[30px] xl:py-[50px] xl:px-[50px] cursor-pointer transition-all duration-300 ease-in-out"
                            >
                                <div className="flex justify-between items-center gap-5 ">
                                    <h3
                                        className={`text-[30px] md:text-[40px] xl:text-[45px] font-medium transition-colors duration-200 `}
                                    >
                                        {service.name}
                                    </h3>
                                    <div>
                                        <svg
                                            ref={(el) => (iconRefs.current[index] = el)}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="36"
                                            height="26"
                                            viewBox="0 0 36 26"
                                            fill="none"
                                        >
                                            <path
                                                d="M20.5078 0C20.5051 7.18628 27.3242 13.0013 35.754 13.0013M35.7432 12.999C27.3134 12.999 20.49 18.814 20.4873 26.0003M0.75 13.0039H33.3462"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;