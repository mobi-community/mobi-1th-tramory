'use client';
import { useState } from 'react';

import { ContentInfo, DateHeader, PlaceInfo } from '@/components';
import { getDatesBetween } from '@/utils';

export const DropdownFormSection = ({ planDetail }) => {
  const [dayData, setDayData] = useState(planDetail.detailDescription);

  const handleToggleData = (index) => {
    setDayData(dayData.filter((data) => data.day === index + 1));
    console.log(dayData);
  };

  const [toggleState, setToggleState] = useState([]);
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

  return (
    <div className='w-full'>
      {dates.map((date, index) => (
        <div
          key={index}
          onClick={() => {
            handleToggleUpdate(date);
            handleToggleData(index);
          }}
        >
          <DateHeader index={index} date={date} isToggleOpen={isToggleOpen} />
          {isToggleOpen(date) && (
            <>
              <PlaceInfo count={count} />
              <ContentInfo />
            </>
          )}
        </div>
      ))}
    </div>
  );
};
