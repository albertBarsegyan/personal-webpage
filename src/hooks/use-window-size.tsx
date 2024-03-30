'use client';
import { useEffect, useState } from 'react';

const innerWidth = typeof window !== 'undefined' ?window.innerWidth : 0;
const innerHeight= typeof window !== 'undefined' ?window.innerHeight : 0;

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: innerWidth,
    height: innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: innerWidth,
        height: innerHeight,
      });
    };

    window?.addEventListener('resize', handleResize);

    return () => {
      window?.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}
