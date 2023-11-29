import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type ImageSliderProps = {
  images: string[];
};

const ImageSlider = ({ images }: ImageSliderProps) => {
  return (
    <div className='absolute left-[-50%] right-[-50%] z-20 mt-5'>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={1}
        slidesPerView={4}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={400}
              height={200}
              className='rounded-2xl bg-gradient-to-t from-black to-transparent object-cover opacity-90'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
