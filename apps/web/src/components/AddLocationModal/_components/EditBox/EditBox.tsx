import { ChangeEvent } from 'react';
import { Input } from 'ui';

import materialIcon from '@/utils/materialIcon';

import { useAddLocationModal } from '../../hooks/useAddLocationModal';

export const EditBox: React.FC<{
  placeholder: string;
}> = ({ placeholder }) => {
  const { handleEditLocation, setLocationVal } = useAddLocationModal();

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return null;

    setLocationVal(e.target.value);
  };

  const handleSubmit = () => {
    handleEditLocation(false);
  };

  return (
    <div className={`relative flex w-[500px] justify-between text-xl`}>
      <Input
        className={`w-[450px] bg-transparent text-center text-xl placeholder:text-center placeholder:text-xl focus-visible:outline-none focus-visible:ring-0`}
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
