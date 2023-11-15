'use client';
import { useAtom } from 'jotai';

import { dropdownCountAtom } from '@/store/dropdownFormSection.atoms';

export const PlaceInfo = () => {
  const [dayCount] = useAtom(dropdownCountAtom);

  return (
    <>
      <div className='mt-2 flex gap-3 px-3 py-3 '>
        <div className='bg-primaryBlue-700 mt-1 flex h-[28px] w-[32px] items-center justify-center rounded-full text-[15px] font-semibold text-white'>
          <p>{dayCount}</p>
        </div>

        <div className='flex w-full flex-col'>
          <div className='flex justify-between'>
            <div>
              <div className='text-[18px] font-semibold'>도쿄</div>
              <div className='text-primaryGray-500 text-[12px]'>
                1 Chome Dotonbori, Chuo Ward, Osaka, 542-0071 일본
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
