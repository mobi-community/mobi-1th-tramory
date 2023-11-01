'use client';

import { useAtom } from 'jotai';
import Image, { StaticImageData } from 'next/image';
import { usePathname } from 'next/navigation';

import { storyModalAtom } from '@/store';
import materialIcon from '@/utils/materialIcon';

import { ImageModal } from './ImageModal';

export const ImageSlide: React.FC<{
  images: StaticImageData[];
  postId: number | string;
}> = ({ images, postId }) => {
  const mainImage = images[0];
  const pathName = usePathname();
  const isMyStory = pathName.includes('mypage');

  const [isImageModalOpen, setIsImageModalOpen] = useAtom(
    storyModalAtom({ postId, isOpen: false })
  );

  return (
    <div className='relative mr-8'>
      <div className='flex flex-row-reverse'>
        <div
          className={`relative ${
            isMyStory ? 'h-[150px] w-[150px]' : 'h-[170px] w-[170px]'
          }`}
          key={Math.random() * 10000}
        >
          <Image
            src={mainImage}
            alt='대표 여행 사진'
            key={Math.random() * 1000}
            fill
            className='rounded-[8px]'
          />
        </div>
      </div>
      {images.length > 1 && (
        <div
          className='bg-primaryGray-100/[80%] hover:bg-primaryGray-400 absolute right-[5px] top-[140px] h-[25px] w-[25px] rounded-[50%] p-[2.5px] transition-all duration-150'
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.stopPropagation();
            setIsImageModalOpen(({ isOpen }) => ({
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
