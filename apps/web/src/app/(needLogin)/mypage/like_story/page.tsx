'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Button } from 'ui';

import { Tab } from '@/components';
import { likeStoryConfig } from '@/constants';

import { MyPageContainer } from '../_components';
import { SortingModal, ViewStory } from './_components';
import { LikeStory } from './_components/LikesStory/LikesStory';

const LikeStoryPage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const filter = params.get('filter');
  const [isToggleModal, setIsToggleModal] = useState(false);

  const handleSortingModal = () => {
    setIsToggleModal((prev: boolean) => !prev);
  };

  return (
    <div>
      {isToggleModal && <SortingModal setIsToggleModal={setIsToggleModal} />}
      <div className='ml-5 mt-10 flex w-full items-end justify-end space-x-[-30px]'>
        {likeStoryConfig.map((path, index) => {
          const isSelected =
            filter === path.query || (!filter && path.tabName === 'LIKES');
          const isLikes = path.tabName === 'LIKES';
          const handleNavigation = () => {
            router.push(
              isLikes
                ? '/mypage/like_story'
                : `/mypage/like_story?filter=${path.query}`
            );
          };

          return (
            <Tab
              key={index}
              bgColor={isSelected ? 'white' : 'primaryGray-200'}
              zIndex={isSelected ? '10' : '0'}
              handleClickTab={handleNavigation}
            >
              {path.tabName}
              {/* icon을 넣으면 Tab의 p태그 children hydration 에러가 남. Tab부분을 수정해야할 거 같음 */}
              {/* <div className='flex items-center' onClick={handleNavigation}>
                {materialIcon({
                  iconName: isLikes ? 'favorite' : 'visibility',
                  size: 16,
                  style: 'mr-1',
                })}
                {path.tabName}
              </div> */}
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
              <Button
                variant='lightblue'
                weight='bold'
                onClick={handleSortingModal}
              >
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
