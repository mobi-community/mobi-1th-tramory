import Image from 'next/image';
import { register } from 'swiper/element/bundle';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import materialIcon from '@/utils/materialIcon';

import { SlideImagesProps } from './SlideImages.types';
register();

export const SlideImages: React.FC<SlideImagesProps> = ({ targetStory }) => {
  const images = targetStory?.content.images;

  return (
    <div className='relatvie z-0 w-full'>
      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={10}
        navigation={{
          nextEl: '.next-button',
          prevEl: '.prev-button',
        }}
        style={{ paddingLeft: '80px', position: 'relative' }}
      >
        {materialIcon({
          iconName: 'arrow_back_ios',
          size: 50,
          style:
            'prev-button cursor-pointer text-primaryGray-300 hover:text-primaryGray-500 absolute left-0 top-[100px] z-10',
        })}
        {images.map((image, i) => (
          <SwiperSlide key={Math.random() * 1000}>
            <div className={`relative h-[240px] w-[240px]`}>
              <Image
                src={image}
                alt={'여행 이미지' + i}
                fill
                sizes='240'
                className='cursor-pointer opacity-70'
                priority={true}
              />
            </div>
          </SwiperSlide>
        ))}
        {materialIcon({
          iconName: 'arrow_forward_ios',
          size: 50,
          style:
            'next-button cursor-pointer text-primaryGray-300 hover:text-primaryGray-500 absolute right-0 top-[100px] z-10',
        })}
      </Swiper>
    </div>
  );
};
