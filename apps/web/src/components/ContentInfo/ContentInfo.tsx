'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Button } from 'ui';

export const ContentInfo = ({ dayData }) => {
  const [editState, setEditState] = useState({});
  const { day, isDayLocationData, isDayDescriptionData } = dayData;
  const params = useSearchParams();
  const isEdit = params.get('isEdit');
  const isEditPage = isEdit === 'true';

  const handleChangeEdit = (e) => {
    e.stopPropagation();
    setEditState((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  const emptyData =
    isDayLocationData === false && isDayDescriptionData === false;
  const onlyLocationData =
    isDayLocationData === true && isDayDescriptionData === false;
  const allData = isDayLocationData === true && isDayDescriptionData === true;

  if (emptyData) return;
  return (
    <div className='mb-5'>
      {onlyLocationData && isEditPage && (
        <Button
          size='xsm'
          className='border-primaryBlue-700 text-primaryBlue-700 h-8 w-[158px]'
          variant='roundednavy'
        >
          내용 추가하기
        </Button>
      )}

      {allData ? (
        <>
          {editState[day] && isEditPage ? (
            <div className=' relative mt-3'>
              <textarea className='bg-primaryGray-100 w-full rounded-xl py-4 pl-5 pr-16' />
              <Button
                className=' absolute right-3 top-3 h-[18px] w-[48px] text-[10px]'
                size='xsm'
                variant='roundednavy'
                onClick={handleChangeEdit}
              >
                완료
              </Button>
            </div>
          ) : (
            <div
              className={`bg-primaryGray-100 relative mt-3 h-auto w-full rounded-xl py-5 pl-5 ${
                isEditPage ? 'pr-16' : 'pr-[13px]'
              }  text-[13px]`}
            >
              <div className='black'>
                안녕하세요! 일본을 누비며 맛있는 여행을 즐겨보았어요. 오사카의
                타코야끼, 도쿄의 초밥, 교토의 유자라멘과 함께한 식도락 여행은
                정말 특별했습니다. 현지 음식과 문화의 매력을 느끼며 여행의
                색다른 맛을 만끽할 수 있었어요....
              </div>
              {isEditPage && (
                <Button
                  className=' absolute right-3 top-3 h-[18px] w-[48px] text-[10px]'
                  size='xsm'
                  variant='roundednavy'
                  onClick={handleChangeEdit}
                >
                  수정
                </Button>
              )}
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};
