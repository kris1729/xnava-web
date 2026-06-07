import { cn } from '@/utils/cn';

const COLORS = {
  blue: 'bg-blue-100 text-blue-800',
  green: 'bg-green-100 text-green-800',
  red: 'bg-red-100 text-red-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  purple: 'bg-purple-100 text-purple-800',
  gray: 'bg-gray-100 text-gray-800',
  techtrainx: 'bg-techtrainx-100 text-techtrainx-800',
  chetna: 'bg-chetna-100 text-chetna-800',
  xnava: 'bg-xnava-100 text-xnava-800',
};

export const Badge = ({ children, color = 'blue', className }) => {
  return (
    <span
      className={cn(
        'inline-block rounded-full px-3 py-1 text-xs font-semibold',
        COLORS[color],
        className,
      )}
    >
      {children}
    </span>
  );
};