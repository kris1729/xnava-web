import { useState, useEffect } from 'react';

/**
 * Tracks window scroll position.
 * Returns { x, y } — updates on every scroll event.
 */
export const useScrollPosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setPosition({ x: window.scrollX, y: window.scrollY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return position;
};