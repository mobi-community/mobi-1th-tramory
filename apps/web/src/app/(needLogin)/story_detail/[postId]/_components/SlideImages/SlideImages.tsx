'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { register } from 'swiper/element/bundle';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SlideImagesProps } from './SlideImages.types';
register();

import Image from 'next/image';

import materialIcon from '@/utils/materialIcon';

export const SlideImages: React.FC<SlideImagesProps> = ({ targetStory }) => {
  const images = targetStory?.content.images;

  return (
    <div className='relatvie z-0 my-10 w-full'>
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={10}
        navigation={{
          nextEl: '.next-button',
          prevEl: '.prev-button',
        }}
      >
        {materialIcon({
          iconName: 'arrow_back_ios',
          size: 50,
          style:
            'prev-button cursor-pointer text-primaryGray-300 hover:text-white absolute left-0 top-[140px] z-10',
        })}
        {images.map((image, i) => (
          <SwiperSlide key={Math.random() * 10000}>
            <div className={`h-[350px] w-[200px]`} key={Math.random() * 1000}>
              <Image src={image} alt={'여행 이미지' + i} fill priority={true} />
            </div>
          </SwiperSlide>
        ))}
        {materialIcon({
          iconName: 'arrow_forward_ios',
          size: 50,
          style:
            'next-button cursor-pointer text-primaryGray-300 hover:text-white absolute right-0 top-[140px] z-10',
        })}
      </Swiper>
    </div>
  );
};
