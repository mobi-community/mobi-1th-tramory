'use client';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';

import { CommonStory } from '@/components';
import { userRecordStoriesAtom } from '@/store/mypage.atoms';

export const BestTravelStories = () => {
  const bestRecordStories = useAtomValue(userRecordStoriesAtom);
  const router = useRouter();

  const handleMoveToDetail = (id: string) => {
    router.push(`/mypage/my_story/${id}?page=record`);
  };

  return (
    <div className='mt-12 flex w-full flex-col items-start justify-center'>
      <div className='text-[18px] font-bold'>인기 스토리</div>
      <div className='border-primaryGray-300 mb-6 w-full flex-wrap border-t-[1px]'></div>
      <div className='flex flex-wrap gap-12'>
        {bestRecordStories ? (
          bestRecordStories.map((story) => (
            <CommonStory
              story={story}
              key={Math.random() * 1000}
              handleMoveToDetail={handleMoveToDetail}
            />
          ))
        ) : (
          <div className='mb-[70px] mt-10 flex w-full items-center justify-center font-bold'>
            <div>여행 스토리를 등록해보세요!</div>
          </div>
        )}
      </div>
    </div>
  );
};
