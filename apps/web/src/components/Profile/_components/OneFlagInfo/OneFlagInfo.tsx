import Image from 'next/image';

import type { OneFlagInfoProps } from './OneFlagInfo.types';

const OneFlagInfo = ({ item }: OneFlagInfoProps) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex h-[93px] items-center'>
        <Image src={item.img} width={140} alt='국기 이미지' priority />
      </div>
      <div className='text-primaryGray-500 mt-2 font-bold'>{item.name}</div>
    </div>
  );
};

export default OneFlagInfo;
