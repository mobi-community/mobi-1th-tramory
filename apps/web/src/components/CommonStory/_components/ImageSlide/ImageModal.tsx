'use client';

import Image, { StaticImageData } from 'next/image';

export const ImageModal: React.FC<{ images: StaticImageData[] }> = ({
  images,
}) => {
  // if (isImageModalOpen)
  return (
    <div className='absolute right-[175px] top-0 flex flex-row-reverse'>
      {images.map((image) => (
        <div
          className='z-100 relative ml-[5px] h-[170px] w-[170px]'
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
