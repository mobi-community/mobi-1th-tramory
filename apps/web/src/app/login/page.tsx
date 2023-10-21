import Image from 'next/image';
import Link from 'next/link';

import { AuthSloganSection } from '../../components';
import { loginContants } from '../../constants/login.constants';

const LoginPage = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex w-[500px] flex-col justify-between'>
        <div className='mb-7 flex w-full items-end justify-between'>
          <Link href='/landing'>
            <Image
              src={loginContants.images.mainLogo}
              alt='트래모리 메인 로고'
            />
          </Link>
          <p className='font-bold'>{loginContants.info}</p>
        </div>
        <div className='h-[536px] w-full rounded-b-[40px] bg-[#F4F1E5]'>
          <div className='my-7 flex flex-col items-center'>
            <Image
              src={loginContants.images.mainImage}
              width={420}
              height={362}
              alt='로그인 페이지 메인 이미지'
            />
            <div className='w-[420px]'>
              <AuthSloganSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
