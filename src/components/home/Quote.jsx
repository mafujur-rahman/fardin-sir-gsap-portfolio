"use client"; 
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Quote = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const image = imageRef.current;
        const card = cardRef.current;

        // Background parallax
        gsap.fromTo(
            image,
            { y: "-15%" },
            {
                y: "0%",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            }
        );

        // Card parallax
        gsap.fromTo(
            card,
            { y: 0 },
            {
                y: "-15%",
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            }
        );
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[80vh] overflow-hidden"
        >
            {/* Background Image */}
            <div
                ref={imageRef}
                className="absolute top-0 left-0 w-full h-[130%] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/award-bg.jpg')" }}
            ></div>

            {/* White card overlaying next section */}
            <div
                ref={cardRef}
                className="absolute right-20 bottom-[-10%] bg-white p-6 max-w-sm  z-[998]"
            >
                <p className="text-lg text-gray-900 font-semibold">
                    Security isn’t just about building walls — it’s about awareness, curiosity, and the relentless pursuit of learning and innovation.
                </p>
            </div>
        </div>
    );
};

export default Quote;
