'use client';

import { ComponentPropsWithRef, memo } from 'react';

interface CategoryButtonProps extends ComponentPropsWithRef<'button'> {
  category: string;
  active: boolean;
}

export default memo(function CategoryButton({ category, active, ...props }: CategoryButtonProps) {
  return (
    <button type="button" aria-pressed={`${active}`} {...props}>
      {category}
    </button>
  );
});
