'use client';

import { useAtom } from 'jotai';
import Image, { StaticImageData } from 'next/image';

import { storyModalAtom } from '@/store';
import materialIcon from '@/utils/materialIcon';

import { ImageModal } from './ImageModal';

export const ImageSlide: React.FC<{
  images: StaticImageData[];
  postId: number | string;
}> = ({ images, postId }) => {
  const mainImage = images[0];

  const [isImageModalOpen, setIsImageModalOpen] = useAtom(
    storyModalAtom(postId)
  );

  return (
    <div className='relative'>
      <div className='flex flex-row-reverse'>
        <div
          className='relative h-[170px] w-[170px]'
          key={Math.random() * 10000}
        >
          <Image
            src={mainImage}
            alt='대표 여행 사진'
            key={Math.random() * 1000}
            layout='fill'
            className='rounded-[8px]'
          />
        </div>
      </div>
      {images.length > 1 && (
        <div
          className='bg-primaryGray-100/[80%] hover:bg-primaryGray-400 absolute right-[5px] top-[140px] h-[25px] w-[25px] rounded-[50%] p-[2.5px] transition-all duration-150'
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.stopPropagation();
            setIsImageModalOpen(({ postId, isOpen }) => ({
              postId: postId,
              isOpen: !isOpen,
            }));
          }}
        >
          {materialIcon({
            iconName: 'add',
            style: 'text-primaryGray-400 cursor-pointer hover:text-white',
            size: 20,
          })}
        </div>
      )}
      {isImageModalOpen.isOpen && <ImageModal images={images.slice(1)} />}
    </div>
  );
};
