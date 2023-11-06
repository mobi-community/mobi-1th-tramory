import { motion } from 'framer-motion';
import Link from 'next/link';

import { MapPageConfig } from '@/constants';
import materialIcon from '@/utils/materialIcon';

export const AnimatedArrow: React.FC = () => {
  return (
    <div className='text-primaryGray-400 m-auto cursor-pointer'>
      <Link
        href='/recommend_country'
        className='hover:text-primaryGreen m-auto w-[250px] font-medium hover:font-bold'
      >
        {MapPageConfig.arrowText}
        <motion.div
          initial={{ scale: 1, y: 0 }}
          animate={{ scale: 1, y: [0, 10, 0] }}
          transition={{ repeat: Infinity, repeatDelay: 0.2 }}
        >
          {materialIcon({
            iconName: 'keyboard_double_arrow_down',
            size: 33,
            style: 'hover:text-primaryGreen',
          })}
        </motion.div>
      </Link>
    </div>
  );
};
