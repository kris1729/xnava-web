import { motion } from 'framer-motion';

/**
 * Wraps every page with a fade-in animation and ensures minimum height.
 * Pushes footer to the bottom on short pages.
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