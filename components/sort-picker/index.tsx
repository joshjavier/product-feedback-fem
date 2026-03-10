'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';

export default function SortPicker() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const [sort, order] = e.target.value.split(':');
    const params = new URLSearchParams(searchParams.toString());

    if (sort === 'upvotes' && order === 'desc') {
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
    router.push(href);
  };

  return (
    <select name="sort" id="sort-select" onChange={handleChange}>
      <option value="upvotes:desc">Most Upvotes</option>
      <option value="upvotes:asc">Least Upvotes</option>
      <option value="comments:desc">Most Comments</option>
      <option value="comments:asc">Least Comments</option>
    </select>
  );
}
