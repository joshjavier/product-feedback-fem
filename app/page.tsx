import Link from 'next/link';

import IconSuggestions from '@/assets/suggestions/icon-suggestions.svg';
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

        <main className="flex-1">
          <div className="md:max-lg:px-10">
            <div className="bg-secondary-900 text-secondary-200 flex h-14 items-center px-6 md:h-18 md:gap-9.5 md:rounded-[10px]">
              <div className="flex items-center gap-4 max-md:sr-only">
                <IconSuggestions aria-hidden="true" />
                <h1 className="text-[18px] font-bold tracking-[-0.25px]">
                  {suggestions.length} Suggestions
                </h1>
              </div>
              <SortPicker />
              <Link
                href="/feedback/new"
                className="bg-primary-500 text-secondary-200 hover:not-disabled:bg-primary-400 ml-auto flex min-h-10 shrink-0 items-center justify-center gap-1 rounded-[10px] px-4 py-2.5 text-[13px] font-bold transition-colors md:min-h-11 md:px-6 md:text-[14px]"
              >
                <span aria-hidden="true">+</span> Add Feedback
              </Link>
            </div>
          </div>

          <div className="px-6 pt-8 max-lg:pb-25 md:px-10 md:pt-6 lg:px-0">
            {suggestions.map((suggestion) => (
              <div key={suggestion.id} className="border border-red-500">
                <Link href={`/feedback/${suggestion.id}`}>{suggestion.title}</Link>
                <div>{suggestion.description}</div>
                <div>{suggestion.category}</div>
                <div>{suggestion.upvotes}</div>
                <div>{suggestion.comments}</div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
