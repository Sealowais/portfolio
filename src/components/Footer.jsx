import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = ({ onOpenContact }) => {
    return (
        <footer id="contact" className="relative bg-black pt-32 pb-12 border-t border-white/5 overflow-hidden">

            <div className="max-w-[1400px] mx-auto px-6 sm:px-16 relative z-10 text-center flex flex-col items-center">
                <h2 className="font-serif italic text-6xl sm:text-8xl leading-none">
                    Uplift Your <br />
                    <span className="font-sans font-extrabold not-italic uppercase tracking-tighter text-white">Experience</span>
                </h2>

                <button
                    onClick={onOpenContact}
                    className="mt-16 group relative flex items-center justify-center px-10 py-5 rounded-full bg-transparent border border-white/20 text-white font-sans font-bold text-lg transition-all duration-500 hover:border-transparent hover:scale-105"
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-electricviolet to-vividmagenta opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 rounded-full bg-electricviolet opacity-0 group-hover:opacity-20 blur-[20px] transition-all duration-500" />
                    <span className="relative z-10 flex items-center gap-3">
                        Let's talk. <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                </button>

                <div className="w-full mt-32 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-white/30">
                    <p>&copy; {new Date().getFullYear()} SAAD ALOWAIS. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-6 uppercase font-mono tracking-widest text-[10px]">
                        <a href="https://www.linkedin.com/in/saad-alowais/" target="_blank" rel="noopener noreferrer" className="hover:text-electricviolet transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
