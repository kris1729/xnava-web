import { useState, useEffect, useRef } from 'react';
import { cn } from '@/utils/cn';

/**
 * Animates a number counting up from 0 to the target value.
 * Triggers when the element scrolls into view.
 */
export const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className,
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref} className={cn('font-bold tabular-nums', className)}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};