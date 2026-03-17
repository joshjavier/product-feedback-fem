import Link from 'next/link';

import { getRoadmapStats } from '@/lib/data/roadmap';

export default async function RoadmapOverview() {
  const { count } = await getRoadmapStats();

  return (
    <div className="rounded-[10px] bg-white p-6 pt-4.75">
      <div className="flex items-center justify-between">
        <h2 className="text-[18px] font-bold tracking-[-0.25px]">Roadmap</h2>
        <Link
          href="/roadmap"
          className="text-secondary-500 hover:text-secondary-400 text-[13px] font-semibold underline transition-colors"
        >
          View
        </Link>
      </div>
      <ul className="mt-6 flex flex-col gap-2">
        <li className="flex items-center gap-4">
          <span className="bg-tertiary h-2 w-2 rounded-full" />
          Planned
          <strong className="ml-auto">{count['planned'] ?? 0}</strong>
        </li>
        <li className="flex items-center gap-4">
          <span className="bg-primary-500 h-2 w-2 rounded-full" />
          In-Progress
          <strong className="ml-auto">{count['in-progress'] ?? 0}</strong>
        </li>
        <li className="flex items-center gap-4">
          <span className="bg-quaternary h-2 w-2 rounded-full" />
          Live
          <strong className="ml-auto">{count['live'] ?? 0}</strong>
        </li>
      </ul>
    </div>
  );
}
