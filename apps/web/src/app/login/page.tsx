import Image from 'next/image';
import Link from 'next/link';

import LogoImage from '/public/assets/logo_black.svg';

import { AuthSloganSection } from '../../components';
import { loginContants } from '../../constants/login.constants';
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
          <div className='flex flex-col items-center px-[30px] py-[35px]'>
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
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
