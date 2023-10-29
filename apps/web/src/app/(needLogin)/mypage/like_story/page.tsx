'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from 'ui';

import { Tab } from '@/components';
import { likeStoryConfig } from '@/constants';
import materialIcon from '@/utils/materialIcon';

import { MyPageContainer } from '../_components';
import { ViewStory } from './_components';
import { LikeStory } from './_components/LikesStory/LikesStory';

const LikeStoryPage = () => {
  const params = useSearchParams();
  const filter = params.get('filter');

  return (
    <div>
      <div className='ml-5 mt-10 flex w-full items-end justify-end space-x-[-30px]'>
        {likeStoryConfig.map((path, index) => {
          const isSelected =
            filter === path.query || (!filter && path.tabName === 'LIKES');
          const isLikes = path.tabName === 'LIKES';

          return (
            <Tab
              key={index}
              bgColor={isSelected ? 'white' : 'primaryGray-200'}
              zIndex={isSelected ? '10' : '0'}
            >
              <Link
                href={
                  isLikes
                    ? '/mypage/like_story'
                    : `/mypage/like_story?filter=${path.query}`
                }
              >
                {/* <div className='flex items-center'> */}
                {materialIcon({
                  iconName: isLikes ? 'favorite' : 'visibility',
                  size: 16,
                })}
                {path.tabName}
                {/* </div> */}
              </Link>
            </Tab>
          );
        })}
      </div>
      <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
        <MyPageContainer title='관심 스토리'>
          <div className='px-12'>
            <div className='my-5 flex items-center'>
              <p className='text-primaryBlue-default ml-5 mr-4 text-lg'>
                최신순
              </p>
              <Button variant='lightblue' weight='bold'>
                정렬 및 필터
              </Button>
            </div>
            {filter ? <ViewStory /> : <LikeStory />}
          </div>
        </MyPageContainer>
      </div>
    </div>
  );
};

export default LikeStoryPage;
