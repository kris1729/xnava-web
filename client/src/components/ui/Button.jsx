import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

// Extracted outside component — never recreated on re-render
const VARIANTS = {
  primary:
    'bg-xnava-600 text-white hover:bg-xnava-700 focus-visible:ring-xnava-500 active:bg-xnava-800',
  secondary:
    'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-400 active:bg-gray-300',
  outline:
    'border-2 border-xnava-600 text-xnava-600 hover:bg-xnava-50 focus-visible:ring-xnava-500 active:bg-xnava-100',
  ghost:
    'text-xnava-600 hover:bg-xnava-50 focus-visible:ring-xnava-500 active:bg-xnava-100',
  techtrainx:
    'bg-techtrainx-600 text-white hover:bg-techtrainx-700 focus-visible:ring-techtrainx-500 active:bg-techtrainx-800',
  chetna:
    'bg-chetna-600 text-white hover:bg-chetna-700 focus-visible:ring-chetna-500 active:bg-chetna-800',
};

const SIZES = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
};

const BASE_CLASSES =
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none';

/**
 * Multi-purpose button component.
 *
 * Renders as:
 *   - React Router <Link>  when `to` prop is provided
 *   - Native <a>           when `href` prop is provided
 *   - Native <button>      otherwise
 *
 * Supports loading spinner, left/right icon slots,
 * full-width mode, and all Tailwind className overrides.
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  type = 'button',
  disabled = false,
  isLoading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  ...props
}) => {
  const classes = cn(
    BASE_CLASSES,
    VARIANTS[variant],
    SIZES[size],
    fullWidth && 'w-full',
    className,
  );

  const content = (
    <>
      {isLoading ? (
        <svg
          className="animate-spin h-4 w-4 shrink-0"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      ) : (
        leftIcon
      )}
      {children}
      {!isLoading && rightIcon}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled || isLoading} className={classes} {...props}>
      {content}
    </button>
  );
};