'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

export default function SortPicker() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sort, setSort] = useState<string>('upvotes');
  const [order, setOrder] = useState<string>('desc');
  const [shouldRender, setShouldRender] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const [sort, order] = e.target.value.split(':');
    const params = new URLSearchParams(searchParams.toString());

    if (sort === 'upvotes') {
      params.delete('sort');
    } else {
      params.set('sort', sort);
    }

    if (order === 'asc') {
      params.set('asc', '');
    } else {
      params.delete('asc');
    }

    const href = pathname + '?' + params.toString();

    setSort(sort);
    setOrder(order);
    router.push(href);
  };

  useEffect(() => {
    const initialSort = searchParams.get('sort') || 'upvotes';
    const initialOrder = searchParams.get('asc') == null ? 'desc' : 'asc';

    setSort(initialSort);
    setOrder(initialOrder);
    setShouldRender(true);
  }, []);

  if (!shouldRender) {
    return <div>Loading...</div>;
  }

  return (
    <select name="sort" id="sort-select" value={`${sort}:${order}`} onChange={handleChange}>
      <option value="upvotes:desc">Most Upvotes</option>
      <option value="upvotes:asc">Least Upvotes</option>
      <option value="comments:desc">Most Comments</option>
      <option value="comments:asc">Least Comments</option>
    </select>
  );
}
