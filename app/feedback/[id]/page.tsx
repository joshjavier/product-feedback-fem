import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import CommentsList from '@/components/comments-list';
import { getCommentsByProductRequestId, getProductRequestById } from '@/lib/data/product-requests';

export default async function FeedbackPage({ params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  const feedback = await getProductRequestById(id);
  const commentsPromise = getCommentsByProductRequestId(id);

  if (!feedback) {
    notFound();
  }

  return (
    <>
      <h1>Feedback {id}</h1>
      <Link href={`/feedback/${id}/edit`}>Edit Feedback</Link>

      <div>
        <p>{feedback.title}</p>
        <p>{feedback.description}</p>
        <p>{feedback.category}</p>
        <p>Upvotes: {feedback.upvotes}</p>
        <p>Comments: {feedback.comments}</p>
      </div>

      <div>
        <h2>{feedback.comments} Comments</h2>
        <Suspense fallback={<div>Loading comments...</div>}>
          <CommentsList commentsPromise={commentsPromise} />
        </Suspense>
      </div>
    </>
  );
}
