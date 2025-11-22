import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const albumPhotos = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519225448526-72997f205143?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2069&q=80',
    'https://images.unsplash.com/photo-1522673607200-1645062cd958?auto=format&fit=crop&w=2069&q=80',
];

const AlbumPage = () => {
    const { id } = useParams();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentPhotoIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextPhoto = (e) => {
        e.stopPropagation();
        setCurrentPhotoIndex((prev) => (prev + 1) % albumPhotos.length);
    };

    const prevPhoto = (e) => {
        e.stopPropagation();
        setCurrentPhotoIndex((prev) => (prev - 1 + albumPhotos.length) % albumPhotos.length);
    };

    return (
        <div className="min-h-screen bg-studio-white dark:bg-studio-black text-studio-black dark:text-studio-white transition-colors duration-300 flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32 px-6 container mx-auto">
                <Link to="/" className="text-studio-gold hover:underline mb-8 inline-block">&larr; Back to Home</Link>

                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Album <span className="text-studio-gold">#{id}</span></h1>
                <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg">
                    Beautiful moments captured forever.
                </p>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mb-16">
                    {albumPhotos.map((photo, index) => (
                        <div
                            key={index}
                            className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={photo}
                                alt={`Album photo ${index + 1}`}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </main>
            <Footer />

            {/* Lightbox */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                    >
                        <X size={32} />
                    </button>

                    <button
                        onClick={prevPhoto}
                        className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-2"
                    >
                        <ChevronLeft size={40} />
                    </button>

                    <img
                        src={albumPhotos[currentPhotoIndex]}
                        alt="Full screen"
                        className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        onClick={nextPhoto}
                        className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-2"
                    >
                        <ChevronRight size={40} />
                    </button>

                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/50 font-medium">
                        {currentPhotoIndex + 1} / {albumPhotos.length}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AlbumPage;
