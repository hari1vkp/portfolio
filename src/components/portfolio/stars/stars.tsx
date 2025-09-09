'use client';

import { useState, useEffect, useMemo, memo } from 'react';
import { useReducedMotion } from 'framer-motion';
import Star from '@/components/portfolio/performance/optimized-stars';
import { usePerformanceMonitor } from '@/hooks/use-performance-monitor';

interface StarData {
  id: number;
  top: string;
  left: string;
  size: string;
  duration: number;
  delay: number;
}

const StarsBackground = memo(({ count = 50 }: { count?: number }) => {
  const [stars, setStars] = useState<StarData[]>([]);
  const shouldReduceMotion = useReducedMotion();
  const { isLowEndDevice } = usePerformanceMonitor();
  
  // Reduce star count on low-end devices
  const starCount = isLowEndDevice ? Math.floor(count / 2) : count;

  // Generate stars only once on mount
  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: starCount }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}px`,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 2,
      }));
      setStars(newStars);
    };

    generateStars();
  }, [starCount]);

  // Memoize the stars rendering
  const renderedStars = useMemo(() => {
    return stars.map((star) => (
      <Star
        key={star.id}
        id={star.id}
        top={star.top}
        left={star.left}
        size={star.size}
        duration={star.duration}
        delay={star.delay}
      />
    ));
  }, [stars]);

  return (
    <div className="absolute inset-0">
      {renderedStars}
    </div>
  );
});

StarsBackground.displayName = 'StarsBackground';

export { StarsBackground };
