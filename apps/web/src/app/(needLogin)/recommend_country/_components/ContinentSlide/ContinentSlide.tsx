'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import { register } from 'swiper/element/bundle';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
register();

import { useSetAtom } from 'jotai';

import { CountryInfoModal } from '@/components';
import type { recomContinentType } from '@/constants';
import { isCountryInfoModalOpen } from '@/store';
import materialIcon from '@/utils/materialIcon';

export const ContinentSlide: React.FC<{
  continent: recomContinentType;
}> = ({ continent }) => {
  const formattedContinent = continent.continent.toUpperCase();

  const formatCountryName = (country: string) => country.toUpperCase();

  const setIsModalOpen = useSetAtom(isCountryInfoModalOpen);

  return (
    <div className='mt-[20px]'>
      <div className='mb-[10px] ml-[80px] flex items-center text-3xl font-bold'>
        # {formattedContinent}
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
          {continent.countries.map(({ country, coverImage }, index) => (
            <div
              className='z-20'
              key={`${country}-${index}`}
              onClick={() => setIsModalOpen(true)}
            >
              <SwiperSlide>
                <div className={`relative h-[180px] w-[270px] bg-black`}>
                  <Image
                    src={coverImage}
                    alt={country}
                    layout='fill'
                    sizes='200'
                    className='cursor-pointer opacity-70'
                  />
                  <div className='absolute right-2 top-[80%] text-2xl font-bold text-white'>
                    {formatCountryName(country)}
                  </div>
                </div>
              </SwiperSlide>
              <CountryInfoModal>
                <div>{country}</div>
              </CountryInfoModal>
            </div>
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
