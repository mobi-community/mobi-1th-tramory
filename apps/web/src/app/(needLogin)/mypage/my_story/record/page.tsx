'use client';

import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Pagination } from '@/components';
import { userRecordStoriesAtom } from '@/store/mypage.atoms';

import { MypageCommonStory, MyPageContainer } from '../../_components';
import { Tabs } from '../_components';

const MyStoryRecordPage = () => {
  const [recordStories, setRecordStories] = useAtom(userRecordStoriesAtom);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const dataLength = recordStories.length;

  const router = useRouter();

  const handleMoveToDetail = (id) => {
    router.push(`/mypage/my_story/${id}?page=record`);
  };

  useEffect(() => {
    const fetchUserRecordStories = async () => {
      try {
        const response = await fetch('/user/my_story/record');

        const data = await response.json();

        if (response.ok) {
          setRecordStories(data.data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('사용자 정보를 가져오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchUserRecordStories();
  }, []);

  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <Tabs />
      <MyPageContainer title='나의 스토리 - 여행 기록'>
        <div className='flex flex-row flex-wrap justify-between px-12 pb-12 '>
          {recordStories.map((stories) => (
            <MypageCommonStory
              handleMoveToDetail={handleMoveToDetail}
              story={stories}
              key={stories.id}
            />
          ))}
        </div>
        <div className='flex w-full items-center justify-center p-7'>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            dataLength={dataLength}
            bgColor='gray'
          />
        </div>
      </MyPageContainer>
    </div>
  );
};

export default MyStoryRecordPage;
