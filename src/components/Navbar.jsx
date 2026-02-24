import React, { useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center justify-between px-6 py-3 w-[min(90vw,600px)] rounded-[2.5rem] bg-black/20 backdrop-blur-2xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                <a href="#" className="text-white font-sans font-bold tracking-tight text-lg">
                    SAAD<span className="text-electricviolet">.</span>
                </a>

                <div className="flex gap-6 items-center">
                    <a href="#features" className="text-sm font-sans font-medium text-white/70 hover:text-white transition-colors hidden sm:block">Toolset</a>
                    <a href="#philosophy" className="text-sm font-sans font-medium text-white/70 hover:text-white transition-colors hidden sm:block">Manifesto</a>
                    <a href="#contact" className="group relative flex items-center justify-center px-5 py-2 rounded-full bg-electricviolet text-white font-sans font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] border border-white/10">
                        <span className="relative z-10 flex items-center gap-2">
                            <Mail size={16} /> Contact me
                        </span>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-electricviolet to-vividmagenta opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="absolute inset-0 rounded-full ring-1 ring-white/20" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
