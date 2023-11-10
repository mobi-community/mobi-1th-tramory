'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button } from 'ui';

import { ValidatorInput } from '@/components';

import { LOGIN_SCHEMA } from '../../_schema/login.schema';
import type { LoginFormType } from './LoginForm.types';

export const LoginForm = () => {
  const { handleSubmit, control } = useForm<LoginFormType>({
    mode: 'onChange',
    resolver: yupResolver(LOGIN_SCHEMA),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: LoginFormType) => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('로그인 실패');
      }

      const responseData = await response.json();

      console.log('response', responseData);
    } catch (error) {
      console.error('로그인 에러:', error);
    }
  };

  const CustomStyle = {
    width: '290px',
    marginLeft: '0',
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ValidatorInput
        label={'Email'}
        subLabel={'이메일'}
        name={'email'}
        type={'text'}
        control={control}
        style={CustomStyle}
        placeholder='예)example@gmail.com'
      />
      <ValidatorInput
        label={'Password'}
        subLabel={'패스워드'}
        name={'password'}
        type={'password'}
        control={control}
        style={CustomStyle}
        placeholder='영문, 숫자, 특수기호를 포함한 8자 이상으로 설정해주세요'
      />
      <Button
        type='submit'
        className='w-full rounded-none text-xs font-bold text-white'
      >
        로그인
      </Button>
      <div className='text-primaryGreen my-3 flex items-center justify-between'>
        <div className='bg-primaryGreen h-px w-[160px]'></div>
        <p className='font-bold'>or</p>
        <div className='bg-primaryGreen h-px w-[160px]'></div>
      </div>
    </form>
  );
};
