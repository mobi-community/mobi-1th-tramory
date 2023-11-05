'use client';

import Image, { StaticImageData } from 'next/image';

import { useCountryInfoModal } from '@/components';

export const OneCountry: React.FC<{
  country: string;
  coverImage: StaticImageData;
}> = ({ country, coverImage }) => {
  const { openCountryInfoModal, targetLocation } = useCountryInfoModal(country);

  return (
    <>
      <div
        className={`relative h-[180px] w-[270px] bg-black`}
        onClick={() => {
          console.log(targetLocation, 'clicked');
          openCountryInfoModal();
        }}
      >
        <Image
          src={coverImage}
          alt={country}
          fill
          sizes='200'
          className='cursor-pointer opacity-70'
          priority={true}
        />
        <div className='absolute right-2 top-[80%] text-2xl font-bold text-white'>
          {country.toUpperCase()}
        </div>
      </div>
    </>
  );
};
