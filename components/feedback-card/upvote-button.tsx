'use client';

import { ComponentPropsWithRef, useState } from 'react';

import IconArrowUp from '@/assets/shared/icon-arrow-up.svg';

interface UpvoteButtonProps extends ComponentPropsWithRef<'button'> {
  upvotes: number;
}

export default function UpvoteButton({ upvotes, className, ...props }: UpvoteButtonProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      type="button"
      className={[
        'bg-secondary-200 text-secondary-800 hover:not-disabled:not-aria-pressed:bg-secondary-300 aria-pressed:bg-secondary-500 group inline-flex min-h-8 min-w-17.25 cursor-pointer items-center gap-1.5 rounded-[10px] p-1.5 pr-3.25 pl-4 text-center text-[13px] font-bold tracking-[-0.18px] transition-colors aria-pressed:text-white @sm:min-h-13.25 @sm:min-w-10 @sm:flex-col @sm:justify-between @sm:px-1.5 @sm:pt-3.25 @sm:pb-2',
        className,
      ].join(' ')}
      aria-pressed={pressed}
      onClick={() => setPressed((p) => !p)}
      {...props}
    >
      <IconArrowUp
        aria-hidden="true"
        focusable="false"
        className="not-group-aria-pressed:text-secondary-500"
      />
      <span className="mx-auto">{upvotes}</span>
    </button>
  );
}
