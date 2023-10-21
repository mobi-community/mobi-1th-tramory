import Image from 'next/image';

import { signupConstants } from '../../constants/sign_up.constants';
import { SignUpForm } from './_components';

const SignUpPage = () => {
  return (
    <div className='w-auto'>
      <div className='flex justify-between'>
        <Image
          src={signupConstants.image.mainLogo}
          width={120}
          alt='Logo_Image'
          priority
        />
        <div>{signupConstants.info}</div>
      </div>
      <div className='flex flex-row'>
        <div>
          <Image
            src={signupConstants.image.mainImage}
            width={320}
            alt='signup_main_image'
            priority
          />
          <Image
            src={signupConstants.image.subImage}
            width={320}
            alt='signup_sub_image'
            priority
          />
        </div>
        <div>
          <SignUpForm />
          <div>
            <button>회원가입</button>
            <Image
              src={signupConstants.image.subImage2}
              width={320}
              alt='signup_sub_image2'
              priority
            />
          </div>
          <div>
            <button>Sign In with Google</button>
            <button>로그인 하러 가기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
