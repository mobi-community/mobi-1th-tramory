'use client';

import { Button } from 'ui';

import { AddLocationConfig } from '@/constants';
import materialIcon from '@/utils/materialIcon';

import { useAddLocationModal } from '../../hooks/useAddLocationModal';
import { EditBox } from '../EditBox/EditBox';

export const AddedLocation: React.FC = () => {
  const {
    isEditLocation,
    isEditAddress,
    handleEditLocation,
    handleEditAddress,
    locationVal,
    addressVal,
    trackData,
    handleCloseModal,
  } = useAddLocationModal();

  return (
    <div>
      <div>
        <div className='m-auto mb-[10px] w-[550px] '>
          <div className='border-primaryGray-300 flex justify-between border-b-[1px] pb-3 pt-[30px]'>
            <div className='w-[70px] text-left text-xl'>장소명</div>
            {isEditLocation ? (
              <EditBox isLocation={true} placeholder='장소명을 입력하세요' />
            ) : (
              <div
                className='hover:text-primaryBlue-500 cursor-pointer text-xl font-bold'
                onClick={() => handleEditLocation(true)}
              >
                {locationVal.length
                  ? locationVal
                  : AddLocationConfig.suggestAddLocation}
              </div>
            )}
          </div>
          <div className='flex justify-between py-3 text-right'>
            <div className='w-[50px] text-left text-xl'>주소</div>
            <div>
              {isEditAddress ? (
                <EditBox
                  isLocation={false}
                  placeholder='상세 주소를 입력하세요'
                />
              ) : (
                <div
                  className='hover:text-primaryBlue-500 mb-[20px] cursor-pointer text-base'
                  onClick={() => handleEditAddress(true)}
                >
                  {addressVal.length
                    ? addressVal
                    : AddLocationConfig.suggestAddAddress}
                </div>
              )}
              <div className='flex flex-col items-end'>
                <div className='bg-primaryGray-300 h-[200px] w-[450px]'>
                  지도
                </div>
              </div>
            </div>
          </div>
          <div className='flex w-[570px] pl-1 text-sm'>
            <div>
              {materialIcon({
                iconName: 'fmd_bad',
                size: 20,
                style: 'text-primaryBlue-300 pt-[5px] pr-1',
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
              handleCloseModal();
              trackData();
            }}
          >
            {AddLocationConfig.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
