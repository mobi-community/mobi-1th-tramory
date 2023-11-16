'use client';

import Image from 'next/image';

export const ImageModal: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div className={`absolute right-[145px] top-0 flex flex-row-reverse`}>
      {images.map((image) => (
        <div
          className={`z-100 relative ml-[5px] h-[140px] w-[140px]`}
          key={Math.random() * 10000}
        >
          <Image
            src={image}
            alt='여행 사진'
            key={Math.random() * 1000}
            fill
            className='rounded-[8px]'
          />
        </div>
      ))}
    </div>
  );
};
