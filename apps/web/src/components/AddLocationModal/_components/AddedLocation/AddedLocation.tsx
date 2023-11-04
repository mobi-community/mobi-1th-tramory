'use client';

import { Button } from 'ui';

import { AddLocationConfig } from '@/constants';
import materialIcon from '@/utils/materialIcon';

import { useAddLocationModal } from '../../_hooks/useAddLocationModal';
import { EditBox } from '../EditBox/EditBox';

export const AddedLocation: React.FC = () => {
  const {
    isEditLocation,
    handleEditLocation,
    locationVal,
    addressVal,
    trackData,
    handleCloseModal,
    clearValue,
  } = useAddLocationModal();

  return (
    <div>
      <div>
        <div className='m-auto mb-[10px] w-[550px] '>
          <div className='border-primaryGray-300 flex justify-between border-b-[1px] pb-3 pt-[30px]'>
            <div className='w-[70px] text-left text-xl'>장소명</div>
            {isEditLocation ? (
              <EditBox placeholder='장소명을 수정하세요' />
            ) : (
              <div
                className='hover:text-primaryBlue-500 cursor-pointer text-xl font-bold'
                onClick={() => handleEditLocation(true)}
              >
                {locationVal.length ? locationVal : ''}
              </div>
            )}
          </div>
          <div className='flex justify-between py-3 text-right'>
            <div className='w-[50px] text-left text-xl'>주소</div>
            <div>
              <div className='text-primaryGray-400 mb-[20px] text-base'>
                {addressVal.length
                  ? addressVal
                  : AddLocationConfig.suggestAddAddress}
              </div>
            </div>
          </div>
          <div className='flex flex-col items-end'>
            <div className='bg-primaryGray-300 mb-5 h-[250px] w-full'>지도</div>
          </div>
          <div className='flex w-[570px] pl-1 text-sm'>
            <div>
              {materialIcon({
                iconName: 'fmd_bad',
                size: 20,
                style: 'text-primaryBlue-300 py-[5px] pr-1',
              })}
            </div>
            <div className='mt-1'>{AddLocationConfig.informText}</div>
          </div>
        </div>
        <div className='mb-[20px] text-center'>
          <Button
            variant='lightblue'
            className='h-[50px] w-[190px] text-base font-bold'
            onClick={() => {
              trackData();
              handleCloseModal();
              clearValue();
            }}
          >
            {AddLocationConfig.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
