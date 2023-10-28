'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { mypageNavConfig } from '@/constants';
import { useAtom } from 'jotai';
import { isOpenNavAtom } from '@/store';

export const MyPageNavBar = () => {
  const [isOpenNav, setIsOpenNav] = useAtom(isOpenNavAtom);
  const activeState = 'text-primaryBlue-700';
  const subActiveState = 'text-primaryBlue-700 bg-primaryBlue-200';
  const router = useRouter();
  const pathName = usePathname();

  const handleMoveToPage = (href: string, title: string) => {
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

  const handleMoveToSubPage = (
    href: string,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    router.push(href);
  };

  const handleIsActive = (href: string) => {
    if (pathName === href) return subActiveState;
  };

  const isParentActive = (parentHref: string) => {
    if (
      parentHref === '/mypage/my_story/plan' &&
      pathName.includes('/mypage/my_story')
    ) {
      return activeState;
    }

    if (
      parentHref === '/mypage/setting/account' &&
      pathName.includes('/mypage/setting')
    ) {
      return activeState;
    }
    if (pathName === parentHref) return activeState;

    return '';
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
            className=' mb-4 flex cursor-pointer flex-col'
          >
            <div className='flex justify-between'>
              <div className={`${isParentActive(nav.href)} flex`}>
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
                  className={`${handleIsActive(
                    sub.href
                  )} hover:bg-primaryBlue-100 mt-2 flex w-[190px] items-center rounded-3xl py-2 pl-9`}
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
