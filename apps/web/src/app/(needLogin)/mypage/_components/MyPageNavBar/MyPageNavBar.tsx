'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

import { mypageNavConfig } from '@/constants';

export const MyPageNavBar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const router = useRouter();
  const pathName = usePathname();

  const handleMoveToPage = (href, title) => {
    if (title === openMenu) {
      setOpenMenu(null);
    } else {
      setOpenMenu(title);
    }
    router.push(href);
  };

  const handleIsActive = (href) => {
    return pathName === href;
  };

  return (
    <div className='border-primaryGray-300 text-primaryGray-400 h-[108vh] w-[280px] border-r-[1px] border-opacity-60 font-medium'>
      <div className='pb-6 pl-10 pt-8'>
        <Image
          src={mypageNavConfig.logoImage}
          alt='main_logo_image'
          width={150}
        />
      </div>
      <div className='border-primaryGray-300 border-t-[1px] opacity-60'></div>
      <div className='pl-12 pt-8'>
        {mypageNavConfig.nav.map((nav) => (
          <div
            key={nav.title}
            onClick={() => {
              handleMoveToPage(nav.href, nav.title);
            }}
            className=' mb-4 flex flex-col'
          >
            <div className='flex justify-between'>
              <div
                className={`${
                  handleIsActive(nav.href)
                    ? 'text-primaryBlue-700 flex'
                    : 'flex'
                }`}
              >
                <span className='material-icons-outlined'>{nav.icon}</span>
                <div className='ml-2'>{nav.title}</div>
              </div>
              {nav.subNav && (
                <span className='material-icons-outlined mr-8'>
                  {openMenu ? 'arrow_drop_down' : 'arrow_drop_up'}
                </span>
              )}
            </div>
            {openMenu === nav.title &&
              nav.subNav?.map((sub) => (
                <div className='ml-8 mt-4' key={sub.title}>
                  <div>{sub.title}</div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};
