import Link from 'next/link';

import { ProductRequest } from '@/types';

interface FeedbackCardProps {
  feedback: Omit<ProductRequest, 'status' | 'comments'> & {
    comments: number;
    status?: string;
  };
}

export default function FeedbackCard({ feedback }: FeedbackCardProps) {
  return (
    <div className="border border-red-500">
      <Link href={`/feedback/${feedback.id}`}>{feedback.title}</Link>
      <div>{feedback.description}</div>
      <div>{feedback.category}</div>
      <div>{feedback.upvotes}</div>
      <div>{feedback.comments}</div>
    </div>
  );
}
