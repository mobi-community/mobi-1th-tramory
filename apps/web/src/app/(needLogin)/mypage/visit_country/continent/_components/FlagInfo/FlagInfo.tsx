'use client';
import { atom, useAtom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import Image from 'next/image';
import { useEffect } from 'react';

import materialIcon from '@/utils/materialIcon';

import OneFlagInfo from '../OneFlagInfo/OneFlagInfo';

const isToggleAtom = atomFamily(() => atom(false));

const FlagInfo = ({ data, id }) => {
  const [isToggle, setIsToggle] = useAtom(isToggleAtom(id));

  useEffect(() => {
    console.log('test', data.continentData);
  }, []);

  const handleToggleFlags = () => {
    setIsToggle((prev) => !prev);
  };

  return (
    <>
      <div className='absolute z-20 flex w-[928px] items-center justify-between pl-14 pr-8 font-bold tracking-[.225rem] text-white'>
        <div className='flex items-center'>
          <h1 className='mr-7 text-[22px]'>{data.en}</h1>
          <h1>{data.ko}</h1>
        </div>
        <button onClick={handleToggleFlags}>
          {materialIcon({
            iconName: 'expand_more',
            size: 32,
          })}
        </button>
      </div>
      <div className='absolute z-10 h-[76px] w-[928px] bg-gradient-to-t from-black to-transparent opacity-30'></div>
      <Image
        className='relative'
        key={id}
        src={data.bannerImg}
        width={928}
        alt='대륙별 국기 이미지'
        priority
      />
      {isToggle && (
        <div>
          {data.continentData.map((item) => (
            <OneFlagInfo key={item.name} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default FlagInfo;
