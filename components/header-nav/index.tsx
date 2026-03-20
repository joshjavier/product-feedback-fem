import { getCategories } from '@/lib/data/categories';

import CategoryPicker from '../category-picker';
import ResponsiveElements from './responsive-elements';
import RoadmapOverview from './roadmap-overview';
import TitleCard from './title-card';

export default async function HeaderNav() {
  const categories = await getCategories();

  return (
    <header className="md:max-lg:p-10 md:max-lg:pt-14">
      <div className="flex gap-x-2.5 gap-y-6 md:grid md:min-h-44.5 md:max-lg:grid-cols-3 lg:w-63.75">
        <TitleCard />
        <ResponsiveElements>
          <CategoryPicker categories={categories} />
          <RoadmapOverview />
        </ResponsiveElements>
      </div>
    </header>
  );
}
