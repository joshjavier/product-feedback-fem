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
      <div className="@sm:grid @sm:grid-cols-[max-content_1fr_max-content] @sm:grid-rows-[auto_auto_auto] @sm:items-start @sm:justify-items-start">
        <TitleTag className="mb-2.25 @sm:col-2 @xl:mb-1">
          <Link
            href={`/feedback/${feedback.id}`}
            className="hover:text-secondary-500 text-[13px] font-bold tracking-[-0.18px] @xl:text-[18px] @xl:tracking-[-0.25px]"
          >
            {feedback.title}
          </Link>
        </TitleTag>

        <p className="text-secondary-700 mb-2 @sm:col-2 @xl:mb-3 @xl:text-[16px]">
          {feedback.description}
        </p>

        <CategoryPill category={feedback.category} className="mb-4 @sm:col-2 @sm:mb-0" />

        <div className="flex items-center justify-between @sm:contents">
          <UpvoteButton
            upvotes={feedback.upvotes}
            className="@sm:col-1 @sm:row-span-full @sm:mr-10"
          />
          <CommentCount
            comments={feedback.comments}
            className="@sm:col-3 @sm:row-span-full @sm:ml-6.25 @sm:self-center"
          />
        </div>
      </div>
    </article>
  );
}
