import { Button } from 'ui';

import { useIndiviualToggle } from '@/hooks/useIndiviualToggle';
import { isIndividualToggleAtom } from '@/store';

import type { InquiryDataProps } from './OneInquiryHistory.types';

export const OneInquiryHistory = ({ data }: InquiryDataProps) => {
  const { toggleState: isIndividualToggle, handleToggle } = useIndiviualToggle(
    isIndividualToggleAtom,
    data.id
  );

  return (
    <div className='flex flex-col justify-between'>
      <div className='bg-primaryGray-300 h-px w-full'></div>
      <div
        onClick={handleToggle}
        className='flex cursor-pointer justify-between p-7'
      >
        <div className='flex items-center'>
          <h1 className='mr-10 font-bold'>{data.id}</h1>
          <div>
            <p className='text-sm'>{data.category}</p>
            <p className='font-medium'>{data.title}</p>
          </div>
        </div>
        <div className='text-right text-sm'>
          <p>문의일자 | {data.date}</p>
          {data.answerState ? (
            <p className='text-primaryBlue-default font-medium'>답변 완료</p>
          ) : (
            <p className='font-medium text-rose-600'>답변 대기</p>
          )}
        </div>
      </div>
      <div className='w-fill bg-primaryGray-300 h-px'></div>
      {isIndividualToggle && (
        <div className='bg-primaryBlue-100'>
          <div className='flex items-center justify-between px-8 pt-8'>
            <h1 className='font-medium'>{data.title}</h1>
            {!data.answerState && (
              <div>
                <Button className='h-[30px] px-7' variant='roundednavy'>
                  수정
                </Button>
                <Button className='ml-2 h-[30px] px-7' variant='roundednavy'>
                  삭제
                </Button>
              </div>
            )}
          </div>
          <div className='w-fill bg-primaryGray-300 my-[30px] h-px'></div>
          <p
            className='px-8 pb-8'
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          {data.attachment !== '' && (
            <p className='px-8 pb-8 text-sm'>
              첨부파일
              {/* 첨부파일 다운받는 로직으로 추후 수정 */}
              <span className='ml-5 font-bold hover:underline hover:decoration-solid'>
                {data.attachment}
              </span>
            </p>
          )}
          {Object.keys(data.comment).length > 0 && (
            <div className='mx-8 mb-8 bg-white p-8'>
              <h1 className='font-bold'>{data.comment.administrator}</h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: data.comment.description,
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
