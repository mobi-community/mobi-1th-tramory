import React from 'react';

import { CategoryTab, SearchBar, StoryList, Title } from './_components';

const StoryCommunityPage: React.FC = () => {
  return (
    <div className='w-full overflow-x-hidden'>
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
