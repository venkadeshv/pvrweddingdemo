import React, { useState } from 'react';
import ScrollReveal from './ui/ScrollReveal'
import { Play, X } from 'lucide-react';

const videos = [
    //{ id: 'video1', title: 'Sarah & James - Highlights', thumbnail: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&w=800&q=80', youtubeId: 'dQw4w9WgXcQ' },
    { id: 'video1', title: 'Dr. Akshaya & Abiram - Highlights', thumbnail: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&w=800&q=80', youtubeId: 'c4GN_nx0U_A' },
    { id: 'video2', title: 'Rahul & Anumol - Cinematic', thumbnail: 'https://images.unsplash.com/photo-1519225448526-72997f205143?auto=format&fit=crop&w=800&q=80', youtubeId: 'KlLf2dAlZ4Q' },
    { id: 'video3', title: 'Seshan & Sreena - Teaser', thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80', youtubeId: '5fmcTI_gekU' },
];

const VideoGallery = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <section id="videos" className="py-24 bg-gray-50 dark:bg-studio-gray transition-colors duration-300">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-studio-black dark:text-studio-white">
                            Cinematic <span className="text-studio-gold">Films</span>
                        </h2>
                        <div className="w-24 h-1 bg-studio-gold mx-auto" />
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video, index) => (
                        <ScrollReveal key={video.id} delay={index * 150}>
                            <div
                                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                                onClick={() => setSelectedVideo(video.youtubeId)}
                            >
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Play className="fill-white text-white ml-1" size={32} />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-white font-serif font-bold text-lg">{video.title}</h3>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setSelectedVideo(null)}
                >
                    <button
                        onClick={() => setSelectedVideo(null)}
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                    >
                        <X size={32} />
                    </button>

                    <div className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default VideoGallery;
