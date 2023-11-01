'use client';

import Image, { StaticImageData } from 'next/image';
import { usePathname } from 'next/navigation';

export const ImageModal: React.FC<{ images: StaticImageData[] }> = ({
  images,
}) => {
  const pathName = usePathname();
  const isMyStory = pathName.includes('mypage');

  return (
    <div className='absolute right-[155px] top-0 flex flex-row-reverse'>
      {images.map((image) => (
        <div
          className={`z-100 relative ml-[5px] ${
            isMyStory ? 'h-[150px] w-[150px]' : 'h-[170px] w-[170px]'
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
  // );
};
