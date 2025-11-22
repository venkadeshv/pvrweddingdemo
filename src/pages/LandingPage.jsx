import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import VideoGallery from '../components/VideoGallery';
import Pricing from '../components/Pricing';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-studio-white dark:bg-studio-black text-studio-black dark:text-studio-white transition-colors duration-300">
            <Navbar />
            <main>
                <Hero />
                <Gallery />
                <VideoGallery />
                <Pricing />
                <Reviews />
                <Contact />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default LandingPage;
