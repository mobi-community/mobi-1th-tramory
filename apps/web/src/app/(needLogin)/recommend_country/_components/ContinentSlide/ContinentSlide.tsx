'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { recomContinentType } from '@/constants';

export const ContinentSlide: React.FC<{ continent: recomContinentType }> = ({
  continent,
}) => {
  const formattedContinent = continent.continent.toUpperCase();

  const formatCountryName = (country: string) => country.toUpperCase();

  return (
    <div className='mt-[30px]'>
      <div className='mb-[20px] ml-[60px] text-3xl font-bold'>
        # {formattedContinent}
      </div>
      <div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={4}
          pagination={{ clickable: true }}
          navigation
        >
          {continent.countries.map(({ id, country, coverImage }) => (
            <SwiperSlide key={id} className='ml-[60px]'>
              <div className={`relative h-[200px] w-[290px] bg-black`}>
                <Image
                  src={coverImage}
                  alt={country}
                  layout='fill'
                  sizes='200'
                  className='cursor-pointer opacity-70'
                />
                <div className='absolute right-3 top-40 text-2xl font-bold text-white'>
                  {formatCountryName(country)}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
