import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { ValidatorInputProps } from './ValidatorInput.types';

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
    <>
      <div>
        {label && <label className='font-[14px]'>{label}</label>}
        {subLabel && <label className='font-[12px] '>{subLabel}</label>}
      </div>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({
          field: { onChange, value = '' },
          fieldState: { error },
        }) => (
          <>
            <input
              type={type}
              autoComplete={type === 'password' ? 'new-password' : 'off'}
              className='border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:border-primary-100 focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm shadow-md file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              {...rest}
            />
            <div>{error && <div>{error.message}</div>}</div>
          </>
        )}
      />
    </>
  );
};
