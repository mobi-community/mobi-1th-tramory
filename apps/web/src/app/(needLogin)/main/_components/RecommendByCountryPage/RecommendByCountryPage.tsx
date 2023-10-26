import { recommendPageConfig } from '@/constants';

import { ContinentSlide, ReadMoreButton } from './_components';

export const RecommendByCountryPage: React.FC = () => {
  return (
    <div className='min-h-[calc(100vh-80px)]'>
      <div className='m-auto w-[80%]'>
        {recommendPageConfig.continentsArray.map((continent) => (
          <ContinentSlide continent={continent} key={continent.id} />
        ))}
      </div>
      <div className='text-center'>
        <ReadMoreButton />
      </div>
    </div>
  );
};
