'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MouseEvent, useCallback, useEffect, useRef } from 'react';

import CategoryButton from './category-button';

interface CategoryPickerProps {
  categories: string[];
}

export default function CategoryPicker({ categories }: CategoryPickerProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ref = useRef<(category: string | null) => void | null>(null);

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

  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    ref.current?.((event.target as HTMLButtonElement).getAttribute('data-category'));
  }, []);

  useEffect(() => {
    ref.current = (category: string | null) => {
      if (!category) return;
      const href =
        pathname + '?' + createQueryString('category', category === 'all' ? null : category);
      router.replace(href);
    };
  }, []);

  return (
    <div className="rounded-[10px] bg-white p-6 pr-4.5 max-lg:min-h-44.5">
      <h2 className="sr-only">Categories</h2>
      <ul className="flex flex-wrap gap-3.5">
        {categories.map((category) => (
          <li key={category}>
            <CategoryButton category={category} active={isActive(category)} onClick={handleClick} />
          </li>
        ))}
      </ul>
    </div>
  );
}
