'use client';

import { Controller, useForm } from 'react-hook-form';
import { Button } from 'ui';

import { AddLocationConfig } from '@/constants';
import materialIcon from '@/utils/materialIcon';

import { useAddLocationModal } from '../../hooks/useAddLocationModal';

export const AddedLocation: React.FC = () => {
  const { handleSubmit, control } = useForm();
  const {
    isEditLocation,
    isEditAddress,
    handleEditLocation,
    handleEditAddress,
    locationVal,
    addressVal,
    setLocationVal,
    setAddressVal,
  } = useAddLocationModal();

  const EditBox = (isLocation: boolean, placeholder: string) => (
    <form
      onSubmit={handleSubmit((data: string) => {
        if (isLocation) {
          setLocationVal(data);
          handleEditLocation(false);
        } else {
          setAddressVal(data);
          handleEditAddress(false);
        }
      })}
    >
      <Controller
        name={isLocation ? 'location' : 'address'}
        control={control}
        defaultValue=''
        render={({ field }) => (
          <div
            className={`relative ${
              isLocation ? '' : 'mb-[40px]'
            } flex w-[558px] justify-between text-xl`}
          >
            <input
              {...field}
              className='w-[558px] bg-transparent text-center text-xl placeholder:text-center focus:outline-none'
              placeholder={placeholder}
              autoComplete='off'
            />
            <button className='cursor-pointer pr-[20px]'>
              {materialIcon({
                iconName: 'check',
                size: 30,
                style: 'text-primaryGray-400',
              })}
            </button>
          </div>
        )}
      />
    </form>
  );

  return (
    <div>
      <div className='m-auto mb-[20px] w-[751px] '>
        <div className='border-primaryGray-300 flex justify-between border-b-[1px] pb-5 pt-[60px]'>
          <div>장소명</div>
          {isEditLocation ? (
            EditBox(true, '장소명을 입력하세요')
          ) : (
            <div
              className='hover:text-primaryBlue-500 cursor-pointer font-bold'
              onClick={() => handleEditLocation(true)}
            >
              {typeof locationVal === 'object' && locationVal.location.length
                ? locationVal.location
                : AddLocationConfig.suggestAddLocation}
            </div>
          )}
        </div>
        <div className='flex justify-between py-5 text-right'>
          <div>주소</div>
          <div>
            {isEditAddress ? (
              EditBox(false, '상세 주소를 입력하세요')
            ) : (
              <div
                className='hover:text-primaryBlue-500 mb-[40px] cursor-pointer text-xl'
                onClick={() => handleEditAddress(true)}
              >
                {typeof addressVal === 'object' && addressVal.address.length
                  ? addressVal.address
                  : AddLocationConfig.suggestAddAddress}
              </div>
            )}
            <div className='bg-primaryGray-300 h-[292px] w-[558px]'>지도</div>
            <div className='flex text-sm'>
              <div>
                {materialIcon({
                  iconName: 'fmd_bad',
                  size: 20,
                  style: 'text-primaryBlue-300 pt-[3px]',
                })}
              </div>
              <div className='mt-1'>{AddLocationConfig.informText}</div>
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
  );
};
