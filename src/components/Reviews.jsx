import React from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: 'Sarah & James',
        text: 'Absolutely stunning photos! The team was professional, creative, and made us feel so comfortable. Every moment was captured perfectly.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Emily & Michael',
        text: 'We are in love with our wedding album. The attention to detail and the artistic vision they brought to our special day was incredible.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Jessica & David',
        text: 'Highly recommend! They went above and beyond to get the perfect shots. The video edit brought tears to our eyes.',
        rating: 5,
    },
    {
        id: 4,
        name: 'Amanda & Chris',
        text: 'The best investment we made for our wedding. The photos are timeless and beautiful.',
        rating: 5,
    },
    {
        id: 5,
        name: 'Rachel & Tom',
        text: 'Professional, friendly, and incredibly talented. We could not be happier with the results.',
        rating: 5,
    },
];

const Reviews = () => {
    return (
        <section id="reviews" className="py-24 bg-studio-white dark:bg-studio-black transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-studio-black dark:text-studio-white">
                            Client <span className="text-studio-gold">Love</span>
                        </h2>
                        <div className="w-24 h-1 bg-studio-gold mx-auto" />
                    </div>
                </ScrollReveal>

                {/* Marquee Container */}
                <div className="relative w-full overflow-hidden">
                    <div className="flex gap-8 animate-marquee hover:pause">
                        {[...reviews, ...reviews].map((review, index) => (
                            <div
                                key={`${review.id}-${index}`}
                                className="flex-shrink-0 w-[350px] md:w-[450px] bg-gray-50 dark:bg-gray-900 p-8 rounded-xl relative shadow-md border border-gray-100 dark:border-gray-800"
                            >
                                <Quote className="absolute top-6 right-6 text-studio-gold opacity-20 w-10 h-10" />

                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-studio-gold text-studio-gold" />
                                    ))}
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed">
                                    "{review.text}"
                                </p>

                                <h4 className="font-serif font-bold text-lg text-studio-black dark:text-studio-white">
                                    {review.name}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
