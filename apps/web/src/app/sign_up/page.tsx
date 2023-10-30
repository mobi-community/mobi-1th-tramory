import Image from 'next/image';
import { Button } from 'ui';

import googleImage from '/public/images/google-signup.png';
import { AuthSloganSection } from '@/components';

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
          <AuthSloganSection />
        </div>
        <div className='bg-primaryBeige flex flex-col items-center justify-center rounded-bl-[28px] rounded-tl-[28px] pb-[30px] pl-[40px] pr-[40px] pt-[50px]'>
          <div>
            <SignUpForm />
          </div>
          {/* <div className='mt-4 w-full'>
            <Button className='mb-4 h-[35px] w-full font-bold'>회원가입</Button>
          </div> */}
          <div className='text-primaryGreen my-3 flex w-full items-center justify-between'>
            <div className='bg-primaryGreen h-px w-[160px]'></div>
            <p className='font-bold'>or</p>
            <div className='bg-primaryGreen h-px w-[160px]'></div>
          </div>
          <div className='flex w-full justify-between'>
            <div>
              <Button className='h-[36px] w-[170px]' variant='nonrounded'>
                <Image
                  src={googleImage}
                  alt='구글 가이드라인 버튼'
                  width={120}
                />
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
