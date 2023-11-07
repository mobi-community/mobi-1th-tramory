import Link from 'next/link';

import { ModeSwitchButton, UserButton } from '@/components/Header/_components';
import { headerConfig } from '@/constants';
import materialIcon from '@/utils/materialIcon';

export const MyPageHeader = () => {
  return (
    <div className='mb-2 mt-4 flex justify-end'>
      <div className='flex'>
        <ModeSwitchButton />
        <div className='flex pt-2'>
          <Link href={headerConfig.href[0].href}>
            {materialIcon({
              iconName: 'auto_stories',
              ...headerConfig.iconStyle,
            })}
          </Link>
          <Link href={headerConfig.href[1].href}>
            {materialIcon({
              iconName: 'notifications',
              ...headerConfig.iconStyle,
            })}
          </Link>
          <UserButton />
        </div>
      </div>
    </div>
  );
};
