'use client';
import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { ContentInfo, DateHeader, PlaceInfo } from '@/components';
import {
  dropdownIdsAtom,
  dropdownToggleFamily,
} from '@/store/dropdownFormSection.atoms';

export const DropdownFormSection = ({ dayData, index }) => {
  const [toggleState] = useAtom(dropdownToggleFamily(dayData.id));
  const setDropdownIds = useSetAtom(dropdownIdsAtom);

  useEffect(() => {
    setDropdownIds((ids) => [...ids, dayData.id]);
    return () => {
      setDropdownIds((ids) =>
        ids.filter((existingId) => existingId !== dayData.id)
      );
    };
  }, [dayData.id, setDropdownIds]);

  return (
    <div className='w-full'>
      <div key={index}>
        <DateHeader index={index} date={dayData.date} id={dayData.id} />
        {toggleState && (
          <div className=' text-primaryBlue-700'>
            <PlaceInfo />
            <ContentInfo dayData={dayData} />
          </div>
        )}
      </div>
    </div>
  );
};
