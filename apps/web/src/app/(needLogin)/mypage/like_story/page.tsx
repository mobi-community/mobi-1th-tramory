'use client';
import { useSetAtom } from 'jotai';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { Tab } from '@/components';
import { likeStoryConfig } from '@/constants';
import { selectTabAtom } from '@/store/tab.atoms';

import { MyPageContainer } from '../_components';
import { ViewStory } from './_components';
import { LikeStory } from './_components/LikesStory/LikesStory';

const LikeStoryPage = () => {
  // const router = useRouter();
  const params = useSearchParams();
  const filter = params.get('filter') || '';
  const selectTab = useSetAtom(selectTabAtom);

  useEffect(() => {
    selectTab(filter);
  }, [selectTab, filter]);

  return (
    <div>
      <div className='ml-5 mt-10 flex w-full items-end justify-end space-x-[-30px]'>
        {likeStoryConfig.map((config, index) => (
          <div key={index}>
            <Tab slug={config.query}>{config.slug}</Tab>
          </div>
        ))}
      </div>
      <div className='text-primaryBlue-700 mb-14 ml-10 flex w-full flex-col items-center justify-center'>
        <MyPageContainer title='관심 스토리'>
          <div className='px-12'>
            {filter === 'views' ? <ViewStory /> : <LikeStory />}
          </div>
        </MyPageContainer>
      </div>
    </div>
  );
};

export default LikeStoryPage;
