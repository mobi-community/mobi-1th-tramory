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
        />
        <div>{signupConstants.info}</div>
      </div>
      <div className='flex'>
        <div>
          <Image
            src={signupConstants.image.mainImage}
            width={320}
            alt='signup_main_image'
          />
          <Image
            src={signupConstants.image.subImage}
            width={320}
            alt='signup_sub_image'
          />
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
