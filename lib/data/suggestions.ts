import { cache } from 'react';

import { Suggestion } from '@/types';

interface GetSuggestionsOptions {
  category?: string;
  sort?: string;
  asc?: boolean;
}

export const getSuggestions = cache(
  async ({ category = 'all', sort = 'upvotes', asc = false }: GetSuggestionsOptions = {}) => {
    const searchParams = new URLSearchParams();
    searchParams.set('category', category);
    searchParams.set('sort', sort);
    if (asc) {
      searchParams.set('asc', '');
    }

    const res = await fetch(
      `${process.env.NEXTAPP_URL}/api/suggestions?${searchParams.toString()}`,
    );
    return res.json() as Promise<Suggestion[]>;
  },
);
