import React, { useRef, useState } from 'react';

const Tilt3D = ({ children, className = '', intensity = 15 }) => {
    const ref = useRef(null);
    const [transform, setTransform] = useState('');

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        const rotateX = y * intensity * -1; // Invert Y for natural tilt
        const rotateY = x * intensity;

        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    };

    const handleMouseLeave = () => {
        setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    };

    return (
        <div
            ref={ref}
            className={`transition-transform duration-200 ease-out ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform, transformStyle: 'preserve-3d' }}
        >
            {children}
        </div>
    );
};

export default Tilt3D;
