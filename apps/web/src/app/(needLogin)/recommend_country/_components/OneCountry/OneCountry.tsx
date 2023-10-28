import { useSetAtom } from 'jotai';
import Image, { StaticImageData } from 'next/image';

import { isCountryInfoModalOpen } from '@/store';

export const OneCountry: React.FC<{
  country: string;
  coverImage: StaticImageData;
}> = ({ country, coverImage }) => {
  const setIsCountryInfoOpen = useSetAtom(isCountryInfoModalOpen({ country }));

  return (
    <>
      <div
        className={`relative h-[180px] w-[270px] bg-black`}
        onClick={() =>
          setIsCountryInfoOpen(() => ({
            country: country,
            isOpen: true,
          }))
        }
      >
        <Image
          src={coverImage}
          alt={country}
          layout='fill'
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
