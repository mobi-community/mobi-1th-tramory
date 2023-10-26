import { recommendPageConfig } from '@/constants';

import { ContinentSlide, ReadMoreButton } from './_components';

const RecommendCountryPage: React.FC = () => {
  return (
    <div>
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

export default RecommendCountryPage;
