import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Features = () => {
    const [logText, setLogText] = useState("");
    const fullLog = `> CONNECTING TO MAINFRAME...
> INITIALIZING GROWTH PROTOCOLS
> LOADING ARCHITECTURAL SCHEMAS: 100%
> USER ACQUISITION: OPTIMIZED
> CONVERSION ENGINE: ONLINE
> SYSTEM STATUS: READY`;

    useEffect(() => {
        // Typing effect for Data Telemetry card
        let i = 0;
        const interval = setInterval(() => {
            setLogText(fullLog.slice(0, i));
            i++;
            if (i > fullLog.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="features" className="py-32 px-6 sm:px-16 max-w-[1400px] mx-auto">
            <div className="mb-20">
                <h2 className="font-sans font-extrabold text-4xl sm:text-5xl uppercase tracking-tight">
                    The <span className="text-electricviolet">Alwara</span> Toolset
                </h2>
                <p className="font-serif italic text-white/60 text-xl mt-4 max-w-2xl">
                    Instruments designed for performance, built with architectural precision.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 hidden sm:grid opacity-100"> {/* Showing as horizontal grid on large, vertical on small. GSAP interactions applied via css hover/group */}

                {/* Card 1: Architectural Design Systems */}
                <div className="group rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-md p-8 relative overflow-hidden flex flex-col justify-between h-[450px]">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-electricviolet/10 rounded-full blur-[50px] group-hover:bg-electricviolet/20 transition-all duration-700" />

                    <div className="relative z-10">
                        <h3 className="font-mono text-sm text-electricviolet mb-2">[01]</h3>
                        <h4 className="font-sans font-bold text-2xl tracking-tight mb-4">Architectural Design Systems</h4>
                        <p className="font-sans text-sm text-white/50">
                            Systemic UI shuffling. Scalable, modular primitives that act as the structural foundation of digital aesthetics.
                        </p>
                    </div>

                    {/* Systemic Shuffler UI Mock */}
                    <div className="mt-8 relative h-32 w-full flex items-center justify-center perspective-1000">
                        <div className="absolute w-[80%] h-12 bg-white/5 border border-white/10 rounded-2xl animate-[bounce_4s_ease-in-out_infinite] transform -translate-y-4 shadow-[0_0_15px_rgba(139,92,246,0.1)] flex items-center px-4">
                            <div className="w-4 h-4 rounded-full bg-vividmagenta/50" />
                            <div className="ml-4 h-2 w-1/2 bg-white/20 rounded-full" />
                        </div>
                        <div className="absolute w-[90%] h-12 bg-obsidian border border-white/10 rounded-2xl animate-[bounce_4s_ease-in-out_infinite] animation-delay-500 z-10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center justify-between px-4">
                            <div className="h-2 w-1/3 bg-electricviolet rounded-full" />
                            <div className="w-8 h-4 bg-white/10 rounded-full relative"><div className="absolute right-1 top-0.5 w-3 h-3 bg-white rounded-full" /></div>
                        </div>
                    </div>
                </div>

                {/* Card 2: Immersive Spatial UX */}
                <div className="group rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-md p-8 relative overflow-hidden flex flex-col justify-between h-[450px]">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-vividmagenta/10 rounded-full blur-[50px] group-hover:bg-vividmagenta/20 transition-all duration-700" />

                    <div className="relative z-10">
                        <h3 className="font-mono text-sm text-vividmagenta mb-2">[02]</h3>
                        <h4 className="font-sans font-bold text-2xl tracking-tight mb-4">Immersive Spatial UX</h4>
                        <p className="font-sans text-sm text-white/50">
                            3D spatial pulse. Designing with depth and volume to create environments, not just screens.
                        </p>
                    </div>

                    {/* 3D Spatial Pulse SVG */}
                    <div className="mt-8 relative h-32 w-full flex items-center justify-center">
                        <svg viewBox="0 0 200 100" className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity">
                            <path d="M20,50 L100,10 L180,50 L100,90 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                            <path d="M40,50 L100,20 L160,50 L100,80 Z" fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
                            {/* Pulse Signal */}
                            <circle cx="20" cy="50" r="3" fill="#D946EF" className="animate-[pulse-path_3s_linear_infinite]">
                                <animateMotion dur="4s" repeatCount="indefinite"
                                    path="M20,50 L100,10 L180,50 L100,90 Z" />
                            </circle>
                        </svg>
                    </div>
                </div>

                {/* Card 3: Growth-Engineered Interaction */}
                <div className="group rounded-[2.5rem] border border-[rgba(255,255,255,0.1)] bg-white/5 backdrop-blur-md p-8 relative overflow-hidden flex flex-col justify-between h-[450px]">
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-electricviolet/15 rounded-full blur-[60px] group-hover:bg-electricviolet/30 transition-all duration-700" />

                    <div className="relative z-10">
                        <h3 className="font-mono text-sm text-white/80 mb-2">[03]</h3>
                        <h4 className="font-sans font-bold text-2xl tracking-tight mb-4">Growth-Engineered <br />Interaction</h4>
                        <p className="font-sans text-sm text-white/50">
                            Data telemetry and high-conversion loops engineered for metric-driven impact.
                        </p>
                    </div>

                    <div className="mt-8 bg-black/40 border border-white/5 rounded-2xl p-4 h-32 w-full font-mono text-xs text-electricviolet overflow-hidden">
                        <pre className="whitespace-pre-wrap">{logText}<span className="animate-pulse">_</span></pre>
                    </div>
                </div>

            </div>
            {/* Mobile stack equivalent (included standardly) */}
            <div className="flex flex-col gap-6 sm:hidden">
                {/* Same cards, shortened for mobile to avoid giant walls of text */}
                <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8">
                    <h4 className="font-sans font-bold text-xl mb-2">Architectural Design Systems</h4>
                    <p className="text-sm text-white/50">Scalable primitives reflecting systemic aesthetic depth.</p>
                </div>
                <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8">
                    <h4 className="font-sans font-bold text-xl mb-2">Immersive Spatial UX</h4>
                    <p className="text-sm text-white/50">Designing with 3D depth to build digital environments.</p>
                </div>
                <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8">
                    <h4 className="font-sans font-bold text-xl mb-2">Growth-Engineered Interaction</h4>
                    <p className="text-sm text-white/50">Optimized data telemetry and conversion loops.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
