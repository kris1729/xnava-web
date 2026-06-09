import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

// Extracted outside component — zero re-renders
const VARIANTS = {
  primary:
    'bg-xnava-600 text-white hover:bg-xnava-500 shadow-lg shadow-xnava-600/25 hover:shadow-xl hover:shadow-xnava-600/30 hover:-translate-y-0.5',
  secondary:
    'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300',
  outline:
    'border-2 border-xnava-600 text-xnava-600 hover:bg-xnava-600 hover:text-white hover:shadow-lg hover:shadow-xnava-600/20',
  ghost:
    'text-xnava-500 hover:bg-xnava-50 active:bg-xnava-100',
  ghostDark:
    'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-gray-700',
  techtrainx:
    'bg-techtrainx-600 text-white hover:bg-techtrainx-500 shadow-lg shadow-techtrainx-600/25 hover:shadow-xl hover:shadow-techtrainx-600/30 hover:-translate-y-0.5',
  chetna:
    'bg-chetna-600 text-white hover:bg-chetna-500 shadow-lg shadow-chetna-600/25 hover:shadow-xl hover:shadow-chetna-600/30 hover:-translate-y-0.5',
};

const SIZES = {
  sm: 'px-4 py-2.5 text-sm gap-1.5',
  md: 'px-6 py-3.5 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
  xl: 'px-10 py-5 text-lg gap-3',
};

const BASE =
  'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-xnava-500 focus-visible:outline-offset-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 select-none';

/**
 * Premium button component.
 *
 * Renders:
 *   - <Link>   when `to` is provided
 *   - <a>      when `href` is provided
 *   - <button> otherwise
 *
 * Supports loading spinner, left/right icon slots,
 * full-width mode, and all Tailwind overrides via className.
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
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], fullWidth && 'w-full', className);

  const content = (
    <>
      {isLoading ? (
        <svg className="animate-spin h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
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
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
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