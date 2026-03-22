import { ComponentPropsWithRef } from 'react';

import IconComments from '@/assets/shared/icon-comments.svg';

interface CommentCountProps extends ComponentPropsWithRef<'div'> {
  comments: number;
}

export default function CommentCount({ comments, className, ...props }: CommentCountProps) {
  return (
    <div
      className={[
        'flex items-center gap-2 text-[13px] font-bold tracking-[-0.18px] @xl:text-[16px] @xl:tracking-[-0.22px]',
        className,
      ].join(' ')}
      {...props}
    >
      <IconComments aria-hidden="true" focusable={false} />
      <span className={comments === 0 ? 'opacity-50' : undefined}>{comments}</span>
    </div>
  );
}
