import { NextRequest } from 'next/server';

import productRequests from '@/data/product-requests';
import { Suggestion } from '@/types';
import { getCommentCount } from '@/utils';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const category = searchParams.get('category') || 'all';
  const sort = searchParams.get('sort') || 'upvotes';
  const asc = searchParams.get('asc') !== null; // true if 'asc' is present regardless of its value

  let suggestions = productRequests
    .filter((p) => p.status === 'suggestion')
    .map((s) => {
      const suggestion = {} as any;

      Object.keys(s).forEach((key) => {
        const typedKey = key as keyof typeof s;

        if (
          typedKey === 'status' || // drop the status field (they're all suggestions)
          typedKey === 'comments' // we'll deal with comments below
        ) {
          return;
        }

        suggestion[typedKey] = s[typedKey];
      });

      // simplify comments from an array of comment objects to an integer of comment count
      suggestion.comments = getCommentCount(s.comments);

      return suggestion as Suggestion;
    });

  if (category !== 'all') {
    suggestions = suggestions.filter((s) => s.category === category);
  }

  if (suggestions.length === 0) {
    return Response.json(suggestions);
  }

  // only sort if the filtered array has two or more items
  if (suggestions.length >= 2) {
    if (sort === 'upvotes') {
      suggestions.sort((a, b) => (asc ? a.upvotes - b.upvotes : b.upvotes - a.upvotes));
    } else if (sort === 'comments') {
      suggestions.sort((a, b) => (asc ? a.comments - b.comments : b.comments - a.comments));
    } else {
      return new Response(JSON.stringify({ error: 'Invalid sort field' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  return Response.json(suggestions);
}
