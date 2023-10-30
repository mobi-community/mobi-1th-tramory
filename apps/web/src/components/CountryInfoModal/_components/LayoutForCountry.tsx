import Image from 'next/image';
import { Button } from 'ui';

import { CountryInfoConfig } from '@/constants/countryInfo.constants';

import { CountryInfoType } from '../CountryInfoModal.types';
import { getContinentStamp } from '../utils/getContinentStamp';

export const LayoutForCountry: React.FC<{ countryData: CountryInfoType }> = ({
  countryData,
}) => {
  const { continent, countryEng, countryKor, flagImage, travelHistory } =
    countryData;

  const { text } = CountryInfoConfig;

  const stampImage = (isVisited: boolean) => (
    <Image
      src={getContinentStamp(continent, isVisited)}
      alt={continent + 'stamp'}
      width={isVisited ? 75 : 70}
      height={90}
    />
  );

  const haveHistory = (
    <div className='text-l grid grid-cols-3 gap-5 font-bold'>
      {travelHistory.map((history) => (
        <div key={Math.random() * 10000} className='relative w-[80px]'>
          {stampImage(true)}
          <div className='absolute top-5'>{history}</div>
        </div>
      ))}
    </div>
  );

  const notHaveHistory = (
    <div className='relative m-auto w-[300px] text-center'>
      <div className='absolute left-3 top-[-10px] z-0'>{stampImage(false)}</div>
      <div className='z-100 relative pt-3'>{text.notHaveRecord}</div>
      <Button className='my-[10px] mt-4 font-bold'>{text.record}</Button>
    </div>
  );

  return (
    <div className='m-auto w-[560px] items-center'>
      <div className='ml-[10px]'>
        <div className='text-xl font-medium'>{countryEng}</div>
        <div className='mb-[20px] text-[41px] font-bold'>{countryKor}</div>
      </div>
      <div className='m-auto flex w-[540px] justify-between'>
        <div className='mt-[13px]'>
          <Image src={flagImage} width={188} alt='국기 이미지' />
        </div>
        <div
          className={`green-scroll h-[150px] w-[324px] overflow-x-hidden overflow-y-${
            travelHistory.length ? 'scroll' : 'hidden'
          } bg-white p-3 py-1`}
        >
          <div className='mb-[10px] text-[18px] font-bold'>{text.passport}</div>
          {travelHistory.length ? haveHistory : notHaveHistory}
        </div>
      </div>
      <div className='bg-primaryGray-200 m-auto my-[40px] h-[233px] w-[546px]'>
        지도
      </div>
      <div className='mb-[10px] text-center'>
        <Button className='font-bold'>
          <span className='text-primaryYellow mr-[5px]'>{countryKor}</span>
          {text.community}
        </Button>
      </div>
    </div>
  );
};
