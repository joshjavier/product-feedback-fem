import IconComments from '@/assets/shared/icon-comments.svg';

export default function CommentCount({ comments }: { comments: number }) {
  return (
    <div className="flex items-center gap-2 text-[13px] font-bold tracking-[-0.18px] md:text-[16px] md:tracking-[-0.22px]">
      <IconComments aria-hidden="true" focusable={false} />
      <span className={comments === 0 ? 'opacity-50' : undefined}>{comments}</span>
    </div>
  );
}
