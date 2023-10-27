'use client';
import { useState } from 'react';

import { ContentInfo, DateHeader, PlaceInfo } from '@/components';
import { getDatesBetween } from '@/utils';
import { useParams } from 'next/navigation';
import { planDescription } from '../../my_story/_mocks';

export const DropdownFormSection = () => {
  const [toggleListState, setToggleListState] = useState({});
  const handleToggleListState = (id) => {
    setToggleListState((prev) => ({
      ...prev,
      [id]: !toggleListState[id],
    }));
  };

  const { postId } = useParams();
  const planDetail = planDescription.filter((detail) => detail.id === postId);

  const [count, setCount] = useState(1);

  //임시 데이터
  const startDate = '2023-9-24';
  const endDate = '2023-9-26';
  const dates = getDatesBetween(startDate, endDate);

  return (
    <div className='w-full'>
      {dates.map((date, index) => (
        <div key={index} onClick={() => handleToggleListState(date)}>
          <DateHeader
            index={index}
            date={date}
            toggleListState={toggleListState}
          />
          {toggleListState[date] && (
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
