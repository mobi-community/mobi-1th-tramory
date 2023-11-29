'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'ui';

import grayScale from '/public/assets/passport_stamp/gray_scale/n_passport_stamp01.png';
import { useIndiviualToggle } from '@/hooks/useIndiviualToggle';
import { isIndividualFlagToggleAtom } from '@/store';
import materialIcon from '@/utils/materialIcon';

import OneFlagInfo from '../OneFlagInfo/OneFlagInfo';
import type { FlagInfoDataProps } from './FlagInfo.types';

export const FlagInfo = ({ data, id }: FlagInfoDataProps) => {
  const { toggleState: isIndividualToggle, handleToggle } = useIndiviualToggle(
    isIndividualFlagToggleAtom,
    id
  );

  // 발급 국가가 있을 때
  const IsContinentData = (
    <div className='my-7 grid grid-cols-5 gap-y-7'>
      {data.continentData.map((item) => (
        <OneFlagInfo key={item.name} item={item} />
      ))}
    </div>
  );

  // 발급 국가가 없을 때
  const emptyContinentData = (
    <div className='relative flex items-center justify-center p-[72px]'>
      <Image
        src={grayScale}
        width={100}
        alt={'그레이 스케일 국가 도장'}
        className='absolute left-32'
      />
      <p className='text-primaryGray-500 z-10 mr-4 font-medium'>
        아직 방문한 국가가 없으신가요? 스토리를 구경하며 여행 계획을 세워보아요!
      </p>
      <Button weight='bold'>
        <Link href='/story_community'>스토리 보러가기</Link>
      </Button>
    </div>
  );

  return (
    <>
      <div className='absolute z-20 flex h-[77px] w-[928px] items-center justify-between pl-14 pr-8 font-bold tracking-[.225rem] text-white'>
        <div className='flex items-center'>
          <h1 className='mr-7 text-[22px]'>{data.en}</h1>
          <h1>{data.ko}</h1>
        </div>
        <p onClick={handleToggle} className='cursor-pointer'>
          {materialIcon({
            iconName: isIndividualToggle ? 'expand_less' : 'expand_more',
            size: 32,
          })}
        </p>
      </div>
      <div className='absolute z-10 h-[76.6px] w-[928px] bg-gradient-to-t from-black to-transparent opacity-30'></div>
      <Image
        className='relative'
        key={id}
        src={data.bannerImg}
        width={928}
        alt='대륙별 국기 이미지'
        priority
      />
      {isIndividualToggle &&
        (data.continentData.length > 0 ? IsContinentData : emptyContinentData)}
    </>
  );
};
