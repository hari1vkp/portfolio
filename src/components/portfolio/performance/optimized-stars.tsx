'use client';

import { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface StarProps {
  id: number;
  top: string;
  left: string;
  size: string;
  duration: number;
  delay: number;
}

const Star = memo(({ id, top, left, size, duration, delay }: StarProps) => {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return (
      <div
        className="absolute bg-white rounded-full opacity-30"
        style={{
          top,
          left,
          width: size,
          height: size,
        }}
      />
    );
  }

  return (
    <motion.div
      key={id}
      className="absolute bg-white rounded-full"
      style={{
        top,
        left,
        width: size,
        height: size,
      }}
      animate={{
        opacity: [0.2, 1, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
      }}
    />
  );
});

Star.displayName = 'Star';

export default Star;