/**
 * Merges Tailwind CSS classes safely.
 * Filters out falsy values and joins with space.
 * Prevents className conflicts when conditionally applying classes.
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};