import { cn } from '@/utils/cn';

export const Card = ({
  children,
  hover = false,
  padding = 'md',
  className,
  ...props
}) => {
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'rounded-xl border border-gray-200 bg-white shadow-sm',
        hover && 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
        paddings[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardImage = ({ src, alt, className }) => {
  return (
    <div className={cn('overflow-hidden rounded-t-xl -mx-6 -mt-6 mb-4', className)}>
      <img src={src} alt={alt} className="w-full h-48 object-cover" loading="lazy" />
    </div>
  );
};

export const CardTitle = ({ children, className }) => {
  return <h3 className={cn('text-xl font-semibold text-gray-900 mb-2', className)}>{children}</h3>;
};

export const CardDescription = ({ children, className }) => {
  return <p className={cn('text-gray-600 leading-relaxed', className)}>{children}</p>;
};