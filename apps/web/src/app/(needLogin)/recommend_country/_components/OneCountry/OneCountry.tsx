'use client';

import Image, { StaticImageData } from 'next/image';

import { useCountryInfoModal } from '@/components';

export const OneCountry: React.FC<{
  country: string;
  coverImage: StaticImageData;
}> = ({ country, coverImage }) => {
  const { openCountryInfoModal } = useCountryInfoModal(country);

  return (
    <div
      className={`relative h-[140px] w-[160px] bg-black`}
      onClick={() => {
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
  );
};
