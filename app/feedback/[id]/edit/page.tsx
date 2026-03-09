export default async function EditFeedbackPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <h1>Edit Feedback {id}</h1>;
}
