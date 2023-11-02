'use client';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';

import { userProfileInfoAtom } from '@/store/mypage.atoms';

import { MypageCommonStory } from '../MypageCommonStory/MypageCommonStory';

export const BestTravelStories = () => {
  const { bestRecordStories } = useAtomValue(userProfileInfoAtom);
  const router = useRouter();

  console.log(bestRecordStories);

  const handleMoveToDetail = (id) => {
    router.push(`/mypage/my_story/${id}?page=record`);
  };

  return (
    <div className='mb-10 mt-10 flex w-full flex-col items-start justify-center'>
      <div className='text-[15px] font-bold'>인기 스토리</div>
      <div className='border-primaryGray-300 mb-6 w-full flex-wrap border-t-[1px]'></div>
      <div className='flex flex-wrap gap-12'>
        {bestRecordStories ? (
          bestRecordStories.map((bestRecord) => (
            <MypageCommonStory
              key={bestRecord.id}
              handleMoveToDetail={handleMoveToDetail}
              story={bestRecord}
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
