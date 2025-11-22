import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ui/ScrollReveal';
import Tilt3D from './ui/Tilt3D';

const galleryItems = [
    { id: 1, type: 'image', src: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&w=800&q=80', size: 'large' },
    { id: 2, type: 'image', src: 'https://images.unsplash.com/photo-1519225448526-72997f205143?auto=format&fit=crop&w=800&q=80', size: 'small' },
    { id: 3, type: 'image', src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80', size: 'medium' },
    { id: 4, type: 'image', src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80', size: 'medium' },
    { id: 5, type: 'image', src: 'https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&w=800&q=80', size: 'large' },
    { id: 6, type: 'image', src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80', size: 'small' },
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-studio-white dark:bg-studio-black transition-colors duration-300">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-studio-black dark:text-studio-white">
                            Our <span className="text-studio-gold">Portfolio</span>
                        </h2>
                        <div className="w-24 h-1 bg-studio-gold mx-auto" />
                    </div>
                </ScrollReveal>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {galleryItems.map((item, index) => (
                        <ScrollReveal key={item.id} delay={index * 100}>
                            <Tilt3D className="break-inside-avoid mb-6">
                                <Link to={`/album/${item.id}`} className="group relative overflow-hidden rounded-lg cursor-pointer card-3d block">
                                    <img
                                        src={item.src}
                                        alt={`Gallery ${item.id}`}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-studio-white text-lg font-serif italic border-b border-studio-gold pb-1">
                                            View Album
                                        </span>
                                    </div>
                                </Link>
                            </Tilt3D>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
