'use client';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { Button } from 'ui';

import LogoImage from '/public/assets/logo_black.svg';
import googleImage from '/public/images/google-signin.png';
import { AuthSloganSection } from '@/components';
import { loginContants } from '@/constants/login.constants';

import { LoginForm } from './_components';

const LoginPage = () => {
  return (
    <div className='m-12 flex justify-center'>
      <div className='flex flex-col items-center justify-between p-7'>
        <div className='mb-4 flex w-full items-end justify-between font-semibold'>
          <Link href='/landing'>
            <Image
              src={LogoImage}
              width={120}
              alt='트래모리 메인 로고'
              priority
            />
          </Link>
          <div className='text-[12px]'>{loginContants.info}</div>
        </div>
        <div className='bg-primaryBeige w-full rounded-b-[40px]'>
          <div className='flex flex-col items-center px-[30px] pb-[35px] pt-[33px]'>
            <Image
              src={loginContants.images.mainImage}
              width={394}
              alt='로그인 페이지 메인 이미지'
              priority
            />
            <AuthSloganSection />
          </div>
        </div>
        <div className='h-px w-[378px] bg-[#D3CEBE]' />
        <div className='bg-primaryBeige w-full rounded-t-[40px] px-[30px] py-[35px]'>
          <LoginForm />
          <Button
            variant='nonrounded'
            onClick={() => signIn('google')}
            className='w-full'
          >
            <Image src={googleImage} alt='구글 가이드라인 이미지' width={130} />
          </Button>
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
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
