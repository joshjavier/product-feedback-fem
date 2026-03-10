'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

interface CategoryPickerProps {
  categories: string[];
}

export default function CategoryPicker({ categories }: CategoryPickerProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value != null) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="flex gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => {
            const lowercasedCategory = category.toLowerCase();
            const href =
              pathname +
              '?' +
              createQueryString(
                'category',
                lowercasedCategory === 'all' ? null : lowercasedCategory,
              );
            router.push(href);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
