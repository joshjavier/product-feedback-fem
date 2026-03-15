'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

import CategoryButton from './category-button';

interface CategoryPickerProps {
  categories: string[];
}

export default function CategoryPicker({ categories }: CategoryPickerProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ref = useRef<(category: string) => void | null>(null);

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

  const isActive = (category: string) => {
    const lowercasedCategory = category.toLowerCase();
    const currentCategory = searchParams.get('category') ?? 'all';
    return currentCategory === lowercasedCategory;
  };

  const handleClick = useCallback(
    (category: string) => () => {
      ref.current?.(category);
    },
    [],
  );

  useEffect(() => {
    ref.current = (category: string) => {
      const lowercasedCategory = category.toLowerCase();
      const href =
        pathname +
        '?' +
        createQueryString('category', lowercasedCategory === 'all' ? null : lowercasedCategory);
      router.push(href);
    };
  }, []);

  return (
    <div className="rounded-[10px] bg-white p-6 pr-4.5 pb-9">
      <ul className="flex flex-wrap gap-3.5">
        {categories.map((category) => (
          <li key={category}>
            <CategoryButton
              category={category}
              active={isActive(category)}
              onClick={handleClick(category)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
