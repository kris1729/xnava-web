import { cn } from '@/utils/cn';
import { Badge } from '@/components/ui/Badge';

export const SectionHeading = ({
  badge,
  badgeColor = 'xnava',
  title,
  description,
  align = 'center',
  className,
}) => {
  return (
    <div
      className={cn(
        'mb-12 sm:mb-16',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        className,
      )}
    >
      {badge && (
        <div className="mb-4">
          <Badge color={badgeColor}>{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">{description}</p>
      )}
    </div>
  );
};