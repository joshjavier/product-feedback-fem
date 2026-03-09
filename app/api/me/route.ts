import currentUser from '@/data/current-user';

export async function GET(_req: Request) {
  return Response.json(currentUser);
}
