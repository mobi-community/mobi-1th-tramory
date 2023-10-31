'use client';

import { Button } from 'ui';

import { AddLocationConfig } from '@/constants';
import materialIcon from '@/utils/materialIcon';

import { SearchBar } from './_components';
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
            <div className='m-auto mb-[20px] w-[751px] '>
              <div className='border-primaryGray-300 flex justify-between border-b-[1px] py-10'>
                <div>장소명</div>
                <div className='font-bold'>로마 다빈치 공항</div>
              </div>
              <div className='flex justify-between py-10'>
                <div>주소</div>
                <div>
                  <div className='mb-[40px] text-xl'>
                    Narita International Airport1-1 Furugome, Narita, Chiba 282
                  </div>
                  <div className='bg-primaryGray-300 h-[292px] w-[558px]'>
                    지도
                  </div>
                </div>
              </div>
            </div>
            <div className='mb-[40px] text-center'>
              <Button
                variant='lightblue'
                className='h-[50px] w-[190px] text-base font-bold'
              >
                {AddLocationConfig.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
};
