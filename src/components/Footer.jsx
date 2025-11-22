import React from 'react';
import { Instagram, Facebook, Twitter, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-serif font-bold text-studio-gold mb-2">PVR Wedding Studio</h2>
                        <p className="text-gray-400 text-sm">Capturing moments, creating memories.</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-studio-gold transition-colors"><Instagram size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-studio-gold transition-colors"><Facebook size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-studio-gold transition-colors"><Twitter size={24} /></a>
                    </div>

                    <div className="text-center md:text-right text-gray-500 text-sm">
                        <p>&copy; {new Date().getFullYear()} Wedding Studio. All rights reserved.</p>
                        <p className="flex items-center justify-center md:justify-end gap-1 mt-1">
                            Made with <Heart size={12} className="fill-red-500 text-red-500" /> for love.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
