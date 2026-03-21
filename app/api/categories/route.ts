export async function GET(_req: Request) {
  const categories = [
    { value: 'ui', label: 'UI' },
    { value: 'ux', label: 'UX' },
    { value: 'enhancement', label: 'Enhancement' },
    { value: 'bug', label: 'Bug' },
    { value: 'feature', label: 'Feature' },
  ];

  return Response.json(categories);
}
