import { useState, useEffect, useRef } from 'react';
import { cn } from '@/utils/cn';

/**
 * Animated number counter.
 * Starts counting from 0 to `end` when scrolled into view.
 * Uses requestAnimationFrame for smooth 60fps animation.
 *
 * @param {number} end        — target value
 * @param {string} suffix     — text after number (e.g. "+", "%", "K")
 * @param {string} prefix     — text before number (e.g. "₹", "$")
 * @param {number} duration   — animation duration in ms
 * @param {string} className
 */
export const AnimatedCounter = ({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
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

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic for smoother finish
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref} className={cn('font-heading font-bold tabular-nums', className)}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};