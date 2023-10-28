import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'ui';

import logo from '/public/images/logo_white.svg';
import { landingConfig } from '@/constants';

const Landing = () => {
  return (
    <div>
      <div className='absolute z-20 ml-12 mt-12'>
        <div className='h-0.5 w-16 bg-white'></div>
        <div className='h-16 w-0.5 bg-white'></div>
      </div>
      <div className='absolute right-0 z-20 mr-12 mt-12'>
        <div className='h-0.5 w-16 bg-white'></div>
        <div className='absolute right-0 h-16 w-0.5 bg-white'></div>
      </div>
      <div className='absolute bottom-0 z-20 mb-12 ml-12'>
        <div className='h-16 w-0.5 bg-white'></div>
        <div className='h-0.5 w-16 bg-white'></div>
      </div>
      <div className='absolute bottom-0 right-0 z-20 mb-12 mr-12'>
        <div className='h-16 w-0.5 bg-white'></div>
        <div className='absolute right-0 h-0.5 w-16 bg-white'></div>
      </div>
      <div className='absolute z-20 ml-20 mt-20'>
        <Image src={logo} alt='트래모리 로고' className='drop-shadow-2xl' />
      </div>
      <div className='absolute z-20 w-full'>
        <div className='flex h-screen w-full flex-col items-center justify-center'>
          <div className='mr-40 flex w-full flex-col items-end'>
            <h1
              className='mb-9 text-right text-6xl font-bold text-white'
              dangerouslySetInnerHTML={{ __html: landingConfig.title }}
            />
            <p
              className='mb-9 text-right text-xl text-white'
              dangerouslySetInnerHTML={{ __html: landingConfig.description }}
            />
            <Button
              variant='outline'
              className='rounded-none bg-transparent px-12 py-8 text-lg italic text-white'
            >
              {landingConfig.button}
            </Button>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 z-20 w-full'>
        <ul className='mb-12 flex justify-center text-white'>
          {landingConfig.footer.map((link) => (
            <Link key={link.title} href={link.href} className='mr-8'>
              {link.title}
            </Link>
          ))}
          <li>{landingConfig.copyright}</li>
        </ul>
      </div>
      <div className='absolute z-10 h-screen w-full bg-gradient-to-t from-black to-transparent opacity-40'></div>
      <Image
        src={landingConfig.landingBgImage}
        alt='랜딩 페이지 이미지'
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default Landing;
