import React from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { Check } from 'lucide-react';

const packages = [
    {
        name: 'Silver',
        price: '25000',
        features: ['6 Hours Coverage', '1 Photographer', '300+ Edited Photos', 'Online Gallery'],
        recommended: false,
    },
    {
        name: 'Gold',
        price: '50000',
        features: ['8 Hours Coverage', '2 Photographers', '500+ Edited Photos', 'Online Gallery', 'Engagement Session'],
        recommended: true,
    },
    {
        name: 'Platinum',
        price: '100000',
        features: ['Full Day Coverage', '2 Photographers', '800+ Edited Photos', 'Online Gallery', 'Engagement Session', 'Premium Photo Album'],
        recommended: false,
    },
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-gray-50 dark:bg-studio-gray transition-colors duration-300 relative overflow-hidden">
            <div className="bg-noise absolute inset-0 opacity-30 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-studio-black dark:text-studio-white">
                            Investment <span className="text-studio-gold">Packages</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Choose the perfect package for your special day. We offer transparent pricing with no hidden fees.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <ScrollReveal key={pkg.name} delay={index * 150} animation="fade-in-up">
                            <div
                                className={`relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${pkg.recommended
                                    ? 'bg-studio-black text-studio-white border-2 border-studio-gold shadow-2xl scale-105 z-10'
                                    : 'bg-white dark:bg-black/40 text-studio-black dark:text-studio-white border border-gray-200 dark:border-gray-800 shadow-lg'
                                    }`}
                            >
                                {pkg.recommended && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-studio-gold text-studio-black px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}

                                <h3 className="text-2xl font-serif font-bold mb-2">{pkg.name}</h3>
                                <div className="text-4xl font-bold mb-6 text-studio-gold">{pkg.price}</div>

                                <ul className="space-y-4 mb-8">
                                    {pkg.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <Check size={18} className="text-studio-gold" />
                                            <span className="text-sm opacity-90">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 rounded-lg font-bold transition-colors ${pkg.recommended
                                    ? 'bg-studio-gold text-studio-black hover:bg-white'
                                    : 'bg-studio-black dark:bg-studio-white text-white dark:text-studio-black hover:bg-studio-gold hover:text-studio-black'
                                    }`}>
                                    Choose Plan
                                </button>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
