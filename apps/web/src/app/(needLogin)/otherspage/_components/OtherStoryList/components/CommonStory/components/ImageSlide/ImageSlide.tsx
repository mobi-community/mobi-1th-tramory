'use client';

import { useAtom } from 'jotai';
import Image, { StaticImageData } from 'next/image';

import { storyModalAtom } from '@/store';
import materialIcon from '@/utils/materialIcon';

import { ImageModal } from '../ImageModal/ImageModal';

export const ImageSlide: React.FC<{
  images: StaticImageData[];
  postId: number;
}> = ({ images, postId }) => {
  const mainImage = images[0];

  const [isImageModalOpen, setIsImageModalOpen] = useAtom(
    storyModalAtom(postId)
  );

  return (
    <div className='relative mt-5'>
      <div className='flex flex-row-reverse'>
        <div
          className='relative h-[120px] w-[110px] '
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
          className='bg-primaryGray-100/[80%] hover:bg-primaryGray-400 absolute right-[8px] top-[95px] h-[18px] w-[18px] rounded-[50%] pb-[6px] transition-all duration-150'
          onClick={() =>
            setIsImageModalOpen(({ postId, isOpen }) => ({
              postId: postId,
              isOpen: !isOpen,
            }))
          }
        >
          {materialIcon({
            iconName: 'add',
            style: 'text-primaryGray-400 cursor-pointer hover:text-white',
            size: 18,
          })}
        </div>
      )}
      {isImageModalOpen.isOpen && <ImageModal images={images.slice(1)} />}
    </div>
  );
};
