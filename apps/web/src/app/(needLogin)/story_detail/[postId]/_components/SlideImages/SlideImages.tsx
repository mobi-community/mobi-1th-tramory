'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { register } from 'swiper/element/bundle';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
register();

import Image from 'next/image';

import materialIcon from '@/utils/materialIcon';

import { SlideImagesProps } from './SlideImages.types';
register();

export const SlideImages: React.FC<SlideImagesProps> = ({ targetStory }) => {
  const images = targetStory?.content.images;

  return (
    <div className='relative mt-[20px]'>
      <div className='relatvie z-0 mb-[40px]'>
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={1}
          navigation={{
            nextEl: '.next-button',
            prevEl: '.prev-button',
          }}
          style={{ paddingLeft: '45px' }}
        >
          {materialIcon({
            iconName: 'arrow_back_ios',
            size: 50,
            style:
              'prev-button cursor-pointer text-primaryGray-300 hover:text-primaryGray-500 absolute left-0 top-[35px] z-10',
          })}
          {images.map((image, i) => (
            <SwiperSlide key={Math.random() * 10000}>
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
            </SwiperSlide>
          ))}
          {materialIcon({
            iconName: 'arrow_forward_ios',
            size: 50,
            style:
              'next-button cursor-pointer text-primaryGray-300 hover:text-primaryGray-500 absolute right-0 top-[35px] z-10',
          })}
        </Swiper>
      </div>
    </div>
  );
};
