'use client';

import { useMapSearchBar } from '@/app/(needLogin)/map/hooks/useMapSearchBar';
import materialIcon from '@/utils/materialIcon';

import { SelectRangeModal } from './SelectRangeModal';

export const SelectRange: React.FC = () => {
  const { searchRange, isSelectModalOpen, handleSelectModal } =
    useMapSearchBar();

  return (
    <>
      <div
        onClick={handleSelectModal}
        className='relative z-[50] flex h-[50px] w-[158px] cursor-pointer items-center justify-between bg-transparent px-3 pl-5 text-center'
      >
        <div className='w-[50px]'>{searchRange}</div>
        <div className='pt-[7px]'>
          {materialIcon({
            iconName: isSelectModalOpen ? 'arrow_drop_up' : 'arrow_drop_down',
            size: 20,
            style: 'text-primaryGray-400',
          })}
        </div>
        <SelectRangeModal />
      </div>
    </>
  );
};
