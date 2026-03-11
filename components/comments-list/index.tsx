'use client';

import { use } from 'react';

import { Comment } from '@/types';

export default function CommentsList({
  commentsPromise,
}: {
  commentsPromise: Promise<Comment[] | undefined>;
}) {
  const comments = use(commentsPromise);

  return (
    <ul>
      {(comments ?? []).map((comment) => (
        <li key={comment.id}>
          <img src={comment.user.image} width={40} height={40} alt="" />
          <p>{comment.user.name}</p>
          <p>{comment.user.username}</p>
          <p>{comment.content}</p>
        </li>
      ))}
    </ul>
  );
}
