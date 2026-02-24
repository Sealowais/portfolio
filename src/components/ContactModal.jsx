import React, { useEffect, useRef } from 'react';
import { X, Paperclip } from 'lucide-react';
import gsap from 'gsap';

const ContactModal = ({ isOpen, onClose }) => {
    const overlayRef = useRef(null);
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
            gsap.fromTo(modalRef.current, { y: 50, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" });
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            gsap.killTweensOf(overlayRef.current);
            gsap.killTweensOf(modalRef.current);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === overlayRef.current) {
            onClose();
        }
    };

    return (
        <div
            ref={overlayRef}
            onClick={handleOverlayClick}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
            <div
                ref={modalRef}
                className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
                >
                    <X size={24} />
                </button>

                <h3 className="font-serif italic text-3xl mb-8">Uplift Your <span className="font-sans font-bold not-italic tracking-tighter text-electricviolet">Experience</span></h3>

                <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-sans text-xs uppercase tracking-widest text-white/50">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-sans text-white focus:outline-none focus:border-electricviolet transition-colors placeholder:text-white/20"
                            placeholder="hello@example.com"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="title" className="font-sans text-xs uppercase tracking-widest text-white/50">Title</label>
                        <input
                            type="text"
                            id="title"
                            required
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-sans text-white focus:outline-none focus:border-electricviolet transition-colors placeholder:text-white/20"
                            placeholder="Project Inquiry"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="content" className="font-sans text-xs uppercase tracking-widest text-white/50">Message Content</label>
                        <textarea
                            id="content"
                            required
                            rows="4"
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-sans text-white focus:outline-none focus:border-electricviolet transition-colors resize-none placeholder:text-white/20"
                            placeholder="Tell me about your vision..."
                        ></textarea>
                    </div>

                    <div className="flex items-center gap-4">
                        <label className="cursor-pointer group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 transition-colors">
                            <Paperclip size={16} className="text-white/50 group-hover:text-white transition-colors" />
                            <span className="font-sans text-xs tracking-wider text-white/70 group-hover:text-white transition-colors">Attach File</span>
                            <input type="file" className="hidden" />
                        </label>
                        <span className="text-xs text-white/30 italic">Optional max 10MB</span>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full py-4 rounded-lg bg-white text-black font-sans font-bold uppercase tracking-widest hover:bg-electricviolet hover:text-white transition-colors duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
