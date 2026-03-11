import { cache } from 'react';

import { ProductRequest } from '@/types';
import { getCommentCount } from '@/utils';

export const getProductRequestById = cache(async (id: number) => {
  if (isNaN(id)) return;

  const res = await fetch(`${process.env.NEXTAPP_URL}/api/product-requests/${id}`);
  if (!res.ok) return;

  const { comments, ...productRequest } = (await res.json()) as ProductRequest;
  return { ...productRequest, comments: getCommentCount(comments) } as Omit<
    ProductRequest,
    'comments'
  > & { comments: number };
});

export const getCommentsByProductRequestId = cache(async (id: number) => {
  if (isNaN(id)) return;

  const res = await fetch(`${process.env.NEXTAPP_URL}/api/product-requests/${id}`);
  if (!res.ok) return;

  const { comments } = (await res.json()) as ProductRequest;
  return comments ?? [];
});
