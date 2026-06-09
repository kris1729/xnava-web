import { cn } from '@/utils/cn';

const COLORS = {
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  green: 'bg-green-500/10 text-green-400 border-green-500/20',
  red: 'bg-red-500/10 text-red-400 border-red-500/20',
  yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  gray: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
  white: 'bg-white/10 text-white border-white/20',
  xnava: 'bg-xnava-500/10 text-xnava-400 border-xnava-500/20',
  techtrainx: 'bg-techtrainx-500/10 text-techtrainx-400 border-techtrainx-500/20',
  chetna: 'bg-chetna-500/10 text-chetna-400 border-chetna-500/20',
  success: 'bg-green-500/10 text-green-400 border-green-500/20',
};

const SIZES = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-sm',
};

/**
 * Premium pill badge.
 *
 * Usage:
 *   <Badge color="xnava">Label</Badge>
 *   <Badge color="techtrainx" size="lg">Placement Bootcamp</Badge>
 *
 * @param {'blue'|'green'|'red'|'yellow'|'purple'|'gray'|'white'|'xnava'|'techtrainx'|'chetna'|'success'} color
 * @param {'sm'|'md'|'lg'} size
 */
export const Badge = ({ children, color = 'xnava', size = 'md', className }) => {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border font-medium tracking-wide',
        COLORS[color],
        SIZES[size],
        className,
      )}
    >
      {children}
    </span>
  );
};