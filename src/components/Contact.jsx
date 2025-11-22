import React, { useState } from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', date: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 bg-studio-black text-studio-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-studio-black/90 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            Get in <span className="text-studio-gold">Touch</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Let's discuss your dream wedding. Fill out the form below or reach out to us directly.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <ScrollReveal animation="fade-in-up">
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-studio-gold/20 p-3 rounded-full text-studio-gold">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Phone</h3>
                                    <p className="text-gray-400">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-studio-gold/20 p-3 rounded-full text-studio-gold">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Email</h3>
                                    <p className="text-gray-400">hello@weddingstudio.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-studio-gold/20 p-3 rounded-full text-studio-gold">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Studio</h3>
                                    <p className="text-gray-400">123 Wedding Lane, Beverly Hills, CA 90210</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Contact Form */}
                    <ScrollReveal animation="fade-in-up" delay={200}>
                        <form onSubmit={handleSubmit} className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-studio-gold focus:ring-1 focus:ring-studio-gold outline-none transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-studio-gold focus:ring-1 focus:ring-studio-gold outline-none transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Wedding Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-studio-gold focus:ring-1 focus:ring-studio-gold outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-studio-gold focus:ring-1 focus:ring-studio-gold outline-none transition-colors"
                                    placeholder="Tell us about your big day..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-studio-gold text-studio-black font-bold py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
                            >
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;
