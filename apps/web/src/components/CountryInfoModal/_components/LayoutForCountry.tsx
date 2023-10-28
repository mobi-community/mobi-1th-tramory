import Image from 'next/image';
import { Button } from 'ui';

import { CountryInfoType } from '../CountryInfoModal.types';
import { getContinentStamp } from '../utils/getContinentStamp';

export const LayoutForCountry: React.FC<{ countryData: CountryInfoType }> = ({
  countryData,
}) => {
  const { continent, countryEng, countryKor, flagImage, travelHistory } =
    countryData;

  const stampImage = (isVisited: boolean) => (
    <Image
      src={getContinentStamp(continent, isVisited)}
      alt={continent + 'stamp'}
      width={75}
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
    <div className='relative m-auto text-center'>
      {stampImage(false)}
      <div className='absolute top-5'>이곳을 여행하신 적이 있나요?</div>
      <Button className='my-[10px] font-bold'>스토리 기록하기</Button>
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
        <div className='green-scroll h-[150px] w-[324px] overflow-y-scroll bg-white p-3'>
          <div className='mb-[10px] text-xl font-bold'>Passport</div>
          {travelHistory.length ? haveHistory : notHaveHistory}
        </div>
      </div>
      <div className='bg-primaryGray-200 m-auto my-[40px] h-[233px] w-[546px]'>
        지도
      </div>
      <div className='mb-[10px] text-center'>
        <Button className='font-bold'>
          <span className='text-primaryYellow mr-[5px]'>{countryKor}</span>
          스토리 보러가기
        </Button>
      </div>
    </div>
  );
};
