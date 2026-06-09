import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';

const SIZES = {
  sm: 'text-lg',
  md: 'text-2xl sm:text-3xl',
  lg: 'text-3xl sm:text-4xl',
  xl: 'text-4xl sm:text-5xl lg:text-6xl',
};

/**
 * Premium text logo.
 *
 * Renders "Xnava." as bold Poppins text with a colored dot.
 * Works on any background — pass variant for color.
 *
 * @param {'dark'|'white'} variant  — dark text (light bg) or white text (dark bg)
 * @param {'sm'|'md'|'lg'|'xl'} size
 * @param {boolean} asLink          — wrap in React Router Link
 * @param {string}  linkTo          — route for Link
 * @param {string}  className
 */
export const Logo = ({
  variant = 'dark',
  size = 'md',
  asLink = true,
  linkTo = ROUTES.HOME,
  className,
}) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-gray-900';
  const dotColor = variant === 'white' ? 'text-xnava-400' : 'text-xnava-500';
  const hoverDot = variant === 'white' ? 'group-hover:text-xnava-300' : 'group-hover:text-xnava-600';

  const content = (
    <span className={cn('font-heading font-extrabold tracking-tight select-none', textColor, SIZES[size], className)}>
      Xnava
      <span className={cn('transition-colors duration-200', dotColor, hoverDot)}>.</span>
    </span>
  );

  if (asLink) {
    return (
      <Link to={linkTo} className="inline-flex items-center group shrink-0" aria-label="Xnava Enterprises Home">
        {content}
      </Link>
    );
  }

  return <span className="inline-flex items-center shrink-0">{content}</span>;
};