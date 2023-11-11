'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

import { CategoryTab, SearchBar, StoryList, Title } from './_components';
import { useStoryCommunity } from './_hooks/useStoryCommunity';

const StoryCommunityPage: React.FC = () => {
  const url = useSearchParams();

  const category = url.get('category');
  const { setSelectedCategory } = useStoryCommunity();

  useEffect(() => {
    setSelectedCategory(category);
  }, [category, setSelectedCategory]);

  return (
    <div className='m-auto w-[1100px] overflow-x-hidden'>
      <div className='flex justify-center pt-[30px]'>
        <Title />
        <SearchBar />
      </div>
      <CategoryTab />
      <StoryList />
    </div>
  );
};

export default StoryCommunityPage;
