'use client';

import { useAtom, useAtomValue } from 'jotai';
import Link from 'next/link';
import { Button } from 'ui';

import { CommonStory, Pagination } from '@/components';
import { storyCommunityPageConfig } from '@/constants';
import {
  searchKeywordAtom,
  selectedCategoryAtom,
  storyCommunityAtoms,
} from '@/store';

import { storyMock } from '../../_mocks';

export const StoryList: React.FC = () => {
  const [currentPage, setCurrentPage] = useAtom(
    storyCommunityAtoms.storyPageAtom
  );

  const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom);

  const searchKeyword = useAtomValue(searchKeywordAtom);

  const searchedArray = searchKeyword
    ? storyMock.filter(
        (story) =>
          story.content.title.includes(searchKeyword) ||
          story.content.text.includes(searchKeyword) ||
          story.content.tags.some((tag) => tag.includes(searchKeyword)) ||
          story.user.userId.includes(searchKeyword)
      )
    : storyMock;

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
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
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
