import { cn } from '@/utils/cn';
import { Badge } from '@/components/ui/Badge';

/* ──────────────────────────────────────────
   Card
   ────────────────────────────────────────── */

const PADDING_MAP = {
  none: 'p-0',
  sm: 'p-4 sm:p-5',
  md: 'p-6 sm:p-8',
  lg: 'p-8 sm:p-10',
};

const VARIANT_MAP = {
  dark: 'bg-gray-900 border border-gray-800 hover:border-xnava-500/30 hover:shadow-xl hover:shadow-xnava-500/5',
  light: 'bg-white border border-gray-200 hover:border-xnava-500/30 hover:shadow-xl hover:shadow-xnava-500/5',
};

/**
 * Card component.
 *
 * @param {boolean}  hover      — enables lift + glow on hover
 * @param {'none'|'sm'|'md'|'lg'} padding
 * @param {'dark'|'light'}      variant
 * @param {string}   as         — semantic HTML tag (div, article, li, section)
 * @param {string}   className
 */
export const Card = ({
  children,
  hover = false,
  padding = 'md',
  variant = 'dark',
  as: Tag = 'div',
  className,
  ...props
}) => {
  return (
    <Tag
      className={cn(
        'rounded-2xl transition-all duration-300',
        VARIANT_MAP[variant],
        hover && 'hover:-translate-y-1',
        PADDING_MAP[padding],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

/* ──────────────────────────────────────────
   CardImage
   ────────────────────────────────────────── */

const ASPECT_MAP = {
  video: 'aspect-video',
  square: 'aspect-square',
  wide: 'aspect-[16/9]',
  portrait: 'aspect-[3/4]',
};

/**
 * Full-width card image with configurable aspect ratio.
 * Uses negative margins to sit flush with card edges.
 *
 * @param {string} src
 * @param {string} alt
 * @param {'video'|'square'|'wide'|'portrait'} aspectRatio
 * @param {string} className
 */
export const CardImage = ({ src, alt, aspectRatio = 'video', className }) => {
  return (
    <div className={cn('overflow-hidden rounded-t-2xl -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6', ASPECT_MAP[aspectRatio], className)}>
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </div>
  );
};

/* ──────────────────────────────────────────
   CardBadge
   ────────────────────────────────────────── */

/**
 * Absolutely-positioned badge in the top-right corner.
 * Card must have relative positioning (it does by default via rounded-2xl).
 *
 * @param {string} children
 * @param {string} color    — passed to <Badge>
 * @param {string} className
 */
export const CardBadge = ({ children, color = 'xnava', className }) => {
  return (
    <div className="absolute top-4 right-4 z-10">
      <Badge color={color} size="sm" className={className}>
        {children}
      </Badge>
    </div>
  );
};

/* ──────────────────────────────────────────
   CardTitle
   ────────────────────────────────────────── */

export const CardTitle = ({ children, className }) => {
  return <h3 className={cn('text-xl sm:text-2xl font-heading font-bold text-white mb-3', className)}>{children}</h3>;
};

/* ──────────────────────────────────────────
   CardDescription
   ────────────────────────────────────────── */

export const CardDescription = ({ children, className }) => {
  return <p className={cn('text-gray-400 leading-relaxed', className)}>{children}</p>;
};