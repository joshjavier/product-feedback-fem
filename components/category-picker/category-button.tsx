'use client';

import { ComponentPropsWithRef, memo } from 'react';

interface CategoryButtonProps extends ComponentPropsWithRef<'button'> {
  category: string;
  active: boolean;
}

export default memo(function CategoryButton({
  category,
  active,
  className,
  ...props
}: CategoryButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={`${active}`}
      data-category={category.toLowerCase()}
      className={[
        'min-w-12 min-h-7.5 flex justify-center items-center text-center rounded-[10px] font-semibold text-[13px] bg-secondary-200 text-secondary-500 px-4 hover:not-disabled:not-aria-pressed:bg-secondary-300 aria-pressed:bg-secondary-500 aria-pressed:text-white transition-colors',
        className,
      ].join(' ')}
      {...props}
    >
      {category}
    </button>
  );
});
