import TitleWithLink from './title-with-link';

interface FeedbackTitleProps {
  id: number;
  title: string;
  withLink: boolean;
}

export default function FeedackTitle({ id, title, withLink }: FeedbackTitleProps) {
  const TitleTag = withLink ? 'h3' : 'h1';

  return (
    <TitleTag className="mb-2.25 text-[13px] font-bold tracking-[-0.18px] @sm:col-2 @xl:mb-1 @xl:text-[18px] @xl:tracking-[-0.25px]">
      {withLink ? <TitleWithLink href={`/feedback/${id}`} title={title} /> : title}
    </TitleTag>
  );
}
