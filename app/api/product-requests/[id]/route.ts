import { NextRequest } from 'next/server';

import productRequests from '@/data/product-requests';

export async function GET(_req: NextRequest, ctx: RouteContext<'/api/product-requests/[id]'>) {
  const id = Number((await ctx.params).id);

  if (isNaN(id)) {
    return new Response('Product Request Not Found', { status: 404 });
  }

  const productRequest = productRequests.find((p) => p.id === id);

  if (!productRequest) {
    return new Response('Product Request Not Found', { status: 404 });
  }

  return Response.json(productRequest);
}
