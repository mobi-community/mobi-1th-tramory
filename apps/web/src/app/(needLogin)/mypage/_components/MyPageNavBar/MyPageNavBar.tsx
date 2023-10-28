'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import { mypageNavConfig } from '@/constants';
import { useAtom } from 'jotai';
import { isOpenNavAtom } from '@/store';

export const MyPageNavBar = () => {
  const [isOpenNav, setIsOpenNav] = useAtom(isOpenNavAtom);

  const router = useRouter();
  const pathName = usePathname();

  const handleMoveToPage = (href, title) => {
    setIsOpenNav((prev) => {
      if (prev[title]) {
        return {};
      }
      return {
        [title]: true,
      };
    });
    router.push(href);
  };

  const handleMoveToSubPage = (href, event) => {
    event.stopPropagation();
    router.push(href);
  };

  const isParentActive = (parentHref) => {
    if (
      parentHref === '/mypage/my_story/plan' &&
      pathName.includes('/mypage/my_story')
    ) {
      return 'text-primaryBlue-700';
    }

    if (
      parentHref === '/mypage/setting/account' &&
      pathName.includes('/mypage/setting')
    ) {
      return 'text-primaryBlue-700';
    }

    return '';
  };

  const handleIsActive = (href) => {
    if (pathName === href) return 'text-primaryBlue-700';
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
        {mypageNavConfig.nav.map((nav, index) => (
          <div
            key={index}
            onClick={() => {
              handleMoveToPage(nav.href, nav.title);
            }}
            className=' mb-4 flex flex-col'
          >
            <div className='flex justify-between'>
              <div className={`${isParentActive(nav.href)}  flex`}>
                <span className='material-icons-outlined'>{nav.icon}</span>
                <div className='ml-2'>{nav.title}</div>
              </div>
              {nav.subNav && (
                <span className='material-icons-outlined mr-8'>
                  {isOpenNav[nav.title] ? 'arrow_drop_down' : 'arrow_drop_up'}
                </span>
              )}
            </div>
            {isOpenNav[nav.title] &&
              nav.subNav?.map((sub, index) => (
                <div
                  onClick={(event) => {
                    handleMoveToSubPage(sub.href, event);
                  }}
                  className={`${handleIsActive(sub.href)} ml-8 mt-4`}
                  key={index}
                >
                  <div>{sub.title}</div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};
