'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from 'ui';

import { CommonStory, Pagination } from '@/components';
import { StoryType } from '@/components/CommonStory/CommonStory.types';
import { storyCommunityPageConfig } from '@/constants';

import { useStoryCommunity } from '../../_hooks/useStoryCommunity';

export const StoryList: React.FC = () => {
  const {
    storyData,
    setStoryData,
    selectedCategory,
    setSelectedCategory,
    storyPage,
    setStoryPage,
    searchKeyword,
    // total,
    // setTotal,
  } = useStoryCommunity();

  useEffect(() => {
    const fetchStoryList = async () => {
      try {
        const response = await fetch(`/story/storypage/${storyPage}`);

        const data = await response.json();

        if (response.ok) {
          setStoryData(data.data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('스토리 목록을 가져오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchStoryList();
    // eslint fix
  }, [setStoryData, storyPage]);

  const searchedArray: StoryType[] = searchKeyword
    ? storyData?.filter(
        (story) =>
          story.content.title.includes(searchKeyword) ||
          story.content.text.includes(searchKeyword) ||
          story.content.tags.some((tag: string) =>
            tag.includes(searchKeyword)
          ) ||
          story.user.userId.includes(searchKeyword)
      )
    : storyData;

  const filteredStoryArray: StoryType[] =
    selectedCategory && selectedCategory !== '전체'
      ? searchedArray?.filter(
          (story) => story.content.category === selectedCategory
        )
      : searchedArray;

  const router = useRouter();

  const HaveData = (
    <div>
      <div className='m-auto grid grid-cols-2 gap-8 gap-x-[10%]'>
        {filteredStoryArray?.map((story) => (
          <CommonStory
            story={story}
            key={Math.random() * 1000}
            handleMoveToDetail={() => router.push(`/story_detail/${story.id}`)}
          />
        ))}
      </div>
      <div className='mt-[80px] flex h-[100px] justify-center'>
        <Pagination
          currentPage={storyPage}
          setCurrentPage={setStoryPage}
          itemsPerPage={10}
          dataLength={100}
          bgColor='gray'
        />
      </div>
    </div>
  );

  const handleClearCategory = () => setSelectedCategory('전체');

  const NotHaveData = (
    <div className='text-center'>
      <div className='my-20 text-xl font-bold'>
        {storyCommunityPageConfig.noDataText}
      </div>
      <Link href={'./story_community'} onClick={handleClearCategory}>
        <Button>{storyCommunityPageConfig.noDataButtonText}</Button>
      </Link>
    </div>
  );

  return (
    <div className='relatve'>
      <div className='flex justify-center'>
        {filteredStoryArray.length ? HaveData : NotHaveData}
      </div>
    </div>
  );
};
