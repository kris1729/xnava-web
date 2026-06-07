import { cn } from '@/utils/cn';
import { Badge } from '@/components/ui/Badge';

/* ─────────────────────────────────────────────
   Card
   ───────────────────────────────────────────── */

const PADDING_MAP = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

/**
 * Base card container.
 *
 * @param {boolean}  hover      — enables lift + border-color shift on hover
 * @param {'none'|'sm'|'md'|'lg'} padding — internal spacing preset
 * @param {string}   as         — semantic HTML tag ('article', 'li', 'section')
 * @param {string}   className  — additional Tailwind classes
 */
export const Card = ({
  children,
  hover = false,
  padding = 'md',
  as: Tag = 'div',
  className,
  ...props
}) => {
  return (
    <Tag
      className={cn(
        'relative rounded-xl border border-gray-200 bg-white shadow-sm',
        hover &&
          'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-xnava-200',
        PADDING_MAP[padding],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

/* ─────────────────────────────────────────────
   CardImage
   ───────────────────────────────────────────── */

const ASPECT_MAP = {
  video: 'aspect-video',
  square: 'aspect-square',
  wide: 'aspect-[16/9]',
  portrait: 'aspect-[3/4]',
};

/**
 * Card image with configurable aspect ratio.
 *
 * Renders full-width at the top of a Card.
 * Negative margins pull it flush with Card borders.
 *
 * @param {string} src         — image URL
 * @param {string} alt         — accessibility text (required)
 * @param {'video'|'square'|'wide'|'portrait'} aspectRatio — image shape
 * @param {string} className   — additional Tailwind classes
 */
export const CardImage = ({
  src,
  alt,
  aspectRatio = 'video',
  className,
}) => {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-t-xl -mx-6 -mt-6 mb-4',
        ASPECT_MAP[aspectRatio],
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

/* ─────────────────────────────────────────────
   CardBadge
   ───────────────────────────────────────────── */

/**
 * Absolutely-positioned badge in the top-right corner of a Card.
 * Card must have `relative` (it does by default).
 *
 * @param {string} children   — badge text
 * @param {string} color      — passed to <Badge> component
 * @param {string} className  — additional Tailwind classes
 */
export const CardBadge = ({ children, color = 'xnava', className }) => {
  return (
    <div className="absolute top-4 right-4 z-10">
      <Badge color={color} className={className}>
        {children}
      </Badge>
    </div>
  );
};

/* ─────────────────────────────────────────────
   CardTitle
   ───────────────────────────────────────────── */

export const CardTitle = ({ children, className }) => {
  return (
    <h3 className={cn('text-xl font-semibold text-gray-900 mb-2', className)}>
      {children}
    </h3>
  );
};

/* ─────────────────────────────────────────────
   CardDescription
   ───────────────────────────────────────────── */

export const CardDescription = ({ children, className }) => {
  return (
    <p className={cn('text-gray-600 leading-relaxed', className)}>
      {children}
    </p>
  );
};