'use client';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Checkbox } from 'ui';

import { Pagination } from '@/components';
import { userPlanStoriesAtom } from '@/store/mypage.atoms';

import { MyPageContainer } from '../../_components';
import { MyStoryPlanCard, Tabs } from '../_components';

const MyStoryPlanPage = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [planStories, setPlanStories] = useAtom(userPlanStoriesAtom);

  useEffect(() => {
    const fetchUserPlanStories = async () => {
      try {
        const response = await fetch('/user/my_story/plan');

        const data = await response.json();

        if (response.ok) {
          setPlanStories(data.data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('사용자 정보를 가져오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchUserPlanStories();
    // eslint fix
  }, [setPlanStories]);

  const handleMoveToDetail = (id) => {
    router.push(`/mypage/my_story/${id}?page=plan&isEdit=true`);
  };
  const dataLength = planStories.length;

  return (
    <div className='text-primaryBlue-700 mb-14 ml-10 flex w-full flex-col items-center justify-center'>
      <Tabs />
      <MyPageContainer title='나의 스토리 - 여행 계획'>
        <div className='mt-7 flex items-center px-12 text-[13px]'>
          <Checkbox id='planAll' />
          <div className='ml-2 font-semibold'>지난 계획 모아보기</div>
        </div>
        <div className='flex flex-row flex-wrap justify-between px-12 pb-12 '>
          {planStories.map((stories) => (
            <MyStoryPlanCard
              handleMoveToDetail={handleMoveToDetail}
              key={stories.id}
              planData={stories}
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

export default MyStoryPlanPage;
