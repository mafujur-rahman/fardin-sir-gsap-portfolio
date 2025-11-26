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
import { titleAnimation } from "../utils/title-anime";

const AchievementCard = React.forwardRef(function AchievementCard(
    { year, category, description, Icon },
    ref
) {
    return (
        <div
            ref={ref}
            className="
                w-full bg-black border border-[#828282] px-[30px] py-[40px]
                grid 
                grid-cols-1 
                md:grid-cols-1
                lg:grid-cols-[100px_minmax(150px,1fr)_80px]
                xl:grid-cols-[110px_minmax(300px,1fr)_110px]
                items-start gap-[20px] opacity-0
            "
        >
            {/* COLUMN 1 — YEAR */}
            <div className="text-left">
                <p className="text-[#f5f7f5b3] text-[22px] font-light">
                    {year}
                </p>
            </div>

            {/* COLUMN 2 — CATEGORY + DESCRIPTION */}
            <div className="flex flex-col text-left gap-1">
                <p className="text-[#f5f7f5b3] text-[22px]">{category}</p>
                <p className="text-[#f5f7f5] text-[22px] font-semibold">
                    {description}
                </p>
            </div>

            {/* COLUMN 3 — ICON */}
            <div className="flex justify-start md:justify-start lg:justify-end items-center mt-4 md:mt-0">
                {Icon && (
                    <Icon
                        className="w-20 h-20 lg:w-24 lg:h-24 text-[#f5f7f5b3]"
                        style={{ color: "#f5f7f5b3" }}
                    />
                )}
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
    const titleRef = useRef(null);
    const ParRef = useRef(null);

    useEffect(() => {
        titleAnimation(titleRef.current);
        titleAnimation(ParRef.current);
    }, []);

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
        <div id="awards" className="min-h-screen bg-black text-[#f5f7f5] pt-[100px] lg:pt-[140px]">
            <div className="section-padding 2xl:max-w-[1350px] 2xl:mx-auto">
                <p ref={ParRef} className="text-[16px] font-bold tracking-widest uppercase ">
                    Achieved Award
                </p>

                <h1
                    ref={titleRef}
                    className="text-[40px]  md:text-[72px] xl:text-[90px] font-bold leading-none mt-[22px] mb-[50px] xl:mb-[70px]"
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
