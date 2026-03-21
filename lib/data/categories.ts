import { cache } from 'react';

export const getCategories = cache(async () => {
  const res = await fetch(`${process.env.NEXTAPP_URL}/api/categories`);
  return res.json() as Promise<{ value: string; label: string }[]>;
});
