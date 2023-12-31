'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { recordStoriesMock } from '@/app/(needLogin)/mypage/my_story/record/_mocks/recordStoriesMock';
import { CommonStory, Pagination } from '@/components';

const OthenrStoryList: React.FC = () => {
  const [storyList, setStoryList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(4);
  const router = useRouter();

  const startIdx = currentPage * itemsPerPage;

  const endIdx = (currentPage + 1) * itemsPerPage;

  const getStoryList = async () => {
    try {
      const res = await fetch('/api/othersStories');
      const data = await res.json();

      console.log(data.data);

      setStoryList(data.data);
    } catch (error) {
      console.log('에러', error);
    }
  };

  console.log(storyList);

  useEffect(() => {
    getStoryList();
  }, []);

  return (
    <>
      <div className='m-auto mt-[-147px] h-[800px] w-[1024px] border  shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'>
        <div className='m-auto mt-[150px] grid w-[950px] grid-cols-2  '>
          {storyList.slice(startIdx, endIdx).map((story) => (
            <CommonStory
              story={story}
              key={Math.random() * 1000}
              handleMoveToDetail={() =>
                router.push(`/story_detail/${story.id}`)
              }
            />
          ))}
        </div>
        <div className='ml-[393px] mt-[30px] h-[100px] w-full'>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            dataLength={recordStoriesMock.length}
            bgColor='gray'
          />
        </div>
      </div>
    </>
  );
};

export default OthenrStoryList;
