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

const MOBILE_MENU = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } },
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
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-gray-950/90 backdrop-blur-xl border-b border-gray-800/50 shadow-lg shadow-black/10'
          : 'bg-transparent',
      )}
    >
      <nav className="container-custom flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Logo variant="white" size="md" linkTo={ROUTES.HOME} />

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === ROUTES.HOME}
              className={({ isActive }) =>
                cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                  isActive ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5',
                )
              }
            >
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
          className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-gray-950/95 backdrop-blur-xl border-t border-gray-800/50 overflow-hidden"
            variants={MOBILE_MENU}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="container-custom py-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === ROUTES.HOME}
                  className={({ isActive }) =>
                    cn(
                      'block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200',
                      isActive ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4">
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