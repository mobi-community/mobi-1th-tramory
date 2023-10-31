'use client';

import { AddLocationConfig } from '@/constants';
import materialIcon from '@/utils/materialIcon';

import { SearchBar } from './_components';
import { AddedLocation } from './_components/AddedLocation/AddedLocation';
import { useAddLocationModal } from './hooks/useAddLocationModal';

export const AddLocationModal: React.FC = () => {
  const { isAddLocationModalOpen, handleCloseModal } = useAddLocationModal();

  if (isAddLocationModalOpen)
    return (
      <div className='bg-primaryGray-300 fixed inset-0 z-50 flex items-center justify-center bg-opacity-20'>
        <div className='flex w-[900px] flex-col border border-gray-300 bg-white shadow-md'>
          <div className='mb-1 flex justify-end p-5'>
            <button
              className='text-primaryGray-300 cursor-pointer p-[5px]'
              onClick={handleCloseModal}
            >
              {materialIcon({ iconName: 'close', size: 40 })}
            </button>
          </div>
          <div className='flex-1 text-2xl'>
            <div className='mb-[20px] mt-[-75px] border-b-[1px] pb-[30px] text-center text-4xl font-bold'>
              {AddLocationConfig.titleText}
            </div>
            <SearchBar />
            <AddedLocation />
          </div>
        </div>
      </div>
    );
};
