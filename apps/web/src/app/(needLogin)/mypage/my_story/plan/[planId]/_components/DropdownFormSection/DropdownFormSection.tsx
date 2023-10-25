'use client';
import { getDatesBetween } from '@/utils';
import { useState } from 'react';

export const DropdownFormSection = () => {
  const [count, setCount] = useState(1);

  //실제 데이터로 변경 예정
  let startDate = '2023-9-24';
  let endDate = '2023-10-4';
  // 아래 함수는 시작날짜부터 끝날짜까지 모든 일자를 반환하는 함수
  // edit 페이지에서 사용 예정

  const dates = getDatesBetween(startDate, endDate);

  return (
    <div className=' border-primaryBlue-500 w-full border-[1px] border-opacity-90 py-2 font-semibold text-black'>
      {dates.slice(0, count).map((date, index) => (
        <div key={index} className=' ml-3'>
          Day{index + 1} ({date})
        </div>
      ))}
    </div>
  );
};
