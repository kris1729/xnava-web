import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';

// ─── Logo imports (Vite handles SVGs as URLs) ───
import xnavaDark from '@/assets/logo/xnava-logo.svg';
import xnavaWhite from '@/assets/logo/xnava-logo-white.svg';
import xnavaIcon from '@/assets/logo/xnava-icon.svg';
import techtrainxDark from '@/assets/logo/techtrainx-logo.svg';
import techtrainxWhite from '@/assets/logo/techtrainx-logo-white.svg';
import chetnaDark from '@/assets/logo/chetna-logo.svg';
import chetnaWhite from '@/assets/logo/chetna-logo-white.svg';

// ─── Constants (outside component — never recreated) ───

const LOGOS = {
  xnava: {
    dark: xnavaDark,
    white: xnavaWhite,
    icon: xnavaIcon,
  },
  techtrainx: {
    dark: techtrainxDark,
    white: techtrainxWhite,
    icon: techtrainxDark,
  },
  chetna: {
    dark: chetnaDark,
    white: chetnaWhite,
    icon: chetnaDark,
  },
};

const UNIT_NAMES = {
  xnava: 'Xnava Enterprises',
  techtrainx: 'TechTrainx Labs',
  chetna: 'Chetna Academy',
};

const SIZE_CLASSES = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-14',
  xl: 'h-20',
};

/**
 * Single logo component for all brand usage across the site.
 */
export const Logo = ({
  unit = 'xnava',
  variant = 'dark',
  size = 'md',
  iconOnly = false,
  asLink = true,
  linkTo = ROUTES.HOME,
  className,
}) => {
  const logoSrc = iconOnly ? LOGOS[unit].icon : LOGOS[unit][variant];
  const altText = `${UNIT_NAMES[unit]} logo`;

  const img = (
    <img
      src={logoSrc}
      alt={altText}
      className={cn(SIZE_CLASSES[size], 'w-auto', className)}
      loading="eager"
    />
  );

  if (asLink) {
    return (
      <Link to={linkTo} className="inline-flex items-center" aria-label={`${UNIT_NAMES[unit]} Home`}>
        {img}
      </Link>
    );
  }

  return img;
};