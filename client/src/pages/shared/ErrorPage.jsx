import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/Button';

const ErrorPage = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom text-center relative z-10">
        <div className="w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>

        <h1 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
          Something Went Wrong
        </h1>

        <p className="text-lg text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
          An unexpected error occurred. Please try again or go back to the home page.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={handleRetry} variant="primary" size="lg">
            Try Again
          </Button>
          <Button to={ROUTES.HOME} variant="ghostDark" size="lg">
            Go Home
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;