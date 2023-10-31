'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { register } from 'swiper/element/bundle';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
register();

import { useAtomValue } from 'jotai';

import { CountryInfoModal, LayoutForCountry } from '@/components';
import SimpleRecordModal from '@/components/SimpleRecordModal/SimpleRecordModal';
import type { recomContinentType } from '@/constants';
import { targetLocationAtom } from '@/store';
import materialIcon from '@/utils/materialIcon';

import { countryDataMock } from '../../_mocks';
import { OneCountry } from '../OneCountry/OneCountry';

export const ContinentSlide: React.FC<{
  continent: recomContinentType;
}> = ({ continent }) => {
  const targetLocation = useAtomValue(targetLocationAtom);
  const { continent: continentName, countries } = continent;

  return (
    <div className='relative mt-[20px]'>
      <div className='mb-[10px] ml-[80px] flex items-center text-3xl font-bold'>
        # {continentName.toUpperCase()}
      </div>
      <div className='relatvie z-0'>
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
          {countries.map(({ country, coverImage }) => (
            <SwiperSlide key={country}>
              <OneCountry country={country} coverImage={coverImage} />
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
      <CountryInfoModal country={targetLocation}>
        {/* <LayoutForCity cityData={cityDataMock} /> */}
        <LayoutForCountry countryData={countryDataMock} />
      </CountryInfoModal>
      <SimpleRecordModal />
    </div>
  );
};
