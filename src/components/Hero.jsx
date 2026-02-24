import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const containerRef = useRef(null);
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo([textRef1.current, textRef2.current],
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: "power4.out", delay: 0.2 }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative flex flex-col justify-center items-center pt-48 pb-24 px-8 overflow-hidden bg-black"
        >
            {/* Background Video with Gradient Fade */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-70"
                >
                    <source src="/hero-bg.mp4" type="video/mp4" />
                </video>
                {/* Gradient overlay to fade smoothly into the pure black void below, starting from bottom 20% */}
                <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-black to-transparent"></div>
            </div>

            <div className="max-w-4xl w-full text-center relative z-10 flex flex-col items-center gap-6">
                <div className="overflow-hidden">
                    <h1 ref={textRef1} className="font-serif font-light text-2xl sm:text-3xl tracking-[0.2em] uppercase text-white/90">
                        Saad E. Alowais
                    </h1>
                </div>
                <div className="overflow-hidden mt-6">
                    <p ref={textRef2} className="font-serif italic font-light text-3xl sm:text-4xl md:text-5xl text-white leading-snug">
                        Simple, elegant, and unforgettable<br className="hidden md:block" /> design solutions.
                    </p>
                </div>
            </div>

        </section>
    );
};

export default Hero;
