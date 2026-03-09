export async function GET(_req: Request) {
  const categories = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

  return Response.json(categories);
}
