'use client';
import { useState } from 'react';

import { ContentInfo, DateHeader, PlaceInfo } from '@/components';
import { placeInfoStateData } from '@/components/PlaceInfo/_mock/placeInfoMock';

export const DropdownFormSection = () => {
  const [count] = useState(1);
  const [toggleListState, setToggleListState] = useState({});
  const handleToggleListState = (id) => {
    setToggleListState((prev) => ({
      ...prev,
      [id]: !toggleListState[id],
    }));
  };

  return (
    <div className='w-full'>
      {placeInfoStateData.map((dayData, index) => (
        <div key={index}>
          <DateHeader
            handleToggleListState={handleToggleListState}
            index={index}
            date={dayData.date}
            toggleListState={toggleListState}
          />
          {toggleListState[dayData.date] && (
            <div className=' text-primaryBlue-700'>
              <PlaceInfo count={count} dayData={dayData} />
              <ContentInfo dayData={dayData} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
