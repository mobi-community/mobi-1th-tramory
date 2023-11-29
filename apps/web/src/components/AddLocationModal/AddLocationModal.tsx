'use client';

import { AddLocationConfig } from '@/constants';
import materialIcon from '@/utils/materialIcon';

import { AddedLocation, SearchBar } from './_components';
import { useAddLocationModal } from './_hooks/useAddLocationModal';

export const AddLocationModal: React.FC = () => {
  const { isAddLocationModalOpen, handleCloseModal, clearValue } =
    useAddLocationModal();

  if (isAddLocationModalOpen)
    return (
      <div className='bg-primaryGray-300 fixed inset-0 z-[200] flex items-center justify-center bg-opacity-20'>
        <div className='flex w-[700px] flex-col border border-gray-300 bg-white shadow-md'>
          <div className='mb-1 flex justify-end p-5'>
            <button
              className='text-primaryGray-300 relative z-10 cursor-pointer p-[5px]'
              onClick={() => {
                handleCloseModal();
                clearValue();
              }}
            >
              {materialIcon({ iconName: 'close', size: 40 })}
            </button>
          </div>
          <div className='flex-1 text-2xl'>
            <div className='relative z-0 mb-[10px] mt-[-77px] border-b-[1px] pb-[15px] text-center text-3xl font-bold'>
              {AddLocationConfig.titleText}
            </div>
            <SearchBar />
            <AddedLocation />
          </div>
        </div>
      </div>
    );
};
