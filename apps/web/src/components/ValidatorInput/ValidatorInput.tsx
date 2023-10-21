import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { Input } from 'ui/components/ui-input';

import type { ValidatorInputProps } from './ValidatorInput.types';

export const ValidatorInput: FC<ValidatorInputProps> = ({
  label,
  subLabel,
  name,
  control,
  type,
  placeholder,
  ...rest
}) => {
  return (
    <div className='flex items-start justify-start'>
      <div className='mr-4 flex w-[70px] flex-col items-start justify-start'>
        {label && (
          <label className='text-primaryGray-400 text-[12px] font-semibold'>
            {label}
          </label>
        )}
        {subLabel && (
          <label className='text-primaryGray-400 text-[10px]'>{subLabel}</label>
        )}
      </div>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({
          field: { onChange, value = '' },
          fieldState: { error },
        }) => (
          <div className='flex flex-col'>
            <Input
              className={`${
                type === 'password' ? 'w-[284px]' : 'w-[190px]'
              } ml-2 ${error ? 'mb-0' : 'mb-6'}`}
              type={type}
              autoComplete={type === 'password' ? 'new-password' : 'off'}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              {...rest}
            />
            <div>
              {error && (
                <div className='mb-1 ml-3 mt-1 text-[11px] text-red-500'>
                  {error.message}
                </div>
              )}
            </div>
          </div>
        )}
      />
    </div>
  );
};
