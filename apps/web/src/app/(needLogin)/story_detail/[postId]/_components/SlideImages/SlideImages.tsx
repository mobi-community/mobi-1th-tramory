import Image from 'next/image';
import { register } from 'swiper/element/bundle';

import { SlideImagesProps } from './SlideImages.types';
register();

export const SlideImages: React.FC<SlideImagesProps> = ({ targetStory }) => {
  const images = targetStory?.content.images;

  return (
    <div className='z-0 flex w-full justify-between'>
      {images.map((image, i) => (
        <div
          className={`relative h-[240px] w-[240px]`}
          key={Math.random() * 1000}
        >
          <Image
            src={image}
            alt={'여행 이미지' + i}
            fill
            sizes='240'
            priority={true}
          />
        </div>
      ))}
    </div>
  );
};
