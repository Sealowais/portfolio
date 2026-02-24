import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WorkItem = ({ title, description, children }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(containerRef.current,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%", // Trigger animation when top of element hits 85% of viewport
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="mb-40 max-w-[900px] w-full mx-auto px-6">
            <div className="mb-12">
                <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-white mb-4">{title}</h2>
                <p className="font-sans font-normal text-base sm:text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl">{description}</p>
            </div>
            <div className="flex flex-col gap-4">
                {children}
            </div>
        </div>
    );
};

const Work = () => {
    return (
        <section className="py-24 bg-black">

            {/* 1. Design System */}
            <WorkItem
                title="Design system"
                description="Crafted scalable primitives reflecting systemic aesthetic depth. Acting as the structural foundation of digital aesthetics."
            >
                {/* Main top image (the dot grid) */}
                <div className="w-full h-[250px] sm:h-[300px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group">
                    <img src="/images/design-system/1.png" alt="Design System Pattern" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity">
                        <span className="text-white/30 text-xs font-mono">1.png</span>
                    </div>
                </div>

                {/* Three row grid below */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="h-[120px] sm:h-[160px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group">
                        <img src="/images/design-system/2.png" alt="Components" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">2.png</span></div>
                    </div>
                    <div className="h-[120px] sm:h-[160px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group">
                        <img src="/images/design-system/3.png" alt="Colors" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">3.png</span></div>
                    </div>
                    <div className="h-[120px] sm:h-[160px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group">
                        <img src="/images/design-system/4.png" alt="Typography" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">4.png</span></div>
                    </div>
                </div>

                {/* Bottom wide image (the angled phones) */}
                <div className="w-full h-[200px] sm:h-[280px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group">
                    <img src="/images/design-system/5.png" alt="Dark UI Phones" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">5.png</span></div>
                </div>
            </WorkItem>

            {/* 2. Mobile application */}
            <WorkItem
                title="Mobile application"
                description="Designing a seamless mobile application from the ground up to hit business metrics."
            >
                {/* Main top image (the dot grid) */}
                <div className="w-full h-[250px] sm:h-[300px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                    <img src="/images/mobile/1.png" alt="Mobile Pattern" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">1.png</span></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="h-[250px] sm:h-[400px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                        <img src="/images/mobile/2.png" alt="App Screen 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">2.png</span></div>
                    </div>
                    <div className="h-[250px] sm:h-[400px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                        <img src="/images/mobile/3.png" alt="App Screen Landscape" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">3.png</span></div>
                    </div>
                    <div className="h-[250px] sm:h-[400px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                        <img src="/images/mobile/4.png" alt="Screen 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">4.png</span></div>
                    </div>
                    <div className="h-[250px] sm:h-[400px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                        <img src="/images/mobile/5.png" alt="Screen 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">5.png</span></div>
                    </div>
                </div>
            </WorkItem>

            {/* 3. Web applications */}
            <WorkItem
                title="Web applications"
                description="Designed a website application for a unique set of emotion and business types."
            >
                {/* Main top image (the dot grid) */}
                <div className="w-full h-[250px] sm:h-[300px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                    <img src="/images/web/1.png" alt="Web Pattern" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">1.png</span></div>
                </div>

                {/* Two column layout below */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="h-[250px] sm:h-[400px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                        <img src="/images/web/2.png" alt="Desktop GL UI" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">2.png</span></div>
                    </div>
                    <div className="h-[250px] sm:h-[400px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                        <img src="/images/web/3.png" alt="Dark UI Card 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">3.png</span></div>
                    </div>
                </div>
            </WorkItem>

            {/* 4. Branding */}
            <WorkItem
                title="Branding"
                description="Helped designing a sub-brand architecture."
            >
                {/* Main top image (the dot grid) */}
                <div className="w-full h-[200px] sm:h-[260px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                    <img src="/images/branding/1.png" alt="Pattern Identity" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">1.png</span></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="h-[250px] sm:h-[400px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                        <img src="/images/branding/2.png" alt="Neon Signage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">2.png</span></div>
                    </div>
                    <div className="h-[250px] sm:h-[400px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                        <img src="/images/branding/3.png" alt="Avatar Model" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">3.png</span></div>
                    </div>
                    <div className="h-[250px] sm:h-[400px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                        <img src="/images/branding/4.png" alt="Color Swatches" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">4.png</span></div>
                    </div>
                    <div className="h-[250px] sm:h-[400px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                        <img src="/images/branding/5.png" alt="App Icon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">5.png</span></div>
                    </div>
                    <div className="col-span-2 h-[250px] sm:h-[400px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                        <img src="/images/branding/6.png" alt="Login Screen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">6.png</span></div>
                    </div>
                </div>
            </WorkItem>

            {/* 5. 3D */}
            <WorkItem
                title="3D"
                description="Developed a 3D website for stc's digital experience portfolio."
            >
                {/* Main top massive clay render */}
                <div className="w-full h-[280px] sm:h-[400px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group">
                    <img src="/images/3d/1.png" alt="Clay Render city map" className="w-full h-full object-cover" />
                </div>

                {/* Grid below */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 h-[150px] sm:h-[240px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group">
                        <img src="/images/3d/2.png" alt="Purple isometric scene" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="col-span-2 h-[150px] sm:h-[240px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group">
                        <img src="/images/3d/3.png" alt="Purple bus on street" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="h-[180px] sm:h-[250px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group">
                        <img src="/images/3d/4.png" alt="Bus rear angle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="h-[180px] sm:h-[250px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group">
                        <img src="/images/3d/5.png" alt="Dark UI control panel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>
            </WorkItem>

            {/* 6. CX */}
            <WorkItem
                title="CX"
                description="Reshaped the overall customer journey for specific segments, contributing to business growth."
            >
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 w-full h-[250px] sm:h-[300px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                        <img src="/images/cx/1.png" alt="Profile UI" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">1.png</span></div>
                    </div>
                    <div className="h-[250px] sm:h-[400px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                        <img src="/images/cx/2.png" alt="Subscription UI" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">2.png</span></div>
                    </div>
                    <div className="h-[250px] sm:h-[400px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                        <img src="/images/cx/3.png" alt="Alert Banners" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">3.png</span></div>
                    </div>
                    <div className="h-[250px] sm:h-[400px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                        <img src="/images/cx/4.png" alt="Icon Logo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">4.png</span></div>
                    </div>
                    <div className="h-[250px] sm:h-[400px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                        <img src="/images/cx/5.png" alt="Card" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">5.png</span></div>
                    </div>
                    <div className="h-[250px] sm:h-[400px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                        <img src="/images/cx/6.png" alt="Dialog Modal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">6.png</span></div>
                    </div>
                    <div className="h-[250px] sm:h-[400px] bg-white/5 border border-white/10 rounded-lg overflow-hidden group relative">
                        <img src="/images/cx/7.png" alt="Settings List UI" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.opacity = 1; }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity"><span className="text-white/30 text-xs font-mono">7.png</span></div>
                    </div>
                </div>
            </WorkItem>

        </section>
    );
};

export default Work;
