import React from 'react';

import { CategoryTab, SearchBar, StoryList, Title } from './_components';

const StoryCommunityPage: React.FC = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <div className='mr-[200px] flex justify-end pt-[30px]'>
        <Title />
        <SearchBar />
      </div>
      <CategoryTab />
      <StoryList />
    </div>
  );
};

export default StoryCommunityPage;
