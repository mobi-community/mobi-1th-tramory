import Link from 'next/link';

import { MapPageConfig } from '@/constants';
import materialIcon from '@/utils/materialIcon';

export const AnimatedArrow: React.FC = () => {
  return (
    <div className='text-primaryGray-400 z-1 absolute bottom-[10px] left-1/2 m-auto -translate-x-1/2 transform cursor-pointer'>
      <Link
        href='/recommend_country'
        className='hover:text-primaryGreen m-auto w-[250px] font-medium hover:font-bold'
      >
        <div className='text-[14px]'>{MapPageConfig.arrowText}</div>
        {materialIcon({
          iconName: 'keyboard_double_arrow_down',
          size: 30,
          style:
            'hover:text-primaryGreen transition-all duration-200 ease-linear hover:scale-[1.2]',
        })}
      </Link>
    </div>
  );
};
