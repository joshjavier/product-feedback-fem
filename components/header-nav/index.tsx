import { getCategories } from '@/lib/data/categories';

import CategoryPicker from '../category-picker';
import RoadmapOverview from './roadmap-overview';
import TitleCard from './title-card';

export default async function HeaderNav() {
  const categories = await getCategories();

  return (
    <header className="md:max-lg:p-10 md:max-lg:pt-14">
      <div className="flex gap-x-2.5 gap-y-6 md:grid md:min-h-44.5 md:max-lg:grid-cols-3 lg:w-63.75">
        <TitleCard />
        <div className="bg-secondary-100 absolute top-(--header-height) right-0 flex h-[calc(100vh-var(--header-height))] max-w-67.75 flex-col gap-6 p-6 md:contents">
          <CategoryPicker categories={categories} />
          <RoadmapOverview />
        </div>
      </div>
    </header>
  );
}
