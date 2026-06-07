import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

const VARIANTS = {
  primary: 'bg-xnava-600 text-white hover:bg-xnava-700 focus:ring-xnava-500',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400',
  outline: 'border-2 border-xnava-600 text-xnava-600 hover:bg-xnava-50 focus:ring-xnava-500',
  ghost: 'text-xnava-600 hover:bg-xnava-50 focus:ring-xnava-500',
  techtrainx: 'bg-techtrainx-600 text-white hover:bg-techtrainx-700 focus:ring-techtrainx-500',
  chetna: 'bg-chetna-600 text-white hover:bg-chetna-700 focus:ring-chetna-500',
};

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  type = 'button',
  disabled = false,
  fullWidth = false,
  className,
  ...props
}) => {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    VARIANTS[variant],
    SIZES[size],
    fullWidth && 'w-full',
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes} {...props}>
      {children}
    </button>
  );
};