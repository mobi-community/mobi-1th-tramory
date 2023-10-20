import Image from 'next/image';
import Link from 'next/link';

import landingBg from './_mock/landing_bg.jpg';
import logo from './_mock/logo_white.svg';

const Landing = () => {
  return (
    <div>
      <div className='absolute z-20 ml-12 mt-12'>
        <div className='h-0.5 w-20 bg-white'></div>
        <div className='h-20 w-0.5 bg-white'></div>
      </div>
      <div className='absolute right-0 z-20 mr-12 mt-12'>
        <div className='h-0.5 w-20 bg-white'></div>
        <div className='absolute right-0 h-20 w-0.5 bg-white'></div>
      </div>
      <div className='absolute bottom-0 z-20 mb-12 ml-12'>
        <div className='h-20 w-0.5 bg-white'></div>
        <div className='h-0.5 w-20 bg-white'></div>
      </div>
      <div className='absolute bottom-0 right-0 z-20 mb-12 mr-12'>
        <div className='h-20 w-0.5 bg-white'></div>
        <div className='absolute right-0 h-0.5 w-20 bg-white'></div>
      </div>
      <div className='absolute z-20 ml-20 mt-20'>
        <Image src={logo} alt='트래모리 로고' className='drop-shadow-2xl' />
      </div>
      <div className='absolute z-20 w-full'>
        <div className='flex h-screen w-full flex-col items-center justify-center'>
          <div className='mr-40 flex w-full flex-col items-end'>
            <h1 className='mb-9 text-right text-7xl font-bold text-white'>
              Tramory, <br />
              Your Travel Memories.
            </h1>
            <p className='text-right text-2xl text-white'>
              특별한 나만의 여행을 기록하고 공유하세요 <br />
              여행을 떠나보세요, 당신만의 방식으로
            </p>
            <button className='text-right text-white'>Start the jorney</button>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 z-20 w-full'>
        <ul className='mb-12 flex justify-center text-lg text-white'>
          <Link href={'/'} className='mr-8'>
            Contact
          </Link>
          <Link href={'/'} className='mr-8'>
            Terms of Use
          </Link>
          <Link href={'/'} className='mr-8'>
            Privacy Policy
          </Link>
          <li>© 2023 Tramory. All rights reserved.</li>
        </ul>
      </div>
      <div className='absolute z-10 h-screen w-full bg-gradient-to-t from-black to-transparent opacity-40'></div>
      <Image
        src={landingBg}
        alt='랜딩 페이지 이미지'
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default Landing;
