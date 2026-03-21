import { ComponentPropsWithRef } from 'react';

import { getCategoryLabel } from '@/lib/data/categories';

interface CategoryPillProps extends ComponentPropsWithRef<'div'> {
  category: string;
}

export default async function CategoryPill({ category, className, ...props }: CategoryPillProps) {
  const categoryLabel = await getCategoryLabel(category);

  return (
    <div
      className={[
        'bg-secondary-200 text-secondary-500 inline-flex min-h-7.5 min-w-12 items-center justify-center rounded-[10px] px-4 text-center text-[13px] font-semibold',
        className,
      ].join(' ')}
      {...props}
    >
      {categoryLabel}
    </div>
  );
}
