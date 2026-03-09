export default async function FeedbackPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <h1>Feedback {id}</h1>;
}
