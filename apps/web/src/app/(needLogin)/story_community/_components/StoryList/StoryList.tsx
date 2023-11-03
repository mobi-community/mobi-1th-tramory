'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { Button } from 'ui';

import { CommonStory, Pagination } from '@/components';
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
  } = useStoryCommunity();

  useEffect(() => {
    try {
      fetch(`/story/story_list/${storyPage + ''}`)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          console.log('데이터 연결 완료');
          setStoryData(data.data);
        });
    } catch (error) {
      console.error(error, '스토리 데이터를 불러오는 데 실패하였습니다.🥲');
    }
  }, [setStoryData, storyPage]);

  const searchedArray = searchKeyword
    ? storyData.filter(
        (story) =>
          story.content.title.includes(searchKeyword) ||
          story.content.text.includes(searchKeyword) ||
          story.content.tags.some((tag: string) =>
            tag.includes(searchKeyword)
          ) ||
          story.user.userId.includes(searchKeyword)
      )
    : storyData;

  const filteredStoryArray =
    selectedCategory && selectedCategory !== '전체'
      ? searchedArray.filter(
          (story) => story.content.category === selectedCategory
        )
      : searchedArray;

  const HaveData = (
    <div>
      <div className='m-auto grid grid-cols-2 gap-8 gap-x-[5%]'>
        {filteredStoryArray.map((story) => (
          <CommonStory story={story} key={Math.random() * 1000} />
        ))}
      </div>
      <div className='mt-[80px] flex h-[100px] justify-center'>
        <Pagination
          currentPage={storyPage}
          setCurrentPage={setStoryPage}
          itemsPerPage={10}
          testData={100}
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
