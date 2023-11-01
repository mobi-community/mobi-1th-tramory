'use client';

import { Controller, useForm } from 'react-hook-form';
import { Button } from 'ui';

import { AddLocationConfig } from '@/constants';
import materialIcon from '@/utils/materialIcon';

import { useAddLocationModal } from '../../hooks/useAddLocationModal';
import { EditBox } from '../EditBox/EditBox';

export const AddedLocation: React.FC = () => {
  const { handleSubmit, control } = useForm();
  const {
    isEditLocation,
    isEditAddress,
    handleEditLocation,
    handleEditAddress,
    locationVal,
    addressVal,
  } = useAddLocationModal();

  return (
    <form
      onSubmit={handleSubmit((data: string) => {
        console.log('장소 추가 결과', data);
      })}
    >
      <Controller
        name={'addedLocation'}
        control={control}
        defaultValue=''
        render={({ field }) => (
          <div>
            <div className='m-auto mb-[10px] w-[550px] '>
              <div className='border-primaryGray-300 flex justify-between border-b-[1px] pb-5 pt-[30px]'>
                <div className='w-[70px]'>장소명</div>
                {isEditLocation ? (
                  <EditBox
                    isLocation={true}
                    placeholder='장소명을 입력하세요'
                    field={field}
                  />
                ) : (
                  <div
                    className='hover:text-primaryBlue-500 cursor-pointer font-bold'
                    onClick={() => handleEditLocation(true)}
                  >
                    {typeof locationVal === 'object' &&
                    locationVal.location.length
                      ? locationVal.location
                      : AddLocationConfig.suggestAddLocation}
                  </div>
                )}
              </div>
              <div className='flex justify-between py-3 text-right'>
                <div className='w-[50px]'>주소</div>
                <div>
                  {isEditAddress ? (
                    <EditBox
                      isLocation={false}
                      placeholder='상세 주소를 입력하세요'
                      field={field}
                    />
                  ) : (
                    <div
                      className='hover:text-primaryBlue-500 mb-[20px] cursor-pointer text-xl'
                      onClick={() => handleEditAddress(true)}
                    >
                      {typeof addressVal === 'object' &&
                      addressVal.address.length
                        ? addressVal.address
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
              >
                {AddLocationConfig.buttonText}
              </Button>
            </div>{' '}
          </div>
        )}
      />
    </form>
  );
};
