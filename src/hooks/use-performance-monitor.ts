'use client';

import { useEffect, useRef } from 'react';

/**
 * Hook to monitor performance and reduce animations on low-end devices
 */
export function usePerformanceMonitor() {
  const isLowEndDevice = useRef(false);
  
  useEffect(() => {
    // Simple check for low-end devices based on hardware concurrency
    if (typeof navigator !== 'undefined') {
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      const deviceMemory = (navigator as any).deviceMemory || 4;
      
      // Consider it a low-end device if it has fewer than 4 cores or less than 4GB of memory
      isLowEndDevice.current = hardwareConcurrency < 4 || deviceMemory < 4;
    }
  }, []);
  
  return {
    isLowEndDevice: isLowEndDevice.current,
    shouldReduceAnimations: isLowEndDevice.current
  };
}