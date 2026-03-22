import { ProductRequest } from '@/types';

import CategoryPill from './category-pill';
import CommentCount from './comment-count';
import FeedackTitle from './feedback-title';
import UpvoteButton from './upvote-button';

interface FeedbackCardProps {
  feedback: Omit<ProductRequest, 'status' | 'comments'> & {
    comments: number;
    status?: string;
  };
  withLink?: boolean;
}

export default function FeedbackCard({ feedback, withLink = true }: FeedbackCardProps) {
  return (
    <article className="focus-within:ring-secondary-500 @container relative cursor-pointer rounded-[10px] bg-white text-[13px] transition-shadow focus-within:ring-4">
      <div className="p-6 @sm:grid @sm:grid-cols-[max-content_1fr_max-content] @sm:grid-rows-[auto_auto_auto] @sm:items-start @sm:justify-items-start @xl:px-8 @xl:py-7">
        <FeedackTitle id={feedback.id} title={feedback.title} withLink={withLink} />

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
