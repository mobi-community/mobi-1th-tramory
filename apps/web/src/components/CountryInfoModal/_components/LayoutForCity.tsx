import Image from 'next/image';
import { Button } from 'ui';

import type { cityInfoType } from '../CountryInfoModal.types';

/*
    @ Todo
    DB 구조가 나오면 국가/도시 구분하는 방법을 파악하여
    레이아웃 적용 방법을 수정해보도록 하겠습니다.
*/

export const LayoutForCity: React.FC<{ cityData: cityInfoType }> = ({
  cityData,
}) => {
  const { countryEng, cityEng, countryKor, cityKor, flagImage } = cityData;

  return (
    <div className='m-auto w-[560px] items-center text-center'>
      <div>
        <div className='text-[26px] font-medium'>
          {countryEng}, {cityEng}
        </div>
        <div className='mb-[20px] text-[41px] font-bold'>
          {countryKor}, {cityKor}
        </div>
        <div>
          <Image
            src={flagImage}
            width={188}
            alt='국기 이미지'
            className='m-auto'
          />
        </div>
      </div>
      <div className='bg-primaryGray-200 my-[40px] h-[233px] w-[546px]'>
        지도
      </div>
      <Button className='font-bold'>
        <span className='text-primaryYellow mr-[5px]'>{countryKor}</span> 스토리
        보러가기
      </Button>
    </div>
  );
};
