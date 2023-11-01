import {
  // Controller,
  ControllerRenderProps,
  FieldValues,
  // useForm,
} from 'react-hook-form';

import materialIcon from '@/utils/materialIcon';

import { useAddLocationModal } from '../../hooks/useAddLocationModal';

export const EditBox: React.FC<{
  isLocation: boolean;
  placeholder: string;
  field: ControllerRenderProps<FieldValues, 'addedLocation'>;
}> = ({ isLocation, placeholder, field }) => {
  // const { handleSubmit, control } = useForm();

  const {
    // handleEditLocation,
    // handleEditAddress,
    // setLocationVal,
    // setAddressVal,
  } = useAddLocationModal();

  return (
    <div
      className={`relative ${
        isLocation ? '' : 'mb-[20px]'
      } flex w-[500px] justify-between text-xl`}
    >
      <input
        {...field}
        className='w-[450px] bg-transparent text-center text-xl placeholder:text-center focus:outline-none'
        placeholder={placeholder}
        autoComplete='off'
      />
      <button className='cursor-pointer'>
        {materialIcon({
          iconName: 'check',
          size: 30,
          style: 'text-primaryGray-400',
        })}
      </button>
    </div>
    // <form
    //   onSubmit={handleSubmit((data: string) => {
    //     if (isLocation) {
    //       setLocationVal(data);
    //       handleEditLocation(false);
    //     } else {
    //       setAddressVal(data);
    //       handleEditAddress(false);
    //     }
    //   })}
    // >
    //   {/* <Controller
    //     name={isLocation ? 'location' : 'address'}
    //     control={control}
    //     defaultValue=''
    //     render={({ field }) => ( */}

    //   {/* )} */}
    //   {/* /> */}
    // {/* </form> */}
  );
};
