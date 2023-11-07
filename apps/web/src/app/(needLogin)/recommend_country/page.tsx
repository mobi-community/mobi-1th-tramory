'use client';

import { recommendPageConfig } from '@/constants';

import { ContinentSlide } from './_components';

const RecommendCountryPage: React.FC = () => {
  return (
    <div className='m-auto max-h-[calc(100vh-20px)] w-[1100px]'>
      <div className='no-scroll mt-[80px] overflow-x-hidden text-center'>
        <div className='relative'>
          <div className='relative z-50 text-[28px] font-bold'>
            {recommendPageConfig.titleText}
          </div>
          <div className='z-1 bg-primaryYellow absolute left-1/2 top-2 h-[30px] w-[210px] -translate-x-1/2 -rotate-3 transform'></div>
        </div>
        <div className={`m-auto mt-[0px] w-[80%]`}>
          {recommendPageConfig.continentsArray.map((continent) => (
            <ContinentSlide continent={continent} key={continent.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendCountryPage;
