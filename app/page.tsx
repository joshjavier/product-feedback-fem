import Link from 'next/link';

import CategoryPicker from '@/components/category-picker';
import { Suggestion } from '@/types';

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function SuggestionsPage({ searchParams }: PageProps) {
  const filterParams = Object.entries(await searchParams)
    .map(([key, value]): [string, string | undefined] => {
      // if value is an array, use the first string only
      if (Array.isArray(value)) {
        return [key, value[0]];
      }
      return [key, value];
    })
    .filter(([key, value]) => {
      if (key === 'asc') {
        return value !== undefined; // don't drop 'asc' if value is empty string
      }
      return value;
    }) as [string, string][];

  const data = await fetch(
    `${process.env.NEXTAPP_URL}/api/suggestions?${new URLSearchParams(filterParams).toString()}`,
    {
      next: { revalidate: 60 },
    },
  );
  const suggestions = (await data.json()) as Suggestion[];

  return (
    <>
      <CategoryPicker />
      <h1>Suggestions</h1>
      {suggestions.map((suggestion) => (
        <div key={suggestion.id}>
          <Link href={`/feedback/${suggestion.id}`}>{suggestion.title}</Link>
          <div>{suggestion.description}</div>
          <div>{suggestion.category}</div>
          <div>{suggestion.upvotes}</div>
          <div>{suggestion.comments}</div>
        </div>
      ))}
    </>
  );
}
