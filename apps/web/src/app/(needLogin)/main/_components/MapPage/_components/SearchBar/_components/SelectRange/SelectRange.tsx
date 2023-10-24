'use client';

import { useAtom, useAtomValue } from 'jotai';

import { MapAtom } from '../../../../../../../../../store';
import materialIcon from '../../../../../../../../../utils/materialIcon';
import { SelectRangeModal } from './SelectRangeModal';

export const SelectRange: React.FC = () => {
  const searchRange = useAtomValue(MapAtom.range);
  const [isSelectModalOpen, setIsSelectModalOpen] = useAtom(
    MapAtom.isSelectModalOpen
  );

  return (
    <>
      <div
        onClick={() => setIsSelectModalOpen((prev: boolean) => !prev)}
        className='relative z-50 flex h-[50px] w-[158px] cursor-pointer items-center justify-between bg-transparent px-3 pl-5 text-center'
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
