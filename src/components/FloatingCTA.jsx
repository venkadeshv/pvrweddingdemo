import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const FloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <a
            href="#contact"
            className="fixed bottom-8 right-8 z-40 bg-studio-gold text-studio-black px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 animate-fade-in-up"
        >
            <Calendar size={20} />
            Book Your Wedding
        </a>
    );
};

export default FloatingCTA;
