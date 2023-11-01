import { useAtomValue } from 'jotai';

import { CommonStory } from '@/components';
import { userProfileInfoAtom } from '@/store/mypage.atoms';

export const BestTravelStories = () => {
  const { bestRecordStories } = useAtomValue(userProfileInfoAtom);

  console.log(bestRecordStories);

  return (
    <div className='mt-10 flex w-full flex-col items-start justify-center'>
      <div className='text-[15px] font-bold'>인기 스토리</div>
      <div className='border-primaryGray-300 mb-6 w-full border-t-[1px]'></div>
      {bestRecordStories ? (
        bestRecordStories.map((bestRecord) => (
          <CommonStory key={bestRecord.id} story={bestRecord} />
        ))
      ) : (
        <>
          <div className='mb-[70px] mt-10 flex w-full items-center justify-center font-bold'>
            <div>여행 스토리를 등록해보세요!</div>
          </div>
        </>
      )}
    </div>
  );
};
