import { ProductRequest } from '@/types';

export const getRoadmapStats = async () => {
  const res = await fetch(`${process.env.NEXTAPP_URL}/api/product-requests?exclude=suggestion`);
  const productRequests = (await res.json()) as (Omit<ProductRequest, 'comments'> & {
    comments: number;
  })[];

  const count: { [key: string]: number } = {};
  for (const productRequest of productRequests) {
    const status = productRequest.status;
    count[status] = (+count[status] || 0) + 1;
  }

  return { count };
};
