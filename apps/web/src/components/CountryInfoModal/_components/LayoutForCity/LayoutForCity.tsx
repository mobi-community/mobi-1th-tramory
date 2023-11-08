'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { Button } from 'ui';

import { CountryInfoConfig } from '@/constants';

import { useCountryInfoModal } from '../../_hooks/useCountryInfoModal';

/*
    @ Todo
    DB 구조가 나오면 국가/도시 구분하는 방법을 파악하여
    레이아웃 적용 방법을 수정해보도록 하겠습니다.
*/

export const LayoutForCity: React.FC<{ city: string }> = ({ city }) => {
  const { cityData, setCityData } = useCountryInfoModal();
  const { text } = CountryInfoConfig;

  useEffect(() => {
    try {
      fetch(`/api/city_info/${city}`)
        .then((res) => res.json())
        .then((data) => {
          setCityData(data.total);
        });
    } catch (error) {
      console.error(error, '도시 정보 데이터를 불러오는 데 실패하였습니다.🥲');
    }
  }, [city, setCityData]);

  if (cityData)
    return (
      <div className='m-auto w-[90%] items-center text-center'>
        <div>
          <div className='text-base font-medium'>
            {cityData.countryEng}, {cityData.cityEng}
          </div>
          <div className='mb-[10px] text-[24px] font-bold'>
            {cityData.countryKor}, {cityData.cityKor}
          </div>
          <div>
            <Image
              src={cityData.flagImage}
              width={120}
              height={80}
              alt='국기 이미지'
              className='m-auto'
            />
          </div>
        </div>
        <div className='bg-primaryGray-200 m-auto my-[15px] h-[150px]'>
          지도
        </div>
        <Link
          href={{
            pathname: '/story_community',
            query: { keyword: cityData.countryKor },
          }}
        >
          <Button className='font-bold'>
            <span className='text-primaryYellow mr-[5px]'>
              {cityData.countryKor}
            </span>{' '}
            {text.community}
          </Button>
        </Link>
      </div>
    );
};
