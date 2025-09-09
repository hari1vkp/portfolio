'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    // In production, you might want to send this to your analytics service
    if (process.env.NODE_ENV === 'development') {
      console.log(metric);
    }
  });

  return null;
}