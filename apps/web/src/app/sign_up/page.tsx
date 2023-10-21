import Image from 'next/image';
import { Button } from 'ui';

import { signupConstants } from '../../constants/sign_up.constants';
import { SignUpForm } from './_components';

const SignUpPage = () => {
  return (
    <div className=' flex h-screen w-auto flex-col items-center justify-center'>
      <div className='flex w-[775px] items-center justify-between font-semibold'>
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
            width={280}
            alt='signup_main_image'
            priority
          />
          <Image
            src={signupConstants.image.subImage}
            width={280}
            alt='signup_sub_image'
            priority
          />
        </div>
        <div className='bg-primaryBeige rounded-bl-[28px] rounded-tl-[28px] p-7'>
          <SignUpForm />
          <div>
            <Button>회원가입</Button>
            <Image
              src={signupConstants.image.subImage2}
              width={320}
              alt='signup_sub_image2'
              priority
            />
          </div>
          <div>
            <Button variant='nonrounded'>Sign In with Google</Button>
            <Button variant='nonrounded'>로그인 하러 가기</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
