import Link from 'next/link';

import IllustrationEmpty from '@/assets/suggestions/illustration-empty.svg';

export default function FeedbackCardEmpty() {
  return (
    <article className="flex flex-col items-center justify-center rounded-[10px] bg-white px-6 py-19 text-center md:min-h-150">
      <IllustrationEmpty
        aria-hidden="true"
        focusable="false"
        className="mb-9.75 w-25.5 md:mb-[53.26px] md:w-[129.64px]"
      />
      <h3 className="mb-3.5 text-[18px] font-bold tracking-[-0.25px] md:mb-4 md:text-[24px] md:tracking-[-0.33px]">
        There is no feedback yet.
      </h3>
      <p className="text-secondary-700 mb-6 max-w-102.5 text-[13px] md:mb-12 md:text-[16px]">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to
        improve our app.
      </p>
      <Link
        href="/feedback/new"
        className="bg-primary-500 text-secondary-200 hover:not-disabled:bg-primary-400 flex min-h-10 shrink-0 items-center justify-center gap-1 rounded-[10px] px-4 py-2.5 text-[13px] font-bold transition-colors md:min-h-11 md:px-6 md:text-[14px]"
      >
        <span aria-hidden="true">+</span> Add Feedback
      </Link>
    </article>
  );
}
