import Link from 'next/link';

import { ProductRequest } from '@/types';

import CategoryPill from './category-pill';
import CommentCount from './comment-count';
import UpvoteButton from './upvote-button';

interface FeedbackCardProps {
  feedback: Omit<ProductRequest, 'status' | 'comments'> & {
    comments: number;
    status?: string;
  };
  titleTag?: 'h1' | 'h3';
}

export default function FeedbackCard({ feedback, titleTag = 'h3' }: FeedbackCardProps) {
  const TitleTag = titleTag;

  return (
    <article className="@container rounded-[10px] bg-white p-6 text-[13px]">
      <TitleTag className="mb-2.25">
        <Link
          href={`/feedback/${feedback.id}`}
          className="hover:text-secondary-500 text-[13px] font-bold tracking-[-0.18px]"
        >
          {feedback.title}
        </Link>
      </TitleTag>
      <p className="text-secondary-700 mb-2">{feedback.description}</p>
      <CategoryPill category={feedback.category} className="mb-4" />
      <div className="flex items-center justify-between">
        <UpvoteButton upvotes={feedback.upvotes} />
        <CommentCount comments={feedback.comments} />
      </div>
    </article>
  );
}
