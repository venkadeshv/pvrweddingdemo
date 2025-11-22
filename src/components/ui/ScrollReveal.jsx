import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, className = '', animation = 'fade-in-up', delay = 0 }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const getAnimationClass = () => {
        switch (animation) {
            case 'fade-in-up':
                return 'animate-fade-in-up';
            case 'fade-in':
                return 'animate-fade-in';
            case 'scroll-up':
                return 'animate-scroll-up';
            default:
                return 'animate-fade-in-up';
        }
    };

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? getAnimationClass() : 'opacity-0'}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
