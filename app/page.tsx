import Link from 'next/link';

import HeaderNav from '@/components/header-nav';
import SortPicker from '@/components/sort-picker';
import { getSuggestions } from '@/lib/data/suggestions';
import { getFirstString } from '@/utils';

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function SuggestionsPage({ searchParams }: PageProps) {
  const { category, sort, asc } = await searchParams;

  const suggestions = await getSuggestions({
    category: getFirstString(category),
    sort: getFirstString(sort),
    asc: asc !== undefined, // default to 'desc' if 'asc' is not present
  });

  return (
    <div className="lg:px-10 lg:pt-23.5 lg:pb-25">
      <div className="mx-auto box-content flex max-w-277.5 flex-col lg:flex-row lg:gap-7.5">
        <HeaderNav />
        <main>
          <div className="bg-secondary-900 text-secondary-200 flex h-14 items-center justify-between px-6">
            <SortPicker />
            <Link
              href="/feedback/new"
              className="bg-primary-500 text-secondary-200 hover:not-disabled:bg-primary-400 min-h-10 shrink-0 rounded-[10px] px-4 py-2.5 text-[13px] font-bold transition-colors"
            >
              <span aria-hidden="true">+ </span>Add Feedback
            </Link>
          </div>
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
        </main>
      </div>
    </div>
  );
}
