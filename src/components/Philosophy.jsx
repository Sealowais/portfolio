import React from 'react';

const Philosophy = () => {
    return (
        <section id="philosophy" className="py-32 px-6 sm:px-16 min-h-screen flex items-center relative overflow-hidden bg-obsidian">
            {/* Absolute Obsidian container with huge typographic contrast */}
            <div className="max-w-[1400px] mx-auto w-full relative z-10 text-center">

                <div className="inline-block border border-white/10 rounded-full px-6 py-2 mb-12">
                    <span className="font-mono text-xs tracking-[0.2em] text-electricviolet uppercase">The Grid Manifesto</span>
                </div>

                <h2 className="font-sans font-extrabold text-5xl sm:text-7xl lg:text-9xl uppercase leading-[0.9] tracking-tighter">
                    Function is <br />
                    <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>The Foundation</span>
                </h2>

                <div className="my-12 w-full flex justify-center">
                    <div className="w-px h-24 bg-gradient-to-b from-electricviolet to-transparent" />
                </div>

                <h2 className="font-serif italic font-normal text-5xl sm:text-7xl lg:text-9xl leading-[0.9]">
                    Design is <br />
                    <span className="text-vividmagenta">The Catalyst</span>
                </h2>

                <p className="mt-16 max-w-2xl mx-auto font-sans text-lg sm:text-xl text-white/60">
                    My differentiated approach bridges structural engineering and premium aesthetics. <span className="text-electricviolet font-semibold">Every pixel must pull its weight</span>, contributing to both the sensory experience and the growth engine beneath.
                </p>

            </div>

            {/* Subtle background radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-electricviolet/[0.03] blur-[100px] pointer-events-none" />
        </section>
    );
};

export default Philosophy;
