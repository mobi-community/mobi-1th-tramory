import { Button } from 'ui';

import { MyStoryPlanCardProps } from './MyStoryPlanCard.types';

export const MyStoryPlanCard = ({
  planData,
  handleMoveToDetail,
}: MyStoryPlanCardProps) => {
  const { id, content, isRecord } = planData;

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        handleMoveToDetail(id);
      }}
      className={`${
        isRecord ? 'bg-primaryBlue-100' : 'bg-primaryGray-200'
      } mt-7 w-[440px] cursor-pointer rounded-[30px] p-6`}
    >
      <div className='flex justify-between'>
        <div className='text-[16px] font-semibold'>{content.title}</div>
        <Button
          className='text-primaryBlue-700 h-[22px] w-[55px] text-[11px]'
          variant='roundednavy'
          size='xsm'
        >
          삭제
        </Button>
      </div>
      <div className='border-primaryGray-300 my-2 w-full border-t-[1px]'></div>
      <div>
        <div className=' text-[12px]'>{content.location}</div>
        <div className=' text-[12px]'>{content.date}</div>
      </div>
      <div className='mt-5 flex items-center justify-center'>
        {isRecord ? (
          <Button
            variant='roundednavy'
            className='text-primaryBlue-700 hover:bg-primaryBlue-500 flex items-center justify-center rounded-3xl border-none bg-white text-[13px] font-semibold transition-all duration-300 hover:text-white'
          >
            상세 기록 보러가기
          </Button>
        ) : (
          <Button
            variant='roundednavy'
            className='bg-primaryBlue-700 hover:border-primaryGray-300 flex items-center justify-center rounded-3xl bg-opacity-70 text-[13px] font-semibold text-white transition-all duration-300 hover:border-opacity-70 hover:bg-opacity-40'
          >
            상세 기록 남기기
          </Button>
        )}
      </div>
    </div>
  );
};
