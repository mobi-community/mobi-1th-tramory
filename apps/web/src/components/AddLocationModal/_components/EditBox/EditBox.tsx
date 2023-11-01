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
  } = useAddLocationModal();

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return null;
    if (isLocation) {
      setLocationVal(e.target.value);
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
      <Input
        className={`w-[450px] bg-transparent text-center placeholder:text-center focus-visible:outline-none focus-visible:ring-0 ${
          isLocation
            ? 'text-xl placeholder:text-xl'
            : 'text-base placeholder:text-base'
        }`}
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
