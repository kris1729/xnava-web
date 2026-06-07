import { motion } from 'framer-motion';

/**
 * Wraps every page inside App.jsx <Routes>.
 * Fade-in + 8px upward slide on mount.
 * min-h-[60vh] ensures short pages still push footer down.
 */
export const PageWrapper = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="min-h-[60vh]"
    >
      {children}
    </motion.main>
  );
};