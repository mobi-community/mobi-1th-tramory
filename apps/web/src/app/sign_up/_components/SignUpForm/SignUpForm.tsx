'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button } from 'ui';

import { ValidatorInput } from '@/components';

import { SIGNUP_SCHEMA } from '../../_schema';
import type { SignUpFormType } from './SignUpForm.types';

export const SignUpForm = () => {
  const { handleSubmit, control } = useForm<SignUpFormType>({
    mode: 'onChange',
    resolver: yupResolver(SIGNUP_SCHEMA),
    defaultValues: { email: '', password: '', pwconfirm: '', nickName: '' },
  });

  const onSubmit = async (data: SignUpFormType) => {
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('회원가입 실패');
      }

      const responseData = await response.json();

      console.log('response', responseData);
    } catch (error) {
      console.error('회원가입 에러:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex'>
        <div className='flex'>
          <ValidatorInput
            label={'Email'}
            subLabel={'이메일'}
            name={'email'}
            type={'text'}
            control={control}
            placeholder='예)example@gmail.com'
          />
          <div className='ml-4'>
            <Button className='h-[36px]' type='button'>
              중복 확인
            </Button>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-start justify-start'>
        <div className='flex items-center justify-center'>
          <ValidatorInput
            label={'Password'}
            subLabel={'패스워드'}
            name={'password'}
            type={'password'}
            control={control}
            placeholder='영문, 숫자, 특수기호를 포함한 8자 이상으로 설정해주세요'
          />
        </div>
        <div className='flex items-center justify-center'>
          <ValidatorInput
            label={'PW Confirm'}
            subLabel={'패스워드 확인'}
            name={'pwconfirm'}
            type={'password'}
            control={control}
            placeholder='같은 패스워드를 다시 입력해주세요'
          />
        </div>
        <div className='flex items-center justify-center'>
          <div className='flex'>
            <ValidatorInput
              label={'Nickname'}
              subLabel={'닉네임'}
              name={'nickName'}
              type={'text'}
              control={control}
            />
            <div className='ml-4'>
              <Button className='h-[36px]'>중복 확인</Button>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4 w-full'>
        <Button className='mb-4 h-[35px] w-full font-bold'>회원가입</Button>
      </div>
    </form>
  );
};
