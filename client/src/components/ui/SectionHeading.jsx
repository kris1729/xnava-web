import { cn } from '@/utils/cn';
import { Badge } from '@/components/ui/Badge';

const ALIGN_MAP = {
  center: 'text-center items-center',
  left: 'text-left items-start',
};

/**
 * Section heading with optional eyebrow badge.
 *
 * Usage:
 *   <SectionHeading
 *     eyebrow="Our Units"
 *     eyebrowColor="xnava"
 *     title="Two Verticals. One Mission."
 *     description="Building careers through skills..."
 *     align="center"
 *   />
 *
 * @param {string}  eyebrow      — small badge text above title
 * @param {string}  eyebrowColor — Badge color prop
 * @param {string}  title        — main heading (supports <br/> for line breaks)
 * @param {string}  gradient     — second part of title with gradient text
 * @param {string}  description  — subtitle paragraph
 * @param {'center'|'left'} align
 * @param {string}  className
 */
export const SectionHeading = ({
  eyebrow,
  eyebrowColor = 'xnava',
  title,
  gradient,
  description,
  align = 'center',
  className,
}) => {
  return (
    <div className={cn('flex flex-col mb-16 lg:mb-20', ALIGN_MAP[align], className)}>
      {eyebrow && (
        <Badge color={eyebrowColor} size="lg" className="mb-5">
          {eyebrow}
        </Badge>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-5 text-balance leading-tight">
        {title}
        {gradient && (
          <>
            {' '}
            <span className="bg-gradient-to-r from-xnava-400 to-xnava-200 bg-clip-text text-transparent">
              {gradient}
            </span>
          </>
        )}
      </h2>

      {description && (
        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
};