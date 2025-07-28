import SectionWrapper from '@/shared/ui/wrappers/SectionWrapper/SectionWrapper';
import AnimeSlider from '@/features/animeSlider/AnimeSlider';

import { popular_anime } from '@/shared/config/test/anime_items/popular';

const PopularSection = () => {
  

  return (
    <div>
      <SectionWrapper title='Советуем посмотреть'>
        <AnimeSlider animeList={popular_anime} />
      </SectionWrapper>
    </div>
  );
}

export default PopularSection;
