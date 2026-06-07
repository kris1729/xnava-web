import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { COMPANY } from '@/constants/company';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

const NAV_LINKS = [
  { label: 'Home', to: ROUTES.HOME },
  { label: 'About', to: ROUTES.ABOUT },
  {
    label: COMPANY.UNITS.TECHTRAINX.NAME,
    to: ROUTES.TECHTRAINX_HOME,
  },
  {
    label: COMPANY.UNITS.CHETNA.NAME,
    to: ROUTES.CHETNA_HOME,
  },
  { label: 'Contact', to: ROUTES.CONTACT },
];

const linkClasses = ({ isActive }) =>
  cn(
    'text-sm font-medium transition-colors duration-200',
    isActive ? 'text-xnava-600' : 'text-gray-600 hover:text-xnava-600',
  );

const mobileLinkClasses = ({ isActive }) =>
  cn(
    'block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200',
    isActive ? 'bg-xnava-50 text-xnava-600' : 'text-gray-700 hover:bg-gray-50',
  );

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container-custom flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to={ROUTES.HOME} className="flex items-center gap-2" aria-label="Xnava Enterprises Home">
          <span className="text-xl sm:text-2xl font-heading font-bold text-xnava-900">
            Xnava<span className="text-xnava-500">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses} end={link.to === ROUTES.HOME}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button to={ROUTES.CONTACT} variant="primary" size="sm">
            Get in Touch
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white animate-slide-down">
          <div className="container-custom py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={mobileLinkClasses}
                end={link.to === ROUTES.HOME}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-3">
              <Button
                to={ROUTES.CONTACT}
                variant="primary"
                fullWidth
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};