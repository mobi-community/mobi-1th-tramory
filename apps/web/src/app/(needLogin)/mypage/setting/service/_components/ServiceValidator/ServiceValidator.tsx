'use client';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { Input } from 'ui';
import { Textarea } from 'ui/components/ui-textarea';

import { Select } from '@/components/Select/Select';

import { ServiceValidateProps } from './ServiceValidator.types';

export const ServiceValidator: FC<ServiceValidateProps> = ({
  name,
  control,
  type,
  serviceOptions,
  initialValue,
  placeholder,
  ...rest
}) => {
  return (
    <div className='flex items-start justify-start'>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({
          field: { onChange, value = '' },
          fieldState: { error },
        }) => (
          <div className='flex flex-col'>
            {name === 'description' ? (
              <Textarea
                className='w-[700px]'
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                {...rest}
              />
            ) : name === 'serviceType' ? ( // name이 'serviceType'인 경우 Select 컴포넌트 렌더링
              <Select
                value={value}
                onChange={onChange}
                options={serviceOptions}
                initialValue={initialValue}
              />
            ) : (
              <Input
                className='w-[600px]'
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                {...rest}
              />
            )}

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
