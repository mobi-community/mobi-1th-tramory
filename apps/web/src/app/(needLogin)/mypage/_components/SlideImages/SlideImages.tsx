import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import materialIcon from '@/utils/materialIcon';

export const SlideImages = ({ storyDetail }) => {
  const images = storyDetail?.content?.images;

  return (
    <div className='relative z-0'>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={false}
        navigation={{
          nextEl: '.next-button',
          prevEl: '.prev-button',
        }}
        modules={[Navigation]}
      >
        {materialIcon({
          iconName: 'arrow_back_ios',
          size: 50,
          style:
            'prev-button cursor-pointer text-white hover:text-primaryGray-500 absolute left-0 top-[140px] z-20',
        })}
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='h-[350px] w-[200px]'>
              <Image src={image} alt={`Image ${index + 1}`} fill />
            </div>
          </SwiperSlide>
        ))}
        {materialIcon({
          iconName: 'arrow_forward_ios',
          size: 50,
          style:
            'next-button cursor-pointer text-white hover:text-primaryGray-500 absolute right-0 top-[140px] z-20',
        })}
      </Swiper>
    </div>
  );
};
