import React from 'react';
import Tilt3D from './ui/Tilt3D';
import ScrollReveal from './ui/ScrollReveal';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Video/Image Placeholder */}
            <div className="absolute inset-0 bg-studio-black">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-studio-black z-10" />
                {/* In a real app, use a <video> tag here */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-60 animate-fade-in" />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4">
                <ScrollReveal animation="fade-in-up">
                    <Tilt3D intensity={20}>
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-studio-white font-bold tracking-tighter mb-6 text-3d">
                            Capturing <span className="text-studio-gold italic">Love</span>
                        </h1>
                    </Tilt3D>
                </ScrollReveal>

                <ScrollReveal animation="fade-in-up" delay={200}>
                    <p className="text-lg md:text-2xl text-gray-300 font-light tracking-widest uppercase mb-12">
                        Premium Wedding Photography
                    </p>
                </ScrollReveal>

                <ScrollReveal animation="fade-in-up" delay={400}>
                    <a
                        href="#gallery"
                        className="btn-3d inline-block bg-studio-gold text-studio-black px-8 py-4 rounded-full font-bold tracking-wide hover:bg-white transition-colors"
                    >
                        View Gallery
                    </a>
                </ScrollReveal>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-float">
                <ChevronDown className="text-studio-white w-10 h-10 opacity-80" />
            </div>
        </section>
    );
};

export default Hero;
