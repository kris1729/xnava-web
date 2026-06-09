import { ROUTES } from '@/constants/routes';
import { META } from '@/constants/meta';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950">
      {/* Decorative blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-xnava-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-xnava-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="text-8xl sm:text-9xl lg:text-[12rem] font-heading font-extrabold bg-gradient-to-r from-xnava-500 to-xnava-300 bg-clip-text text-transparent select-none leading-none">
            404
          </span>

          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-6 mb-4">
            {META.NOT_FOUND.TITLE}
          </h1>

          <p className="text-lg text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved to another URL.
          </p>

          <Button to={ROUTES.HOME} variant="primary" size="lg">
            Back to Home
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;