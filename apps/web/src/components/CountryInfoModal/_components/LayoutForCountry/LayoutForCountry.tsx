'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { Button } from 'ui';

import { CountryInfoConfig } from '@/constants/countryInfo.constants';

import { useCountryInfoModal } from '../../_hooks/useCountryInfoModal';
import { getContinentStamp } from '../../utils/getContinentStamp';

export const LayoutForCountry: React.FC<{ country: string }> = ({
  country,
}) => {
  const { countryData, setCountryData } = useCountryInfoModal();
  const { text } = CountryInfoConfig;

  useEffect(() => {
    try {
      fetch(`/api/country_info/${country}`)
        .then((res) => res.json())
        .then((data) => {
          console.log('데이터 연결 완료', data);
          setCountryData(data.total);
        });
    } catch (error) {
      console.error(error, '국가 정보 데이터를 불러오는 데 실패하였습니다.🥲');
    }
  }, [country, setCountryData]);

  const stampImage = (isVisited: boolean) => {
    if (countryData && countryData.continent)
      return (
        <Image
          src={getContinentStamp(countryData.continent, isVisited)}
          alt={countryData.continent + 'stamp'}
          width={isVisited ? 75 : 70}
          height={90}
        />
      );
  };

  const haveHistory = () => {
    if (countryData && countryData.travelHistory) {
      return (
        <div className='text-l grid grid-cols-3 gap-7 font-bold'>
          {countryData.travelHistory.map((history) => (
            <div key={Math.random() * 10000} className='relative w-[80px]'>
              {stampImage(true)}
              <div className='absolute top-5 text-[14px]'>{history}</div>
            </div>
          ))}
        </div>
      );
    } else {
      return <div>데이터를 불러오는 중입니다.</div>;
    }
  };

  const notHaveHistory = (
    <div className='relative m-auto w-[300px] text-center'>
      <div className='absolute left-3 top-[-10px] z-0'>{stampImage(false)}</div>
      <div className='z-100 relative pt-3'>{text.notHaveRecord}</div>
      <div className='flex justify-around'>
        <Button className='z-100 relative my-[10px] mt-4 font-bold'>
          <span className='text-primaryYellow mr-[3px]'>간편</span>{' '}
          {text.record}
        </Button>
        <Link href={'/travel/plan?stepId=0'}>
          <Button className='z-100 relative my-[10px] mt-4 font-bold'>
            <span className='text-primaryYellow mr-[3px]'>상세</span>{' '}
            {text.record}
          </Button>
        </Link>
      </div>
    </div>
  );

  if (countryData && countryData.travelHistory)
    return (
      <div className='m-auto w-[560px] items-center'>
        <div className='ml-[10px]'>
          <div className='text-xl font-medium'>{countryData.countryEng}</div>
          <div className='mb-[20px] text-[41px] font-bold'>
            {countryData.countryKor}
          </div>
        </div>
        <div className='m-auto flex w-[540px] justify-between'>
          <div className='mt-[13px]'>
            <Image src={countryData.flagImage} width={188} alt='국기 이미지' />
          </div>
          <div
            className={`green-scroll h-[150px] w-[324px] overflow-x-hidden overflow-y-${
              countryData.travelHistory.length ? 'scroll' : 'hidden'
            } bg-white p-3 py-1`}
          >
            <div className='mb-[10px] text-[18px] font-bold'>
              {text.passport}
            </div>
            {countryData.travelHistory.length ? haveHistory() : notHaveHistory}
          </div>
        </div>
        <div className='bg-primaryGray-200 m-auto my-[40px] h-[233px] w-[546px]'>
          지도
        </div>
        <div className='mb-[10px] text-center'>
          <Link
            href={{
              pathname: '/story_community',
              query: { keyword: countryData.countryKor },
            }}
          >
            <Button className='font-bold'>
              <span className='text-primaryYellow mr-[5px]'>
                {countryData.countryKor}
              </span>{' '}
              {text.community}
            </Button>
          </Link>
        </div>
      </div>
    );
};
