import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { Input } from 'ui/components/ui-input';

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
            <Input
              type={type}
              autoComplete={type === 'password' ? 'new-password' : 'off'}
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
