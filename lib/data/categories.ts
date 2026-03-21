import { cache } from 'react';

export const getCategories = cache(async () => {
  const res = await fetch(`${process.env.NEXTAPP_URL}/api/categories`);
  return res.json() as Promise<{ value: string; label: string }[]>;
});

export const getCategoryLabel = cache(async (value: string) => {
  const res = await fetch(`${process.env.NEXTAPP_URL}/api/categories`);
  const categories = (await res.json()) as { value: string; label: string }[];
  const category = categories.find((c) => c.value === value);
  return category?.label;
});
