import Link from 'next/link';

import CategoryPicker from '@/components/category-picker';
import SortPicker from '@/components/sort-picker';
import { getCategories } from '@/lib/data/categories';
import { getSuggestions } from '@/lib/data/suggestions';
import { getFirstString } from '@/utils';

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function SuggestionsPage({ searchParams }: PageProps) {
  const { category, sort, asc } = await searchParams;

  const categories = await getCategories();
  const suggestions = await getSuggestions({
    category: getFirstString(category),
    sort: getFirstString(sort),
    asc: asc !== undefined, // default to 'desc' if 'asc' is not present
  });

  return (
    <>
      <CategoryPicker categories={categories} />
      <SortPicker />
      <Link href="/feedback/new">Add Feedback</Link>
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
