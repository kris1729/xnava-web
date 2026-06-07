import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/utils/cn';

const NAV_LINKS = [
  { label: 'Home', to: ROUTES.HOME },
  { label: 'About', to: ROUTES.ABOUT },
  { label: 'TechTrainx', to: ROUTES.TECHTRAINX_HOME },
  { label: 'Chetna Academy', to: ROUTES.CHETNA_HOME },
  { label: 'Contact', to: ROUTES.CONTACT },
];

const ACTIVE_LINK_CLASSES =
  'text-xnava-600 relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-xnava-500 after:rounded-full';

const DESKTOP_LINK_CLASSES = ({ isActive }) =>
  cn(
    'text-sm font-medium transition-colors duration-200 py-1',
    isActive ? ACTIVE_LINK_CLASSES : 'text-gray-600 hover:text-xnava-600',
  );

const MOBILE_LINK_CLASSES = ({ isActive }) =>
  cn(
    'block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200',
    isActive ? 'bg-xnava-50 text-xnava-600' : 'text-gray-700 hover:bg-gray-50',
  );

const MOBILE_MENU_VARIANTS = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: 'auto', transition: { duration: 0.25, ease: 'easeOut' } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: 'easeIn' } },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { y: scrollY } = useScrollPosition();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isScrolled = scrollY > 20;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-shadow duration-300',
        isScrolled && 'shadow-sm',
      )}
    >
      <nav className="container-custom flex items-center justify-between h-16 lg:h-20">
        {/* ── Logo ── */}
        <Logo variant="dark" size="md" linkTo={ROUTES.HOME} />

        {/* ── Desktop Links ── */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={DESKTOP_LINK_CLASSES}
              end={link.to === ROUTES.HOME}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* ── Desktop CTA ── */}
        <div className="hidden lg:block">
          <Button to={ROUTES.CONTACT} variant="primary" size="sm">
            Get in Touch
          </Button>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen((prev) => !prev)}
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

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
            variants={MOBILE_MENU_VARIANTS}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="container-custom py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={MOBILE_LINK_CLASSES}
                  end={link.to === ROUTES.HOME}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-3">
                <Button to={ROUTES.CONTACT} variant="primary" fullWidth>
                  Get in Touch
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};