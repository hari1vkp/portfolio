'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Star {
  id: number;
  style: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
  transition: {
    duration: number;
    repeat: number;
    delay: number;
  };
}

export function StarsBackground({ count = 100 }) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: count }, (_, i) => ({
        id: i,
        style: {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
        },
        transition: {
          duration: 2 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 2,
        },
      }));
      setStars(newStars);
    };

    generateStars();
  }, [count]);

  return (
    <div className="absolute inset-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={star.style}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={star.transition}
        />
      ))}
    </div>
  );
}
