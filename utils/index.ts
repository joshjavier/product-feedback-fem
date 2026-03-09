import { Comment } from '@/types';

/**
 * Returns the total number of comments, including replies
 */
export function getCommentCount(comments: Comment[] | undefined) {
  return (comments ?? []).reduce((total, comment) => {
    let count = total + 1;
    if (comment.replies) {
      count = count + comment.replies.length;
    }
    return count;
  }, 0);
}
