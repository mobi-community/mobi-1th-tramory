import Image from 'next/image';
import { Button } from 'ui';

import { signupConstants } from '../../constants';
import { SignUpForm } from './_components';

const SignUpPage = () => {
  return (
    <div className=' flex h-screen w-auto flex-col items-center justify-center'>
      <div className='flex w-[830px] items-center justify-between font-semibold'>
        <Image
          src={signupConstants.image.mainLogo}
          width={120}
          alt='Logo_Image'
          priority
        />
        <div className='text-[12px]'>{signupConstants.info}</div>
      </div>
      <div className=' flex flex-row'>
        <div className='bg-primaryBeige rounded-br-[28px] rounded-tr-[28px] p-7'>
          <Image
            src={signupConstants.image.mainImage}
            width={320}
            alt='signup_main_image'
            priority
          />
          {/* 예슬님 공용 컴포넌트로 변경예정 */}
          <Image
            className='mt-6'
            src={signupConstants.image.subImage}
            width={280}
            alt='signup_sub_image'
            priority
          />
        </div>
        <div className='bg-primaryBeige flex flex-col items-center justify-center rounded-bl-[28px] rounded-tl-[28px] pb-[30px] pl-[40px] pr-[40px] pt-[50px]'>
          <div>
            <SignUpForm />
          </div>
          <div className='mt-4'>
            <Button className='mb-4 h-[35px] w-full font-bold'>회원가입</Button>
            <Image
              className='mb-4'
              src={signupConstants.image.subImage2}
              width={380}
              alt='signup_sub_image2'
              priority
            />
          </div>
          <div className='flex w-full justify-between'>
            <div>
              <Button className='h-[36px] w-[170px]' variant='nonrounded'>
                Sign In with Google
              </Button>
            </div>
            <div>
              <Button
                className='h-[36px] w-[170px] font-semibold'
                variant='nonrounded'
              >
                로그인 하러 가기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
