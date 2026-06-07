import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes without conflicts.
 * clsx handles conditionals (strings, arrays, objects).
 * twMerge resolves conflicting Tailwind utilities so the
 * last meaningful class wins, not just the last in DOM order.
 *
 * Example:
 *   cn('px-4 py-2', isActive && 'px-6')
 *   Without twMerge: 'px-4 py-2 px-6' — px-4 still applies (unpredictable)
 *   With twMerge:    'py-2 px-6'       — px-4 removed, px-6 wins (correct)
 */
export const cn = (...inputs) => twMerge(clsx(inputs));