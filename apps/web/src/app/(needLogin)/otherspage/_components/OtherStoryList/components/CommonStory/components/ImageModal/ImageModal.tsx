'use client';

import Image, { StaticImageData } from 'next/image';

export const ImageModal: React.FC<{ images: StaticImageData[] }> = ({
  images,
}) => {
  return (
    <div className='absolute right-[120px] top-0 flex flex-row-reverse'>
      {images.map((image) => (
        <div
          className='z-100 relative ml-[9px] h-[120px] w-[110px] '
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
