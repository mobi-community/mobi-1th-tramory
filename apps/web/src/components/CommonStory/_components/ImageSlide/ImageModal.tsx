'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const ImageModal: React.FC<{ images: string[] }> = ({ images }) => {
  const pathName = usePathname();
  const isMyStory = pathName.includes('mypage');

  return (
    <div className='absolute right-[165px] top-0 flex flex-row-reverse'>
      {images.map((image) => (
        <div
          className={`z-100 relative ml-[5px] ${
            isMyStory ? 'h-[160px] w-[160px]' : 'h-[170px] w-[170px]'
          }`}
          key={Math.random() * 10000}
        >
          <Image
            src={image}
            alt='여행 사진'
            key={Math.random() * 1000}
            layout='fill'
            className='rounded-[8px]'
          />
        </div>
      ))}
    </div>
  );
};
