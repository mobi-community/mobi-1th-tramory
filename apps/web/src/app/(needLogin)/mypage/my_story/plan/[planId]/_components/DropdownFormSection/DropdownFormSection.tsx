'use client';
import { useState } from 'react';
import { Button } from 'ui';

import { getDatesBetween } from '@/utils';

export const DropdownFormSection = () => {
  const [toggleState, setToggleState] = useState([]);
  const [isEditInputOpen, setIsEditInputOpen] = useState(false);
  const [count] = useState(1);
  //실제 데이터로 변경 예정
  const startDate = '2023-9-24';
  const endDate = '2023-9-26';
  // 아래 함수는 시작날짜부터 끝날짜까지 모든 일자를 반환하는 함수
  // edit 페이지에서 사용 예정
  const dates = getDatesBetween(startDate, endDate);
  const handleToggleUpdate = (date) => {
    if (toggleState.includes(date)) {
      setToggleState((prevState) => prevState.filter((d) => d !== date));
    } else {
      setToggleState((prevState) => [...prevState, date]);
    }
  };

  const isToggleOpen = (date) => {
    return toggleState.includes(date);
  };
  const handleEditInputOpen = () => {
    setIsEditInputOpen(!isEditInputOpen);
  };

  return (
    <div className='w-full'>
      {dates.map((date, index) => (
        <div key={index}>
          {/* 장소 추가 안되었을 때 */}
          <div
            key={index}
            className='border-primaryBlue-700 mt-4 flex w-full items-center justify-between border-[1px] border-opacity-90 py-2 font-semibold text-black'
          >
            <div className=' ml-3'>
              Day{index + 1} ({date})
            </div>
            <span
              onClick={() => {
                handleToggleUpdate(date);
              }}
              className='material-icons-outlined mr-2 cursor-pointer'
            >
              {isToggleOpen(date) ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
              {/* 'keyboard_arrow_up' */}
            </span>
          </div>
          {isToggleOpen(date) && (
            <div className='flex gap-3 px-3 py-6'>
              <div
                className={`${
                  index >= 1 && 'mt-[7px]'
                } bg-primaryBlue-700 flex h-[32px] w-[32px] items-center justify-center rounded-full text-[15px] font-semibold text-white`}
              >
                {count}
              </div>
              {/* 장소만 추가 되었을 때 */}
              {index >= 1 ? (
                <div className='flex w-full flex-col'>
                  <div className='flex justify-between'>
                    <div>
                      <div className='text-[18px] font-semibold'>도쿄</div>
                      <div className='text-primaryGray-500 text-[12px] '>
                        1 Chome Dotonbori, Chuo Ward, Osaka, 542-0071 일본
                      </div>
                    </div>
                    {index >= 2 && (
                      <div className='flex items-center gap-2'>
                        <Button
                          className=' right-3 top-3 h-[18px] w-[48px] text-[10px]'
                          size='xsm'
                          variant='roundednavy'
                        >
                          수정
                        </Button>
                        <Button
                          className=' right-3 top-3 h-[18px] w-[48px] text-[10px]'
                          size='xsm'
                          variant='roundednavy'
                        >
                          삭제
                        </Button>
                        <span className='material-icons-outlined'>menu</span>
                      </div>
                    )}
                  </div>

                  {/* 장소 + 내용 추가되었을 때 */}
                  {index >= 2 ? (
                    isEditInputOpen ? (
                      <div className=' relative mt-3'>
                        <textarea className='bg-primaryGray-100 w-full rounded-xl py-4 pl-5 pr-16' />
                        <Button
                          className=' absolute right-3 top-3 h-[18px] w-[48px] text-[10px]'
                          size='xsm'
                          variant='roundednavy'
                          onClick={handleEditInputOpen}
                        >
                          완료
                        </Button>
                      </div>
                    ) : (
                      <div className=' bg-primaryGray-100 relative mt-3 h-auto w-full rounded-xl py-5 pl-5 pr-16 text-[13px] '>
                        <div>
                          안녕하세요! 일본을 누비며 맛있는 여행을 즐겨보았어요.
                          오사카의 타코야끼, 도쿄의 초밥, 교토의 유자라멘과
                          함께한 식도락 여행은 정말 특별했습니다. 현지 음식과
                          문화의 매력을 느끼며 여행의 색다른 맛을 만끽할 수
                          있었어요....
                        </div>
                        <Button
                          className=' absolute right-3 top-3 h-[18px] w-[48px] text-[10px]'
                          size='xsm'
                          variant='roundednavy'
                          onClick={handleEditInputOpen}
                        >
                          수정
                        </Button>
                      </div>
                    )
                  ) : (
                    <Button
                      size='xsm'
                      className='border-primaryBlue-700 text-primaryBlue-700 mt-3 h-8 w-[158px]'
                      variant='roundednavy'
                    >
                      내용 추가하기
                    </Button>
                  )}
                </div>
              ) : (
                <div className='flex'>
                  <Button
                    size='xsm'
                    className='border-primaryBlue-700 text-primaryBlue-700 h-8 w-[158px]'
                    variant='roundednavy'
                  >
                    장소 추가하기
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
