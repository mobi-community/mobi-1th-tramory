'use client';
import { ContentInfo, DateHeader, PlaceInfo } from '@/components';
import { dropdownToggleFamily } from '@/store/dropdownFormSection.atoms';
import { useAtom } from 'jotai';

export const DropdownFormSection = ({ dayData, index }) => {
  const [toggleState] = useAtom(dropdownToggleFamily(dayData.id));

  return (
    <div className='w-full'>
      <div key={index}>
        <DateHeader index={index} date={dayData.date} id={dayData.id} />
        {toggleState && (
          <div className=' text-primaryBlue-700'>
            <PlaceInfo dayData={dayData} />
            <ContentInfo dayData={dayData} />
          </div>
        )}
      </div>
    </div>
  );
};
