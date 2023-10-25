import React from 'react';

import { CategoryTab, SearchBar, StoryList, Title } from './_components';

const StoryCommunityPage: React.FC = () => {
  return (
    <div>
      <div className='mr-[130px] flex justify-end pt-[30px]'>
        <Title />
        <SearchBar />
      </div>
      <CategoryTab />
      <StoryList />
    </div>
  );
};

export default StoryCommunityPage;
