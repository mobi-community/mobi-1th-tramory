import React from 'react';

import { CommonStory } from '@/components';

import { storyMock } from './_mocks';

const StoryCommunityPage: React.FC = () => {
  return (
    <div>
      <div className='mb-[100px] text-center'>스토리 커뮤니티 페이지</div>
      <div className='ml-[150px] grid grid-cols-2'>
        {storyMock.map((story) => (
          <CommonStory story={story} key={Math.random() * 1000} />
        ))}
      </div>
    </div>
  );
};

export default StoryCommunityPage;
