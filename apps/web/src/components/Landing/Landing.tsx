import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'ui';

import logo from '/public/images/logo_white.svg';
import { landingConfig } from '@/constants';

import { ConnerLine } from './_components/ConnerLine';

export const Landing = () => {
  return (
    <div>
      <ConnerLine />
      <div className='absolute z-20 ml-16 mt-16'>
        <Image
          src={logo}
          width={160}
          alt='트래모리 로고'
          className='drop-shadow-2xl'
        />
      </div>
      <div className='absolute z-20 w-full'>
        <div className='flex h-screen w-full flex-col items-center justify-center'>
          <div className='mr-40 flex w-full flex-col items-end'>
            <h1
              className='mb-7 text-right text-[52px] font-bold leading-[56px] text-white'
              dangerouslySetInnerHTML={{ __html: landingConfig.title }}
            />
            <p
              className='mb-7 text-right text-[17px] text-white'
              dangerouslySetInnerHTML={{ __html: landingConfig.description }}
            />
            <Link href='/login'>
              <Button
                variant='outline'
                className='rounded-none bg-transparent px-10 py-7 text-lg italic text-white'
              >
                {landingConfig.button}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 z-20 w-full'>
        <ul className='mb-12 flex justify-center text-sm text-white'>
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
