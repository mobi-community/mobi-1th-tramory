import { ChangeEvent } from 'react';
import { Input } from 'ui';

import materialIcon from '@/utils/materialIcon';

import { useAddLocationModal } from '../../hooks/useAddLocationModal';

export const EditBox: React.FC<{
  isLocation: boolean;
  placeholder: string;
}> = ({ isLocation, placeholder }) => {
  const {
    handleEditLocation,
    handleEditAddress,
    setLocationVal,
    setAddressVal,
    locationVal,
  } = useAddLocationModal();

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (isLocation) {
      setLocationVal(e.target.value);
      console.log('loca', locationVal);
    } else {
      setAddressVal(e.target.value);
    }
  };

  const handleSubmit = () => {
    if (isLocation) {
      handleEditLocation(false);
    } else {
      handleEditAddress(false);
    }
  };

  return (
    <div
      className={`relative ${
        isLocation ? 'text-xl' : 'mb-[20px] text-base'
      } flex w-[500px] justify-between`}
    >
      {/* <input
        {...field}
        className='w-[450px] bg-transparent text-center placeholder:text-center focus:outline-none'
        placeholder={placeholder}
        autoComplete='off'
      /> */}
      <Input
        className='w-[450px] bg-transparent text-center placeholder:text-center focus:outline-none'
        placeholder={placeholder}
        onChange={(e) => handleInputValue(e)}
      />
      <button className='cursor-pointer' onClick={() => handleSubmit()}>
        {materialIcon({
          iconName: 'check',
          size: 30,
          style: 'text-primaryGray-400',
        })}
      </button>
    </div>
  );
};
