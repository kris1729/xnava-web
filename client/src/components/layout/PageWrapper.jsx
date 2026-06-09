import { motion } from 'framer-motion';

/**
 * Wraps all page content inside App.jsx <Routes>.
 * Smooth fade-in + 12px upward motion on mount.
 * min-h-screen ensures footer stays at bottom on short pages.
 */
export const PageWrapper = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="min-h-screen"
    >
      {children}
    </motion.main>
  );
};