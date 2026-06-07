import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { META } from '@/constants/meta';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <section className="section-padding">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-8xl sm:text-9xl font-heading font-bold text-xnava-100 select-none">
            404
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4">
            {META.NOT_FOUND.TITLE}
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
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