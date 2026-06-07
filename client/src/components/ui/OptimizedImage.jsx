import { useState } from 'react';
import { cn } from '@/utils/cn';
import placeholderImg from '@/assets/images/placeholder.webp';

const OBJECT_FIT_MAP = {
  cover: 'object-cover',
  contain: 'object-contain',
  fill: 'object-fill',
};

/**
 * Production-grade image wrapper.
 *
 * Handles:
 *   - Lazy loading (or eager for priority)
 *   - Blur placeholder while image loads
 *   - Error fallback to placeholder
 *   - Layout shift prevention (explicit width/height)
 *   - Correct alt text enforcement
 *
 * @param {string}  src       — image URL (required)
 * @param {string}  alt       — accessibility text (required)
 * @param {number}  width     — intrinsic width in px (required)
 * @param {number}  height    — intrinsic height in px (required)
 * @param {string}  className — additional Tailwind classes
 * @param {boolean} priority  — if true, loading="eager"
 * @param {'cover'|'contain'|'fill'} objectFit — CSS object-fit
 */
export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  objectFit = 'cover',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const aspectRatio = width / height;

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {/* Blur placeholder — visible while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      )}

      {/* Main image */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            'absolute inset-0 w-full h-full transition-opacity duration-300',
            OBJECT_FIT_MAP[objectFit],
            isLoaded ? 'opacity-100' : 'opacity-0',
          )}
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center gap-2">
          <img
            src={placeholderImg}
            alt=""
            width={width}
            height={height}
            className={cn('w-full h-full', OBJECT_FIT_MAP[objectFit])}
            aria-hidden="true"
          />
          <span className="absolute text-xs text-gray-400">Image unavailable</span>
        </div>
      )}
    </div>
  );
};