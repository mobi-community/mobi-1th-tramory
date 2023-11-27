'use client';

import { Wrapper } from '@googlemaps/react-wrapper';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from 'ui';

import { getGoogleGeocode } from '@/app/(needLogin)/map/apis/geocoding';
import { CountryInfoConfig } from '@/constants/countryInfo.constants';

import { useCountryInfoModal } from '../../_hooks/useCountryInfoModal';
import { useMap } from '../../_hooks/useMap';
import type { CountryInfoType } from '../../CountryInfoModal.types';
import { getContinentStamp } from '../../utils/getContinentStamp';
import { LayoutForNull } from '../LayoutForNull/LayoutForNull';
import { Map } from '../Map';

export const LayoutForCountry: React.FC = () => {
  const { targetLocation, countryData, setCountryData } = useCountryInfoModal();
  const { text } = CountryInfoConfig;
  const apiKey = process.env.NEXT_PUBLIC_MAP_API_KEY;
  const { setCenter, setZoom } = useMap();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      fetch(`/api/country_info/${targetLocation}`)
        .then((res) => {
          setIsLoading(true);
          return res.json();
        })
        .then((data) => {
          setCountryData(data.data as CountryInfoType);
          getGoogleGeocode(data.data.countryEng).then((res) => {
            if (res.results) {
              console.log('geocode', res.results);
              setCenter(res.results[0].geometry.location);
              setZoom(5);
            }
          });
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error, '국가 정보 데이터를 불러오는 데 실패하였습니다.🥲');
    }
  }, [targetLocation, setCountryData, setCenter, setZoom]);

  const stampImage = (isVisited: boolean) => {
    if (countryData && countryData.continent)
      return (
        <Image
          src={getContinentStamp(countryData.continent, isVisited)}
          alt={countryData.continent + 'stamp'}
          width={isVisited ? 50 : 55}
          height={60}
        />
      );
  };

  const haveHistory = (data: CountryInfoType) => {
    return (
      <div className='text-l grid grid-cols-2 gap-3 font-bold'>
        {data.travelHistory.map((history) => (
          <div key={Math.random() * 10000} className='relative'>
            {stampImage(true)}
            <div className='absolute top-3 text-[11px]'>{history}</div>
          </div>
        ))}
      </div>
    );
  };

  const notHaveHistory = (
    <div className='relative m-auto mt-[-3px] w-[150px] overflow-hidden py-[5px] text-center'>
      <div className='absolute left-3 z-0'>{stampImage(false)}</div>
      <div className='relative z-[100] mb-[3px] text-[10px]'>
        {text.notHaveRecord}
      </div>
      <div className='flex justify-around'>
        <Button className='relative z-[100] block h-[35px] w-[70px] p-0 text-[7px] font-bold'>
          <div className='text-primaryYellow mr-[3px] text-[10px]'>간편</div>{' '}
          <div>{text.record}</div>
        </Button>
        <Link href={'/travel/plan?stepId=1'}>
          <Button className='relative z-[100] block h-[35px] w-[70px] p-0 text-[7px] font-bold'>
            <span className='text-primaryYellow mr-[3px] text-[10px]'>
              상세
            </span>{' '}
            <div>{text.record}</div>
          </Button>
        </Link>
      </div>
    </div>
  );

  if (isLoading) return <div>로딩 중입니다.</div>;

  return countryData ? (
    <div className='relative m-auto w-[90%] items-center'>
      <div>
        <div className='ml-[10px]'>
          <div className='text-base font-medium'>{countryData.countryEng}</div>
          <div className='text-[24px] font-bold'>{countryData.countryKor}</div>
        </div>
        <div className='m-auto mt-[13px] flex justify-between'>
          <div>
            <Image
              src={countryData.flagImage}
              width={120}
              height={80}
              alt='국기 이미지'
            />
          </div>
          <div
            className={`green-scroll w-[180px] overflow-x-hidden overflow-y-${
              countryData.travelHistory && countryData.travelHistory.length
                ? 'scroll'
                : 'hidden'
            } bg-white p-3 py-0`}
          >
            <div className='mb-[3px] text-[14px] font-bold'>
              {text.passport}
            </div>
            {countryData.travelHistory && countryData.travelHistory.length
              ? haveHistory(countryData)
              : notHaveHistory}
          </div>
        </div>
        <Wrapper apiKey={apiKey}>
          <Map style={{ width: '100px', height: '100px' }} />
        </Wrapper>
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
    </div>
  ) : (
    <LayoutForNull />
  );
};
