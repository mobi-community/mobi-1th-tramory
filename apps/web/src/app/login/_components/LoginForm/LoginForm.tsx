'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Button } from 'ui';
import { ValidatorInput } from '@/components';
import { LOGIN_SCHEMA } from '../../_schema/login.schema';
import type { LoginFormType } from './LoginForm.type';
import googleImage from '/public/images/google-signin.png';
import Image from 'next/image';

export const LoginForm = () => {
  const { control } = useForm<LoginFormType>({
    mode: 'onChange',
    resolver: yupResolver(LOGIN_SCHEMA),
    defaultValues: { email: '', password: '' },
  });

  return (
    <form>
      <ValidatorInput
        label={'Email'}
        subLabel={'이메일'}
        name={'email'}
        type={'text'}
        control={control}
        style={{ width: '308px', marginLeft: '0' }}
        placeholder='예)example@gmail.com'
      />
      <ValidatorInput
        label={'Password'}
        subLabel={'패스워드'}
        name={'password'}
        type={'password'}
        control={control}
        style={{ width: '308px', marginLeft: '0' }}
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
      <div>
        <Button variant='nonrounded' className='w-full'>
          <Image src={googleImage} alt='구글 가이드라인 이미지' width={130} />
        </Button>
      </div>
      <div className='mt-6 flex w-full items-center justify-between'>
        <p className='text-primaryGray-400 text-sm font-bold'>
          회원이 아니신가요?
        </p>
        <Link href='/sign_up'>
          <Button
            variant='outline'
            className='text-primaryGreen border-primaryGreen hover:bg-primaryGreen rounded-none bg-transparent px-24 text-xs font-bold hover:text-white'
          >
            회원가입
          </Button>
        </Link>
      </div>
    </form>
  );
};
