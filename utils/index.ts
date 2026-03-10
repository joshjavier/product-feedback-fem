import { Comment } from '@/types';

/**
 * Returns the total number of comments, including replies.
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

/**
 * Returns the first string from a string, array of strings, or undefined.
 * @param value - A string, array of strings, or undefined
 * @returns The string itself, the first element of the array, or undefined
 */
export function getFirstString(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0];
  return value;
}
