"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import {
    FaChalkboardTeacher,
    FaUsers,
    FaMicrophone,
    FaHandsHelping,
} from "react-icons/fa";

/* ---------- AchievementCard (forwardRef) ---------- */
const AchievementCard = React.forwardRef(function AchievementCard(
    { year, category, description, Icon },
    ref
) {
    return (
        <div
            ref={ref}
            className="border-2 border-[#1f1f1f] p-6 flex flex-col md:flex-row justify-between md:items-center gap-6 md:gap-10 bg-[#121212] opacity-0"
        >
            {/* ICON — MOBILE TOP */}
            <div className="flex-shrink-0 mx-auto md:hidden text-gray-300">
                {Icon && <Icon className="w-20 h-20 sm:w-24 sm:h-24" />}
            </div>

            {/* TEXT */}
            <div className="flex-1 text-left">
                <p className="text-gray-300 text-xl md:text-2xl mb-2">{year}</p>
                <h3 className="text-gray-300 text-2xl font-semibold mb-2">
                    {category}
                </h3>
                <p className="text-white text-base md:text-lg leading-snug">
                    {description}
                </p>
            </div>

            {/* ICON — DESKTOP RIGHT */}
            <div className="hidden md:block flex-shrink-0 text-gray-300">
                {Icon && <Icon className="w-20 h-20 lg:w-24 lg:h-24" />}
            </div>
        </div>
    );
});

// set a displayName for better devtools and to satisfy linters (react/display-name)
AchievementCard.displayName = "AchievementCard";

/* ---------- Parent: Achievemnt component (same as before) ---------- */
const Achievemnt = () => {
    const achievements = [
        {
            year: "2019 - present",
            category: "Cyber Security Bootcamps",
            description:
                "Mentored more than 1000 students globally in ethical hacking and cyber defense.",
            Icon: FaChalkboardTeacher,
        },
        {
            year: "Ongoing",
            category: "Live Training Sessions",
            description:
                "Conducts hands-on workshops connecting classroom learning with real-world scenarios.",
            Icon: FaUsers,
        },
        {
            year: "2019",
            category: "Guest Speaker — CRIFO 2019",
            description:
                "Delivered a session on AI-driven security automation and digital forensics.",
            Icon: FaMicrophone,
        },
        {
            year: "2018 - present",
            category: "Community Mentor",
            description:
                "Guides aspiring developers and ethical hackers in career development and technical innovation.",
            Icon: FaHandsHelping,
        },
    ];

    const cardRefs = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            cardRefs.current.forEach((card, index) => {
                if (!card) return;

                const isLeft = index % 2 === 0;
                const direction = isLeft ? "-150" : "150";

                gsap.fromTo(
                    card,
                    { x: direction, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1.6,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            end: "top 50%",
                            scrub: 0.3,
                        },
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);



    return (
        <div id="awards" className="min-h-screen bg-[#121212] text-white py-10 md:py-16 lg:py-20 px-6 sm:px-8">
            <div className="max-w-7xl mx-auto">
                <p className="text-gray-300 text-xl font-bold tracking-widest uppercase mb-4">
                    Achieved Award
                </p>

                <h1
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-bold leading-none mb-16"
                >
                    My achievement
                    <br />
                    at a glance
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {achievements.map((achievement, index) => (
                        <AchievementCard
                            key={index}
                            {...achievement}
                            ref={(el) => (cardRefs.current[index] = el)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievemnt;
