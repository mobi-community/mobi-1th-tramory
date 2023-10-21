import Image from 'next/image';
import Link from 'next/link';

import { AuthSloganSection } from '../../components';
import { loginContants } from '../../constants/login.constants';
import { LoginForm } from './_components';

const LoginPage = () => {
  return (
    <div className='my-12 flex justify-center'>
      <div className='flex w-[500px] flex-col items-center  justify-between'>
        <div className='mb-7 flex w-full items-end justify-between'>
          <Link href='/landing'>
            <Image
              src={loginContants.images.mainLogo}
              alt='트래모리 메인 로고'
            />
          </Link>
          <p className='font-bold'>{loginContants.info}</p>
        </div>
        <div className='bg-primaryBeige w-full rounded-b-[40px]'>
          <div className='my-[40px] flex flex-col items-center'>
            <Image
              src={loginContants.images.mainImage}
              width={420}
              height={362}
              alt='로그인 페이지 메인 이미지'
              className='mb-[25px]'
            />
            <div className='w-[420px]'>
              <AuthSloganSection />
            </div>
          </div>
        </div>
        <div className='h-px w-[430px] bg-[#D3CEBE]' />
        <div className='bg-primaryBeige w-full rounded-t-[40px] p-[40px]'>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
