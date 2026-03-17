import { getCategories } from '@/lib/data/categories';

import CategoryPicker from '../category-picker';
import RoadmapOverview from './roadmap-overview';
import TitleCard from './title-card';

export default async function HeaderNav() {
  const categories = await getCategories();

  return (
    <header className="md:p-10 md:pt-14">
      <div className="md:grid md:min-h-44.5 md:grid-cols-3 md:gap-2.5">
        <TitleCard />
        <CategoryPicker categories={categories} />
        <RoadmapOverview />
      </div>
    </header>
  );
}
