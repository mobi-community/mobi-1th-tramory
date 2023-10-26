'use client';
import { useAtom } from 'jotai';
import Image from 'next/image';

import { isIndividualToggleAtom } from '@/store';
import materialIcon from '@/utils/materialIcon';

import OneFlagInfo from '../OneFlagInfo/OneFlagInfo';

const FlagInfo = ({ data, id }) => {
  const [isIndividualToggle, setIsIndividualToggle] = useAtom(
    isIndividualToggleAtom(id)
  );

  const handleToggleFlags = () => {
    setIsIndividualToggle((prev) => !prev);
  };

  return (
    <>
      <div className='absolute z-20 flex h-[77px] w-[928px] items-center justify-between pl-14 pr-8 font-bold tracking-[.225rem] text-white'>
        <div className='flex items-center'>
          <h1 className='mr-7 text-[22px]'>{data.en}</h1>
          <h1>{data.ko}</h1>
        </div>
        <p onClick={handleToggleFlags} className='cursor-pointer'>
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
      {isIndividualToggle && (
        <div className='my-7 grid grid-cols-5 gap-y-7'>
          {data.continentData.map((item) => (
            <OneFlagInfo key={item.name} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default FlagInfo;