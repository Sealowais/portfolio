import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth scroll easing
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        }
    }, []);

    return (
        <div className="relative min-h-screen font-sans bg-black text-white selection:bg-vividmagenta selection:text-black">
            {/* Global CSS noise is in index.html (Remved now) */}
            <div className="relative z-10">
                {/* <Navbar /> - Hiding Navbar optionally as it's not in the Figma shot, but keeping it available */}
                <main>
                    <Hero />
                    <Work />
                </main>
                <Footer onOpenContact={() => setIsContactModalOpen(true)} />
            </div>
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </div>
    );
}

export default App;
