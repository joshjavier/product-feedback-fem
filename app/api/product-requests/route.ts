import { NextRequest } from 'next/server';

import productRequests from '@/data/product-requests';
import { ProductRequest } from '@/types';
import { getCommentCount } from '@/utils';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const category = searchParams.get('category') ?? 'all';
  const sort = searchParams.get('sort') ?? 'upvotes';
  const asc = searchParams.get('asc') !== null; // true if 'asc' is present regardless of the value

  // accept a comma-separated string of status values, e.g., 'exclude=suggestion,planned'
  // excludes items with a status of 'suggestion' or 'planned'. only works if category is
  // null or 'all'
  const exclude = searchParams.get('exclude');

  let filtered = productRequests;

  if (category !== 'all') {
    filtered = filtered.filter((p) => p.category === category);
  } else if (exclude) {
    filtered = filtered.filter((p) => {
      const excludedStatuses = exclude.split(',');
      return !excludedStatuses.includes(p.status);
    });
  }

  if (filtered.length === 0) {
    return Response.json(filtered);
  }

  let sorted: (Omit<ProductRequest, 'comments'> & { comments: number })[];

  // simplify comments from an array of comment objects to an integer of comment count
  sorted = filtered.map((item) => ({ ...item, comments: getCommentCount(item.comments) }));

  // only sort if the filtered array has two or more items
  if (sorted.length >= 2) {
    if (sort === 'upvotes') {
      sorted.sort((a, b) => (asc ? a.upvotes - b.upvotes : b.upvotes - a.upvotes));
    } else if (sort === 'comments') {
      sorted.sort((a, b) => (asc ? a.comments - b.comments : b.comments - a.comments));
    } else {
      return new Response(JSON.stringify({ error: 'Invalid sort field' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  return Response.json(sorted);
}
