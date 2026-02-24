import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Protocol = () => {
    const containerRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Stack cards effect via ScrollTrigger
            cardRefs.current.forEach((card, index) => {
                gsap.to(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top top+=100", // Start when card is near top
                        endTrigger: containerRef.current,
                        end: "bottom bottom",
                        pin: true,
                        pinSpacing: false,
                        scrub: true,
                    },
                    scale: 1 - (cardRefs.current.length - index) * 0.05,
                    opacity: 0.3 + (index * 0.2), // Dim earlier cards
                    ease: "none"
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const protocols = [
        {
            id: "01",
            title: "Discovery Phase",
            desc: "Analyzing the architecture of your business logic and brand identity to extract core data.",
            wireframe: "M10,10 L90,10 L90,90 L10,90 Z M30,30 L70,30 M30,50 L70,50 M30,70 L50,70"
        },
        {
            id: "02",
            title: "Spatial Modeling",
            desc: "Constructing the 3D isometric layout and structural grids that will form the experience.",
            wireframe: "M50,10 L90,30 L90,70 L50,90 L10,70 L10,30 Z M50,10 L50,50 L90,70 M50,50 L10,70"
        },
        {
            id: "03",
            title: "Kinetic Polish",
            desc: "Applying GSAP power4.out transitions, CSS noise textures, and micro-animations.",
            wireframe: "M50,50 m-30,0 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0 M50,50 m-15,0 a15,15 0 1,1 30,0 a15,15 0 1,1 -30,0"
        }
    ];

    return (
        <section ref={containerRef} className="py-32 relative text-white w-full max-w-[1000px] mx-auto px-6">

            <div className="mb-24 text-center">
                <h2 className="font-sans font-extrabold text-4xl sm:text-5xl uppercase tracking-tight">
                    Execution <span className="font-serif italic font-normal text-vividmagenta normal-case">Protocol</span>
                </h2>
            </div>

            <div className="relative pb-[50vh]">
                {protocols.map((proto, i) => (
                    <div
                        key={proto.id}
                        ref={el => cardRefs.current[i] = el}
                        className="w-full h-[60vh] sm:h-[400px] bg-obsidian border border-white/10 rounded-[2.5rem] p-8 sm:p-12 mb-[10vh] sm:mb-[20vh] flex flex-col sm:flex-row items-center gap-12 shadow-[0_[-20px]_50px_rgba(0,0,0,0.5)] origin-top relative overflow-hidden"
                    >
                        {/* Ghost UI background element */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-5 pointer-events-none">
                            <svg viewBox="0 0 100 100" className="w-full h-full stroke-white fill-none" strokeWidth="0.5">
                                <path d={proto.wireframe} />
                            </svg>
                        </div>

                        <div className="flex-1 z-10">
                            <span className="font-mono text-electricviolet text-xl mb-4 block">/// {proto.id}</span>
                            <h3 className="font-sans font-bold text-3xl sm:text-4xl mb-6">{proto.title}</h3>
                            <p className="font-sans text-white/60 text-lg leading-relaxed">{proto.desc}</p>
                        </div>

                        {/* Visual abstracted representation */}
                        <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-white/5 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center relative z-10 backdrop-blur-xl group cursor-pointer">
                            <div className="w-1/2 h-1/2 bg-electricviolet/20 rounded-full blur-[20px] group-hover:scale-150 group-hover:bg-vividmagenta/30 transition-all duration-700" />
                            <svg viewBox="0 0 100 100" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 stroke-white/50 fill-none" strokeWidth="2">
                                <path d={proto.wireframe} />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Protocol;
