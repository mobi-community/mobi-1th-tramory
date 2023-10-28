'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { register } from 'swiper/element/bundle';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
register();

import { CountryInfoModal } from '@/components';
import type { recomContinentType } from '@/constants';
import materialIcon from '@/utils/materialIcon';

import { OneCountry } from '../OneCountry/OneCountry';

export const ContinentSlide: React.FC<{
  continent: recomContinentType;
}> = ({ continent }) => {
  return (
    <div className='mt-[20px]'>
      <div className='mb-[10px] ml-[80px] flex items-center text-3xl font-bold'>
        # {continent.continent.toUpperCase()}
      </div>
      <div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={10}
          navigation={{
            nextEl: '.next-button',
            prevEl: '.prev-button',
          }}
          style={{ paddingLeft: '80px' }}
        >
          {materialIcon({
            iconName: 'arrow_back_ios',
            size: 50,
            style:
              'prev-button cursor-pointer text-primaryGray-300 hover:text-primaryGray-500 absolute left-0 top-[60px] z-10',
          })}
          {continent.countries.map(({ country, coverImage }) => (
            <SwiperSlide key={country}>
              <OneCountry country={country} coverImage={coverImage} />
              <CountryInfoModal country={country}>{country}</CountryInfoModal>
            </SwiperSlide>
          ))}
          {materialIcon({
            iconName: 'arrow_forward_ios',
            size: 50,
            style:
              'next-button cursor-pointer text-primaryGray-300 hover:text-primaryGray-500 absolute right-0 top-[60px] z-10',
          })}
        </Swiper>
      </div>
    </div>
  );
};
