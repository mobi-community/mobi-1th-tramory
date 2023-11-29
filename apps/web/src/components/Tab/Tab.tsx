'use client';

import { useAtomValue, useSetAtom } from 'jotai';
import { usePathname, useRouter } from 'next/navigation';

import { selectTabAtom, tabStateFamily } from '@/store/tab.atoms';
import materialIcon from '@/utils/materialIcon';

import { TabProps } from './Tab.types';

export const Tab = ({ children, slug }: TabProps) => {
  const pathName = usePathname();
  const router = useRouter();
  const selectTab = useSetAtom(selectTabAtom);
  const tabState = useAtomValue(tabStateFamily(slug));
  const handleTabClick = () => {
    selectTab(slug);
    router.push(`${pathName}?filter=${slug}`);
    if (slug === '') router.push(`${pathName}`);
  };

  const bgColorClass = tabState.state ? 'bg-white' : 'bg-primaryGray-200';
  const zIndexClass = tabState.state ? 'z-10' : 'z-0';

  const shadowStyle = {
    boxShadow:
      '0px -5px 10px -3px rgba(0, 0, 0, 0.1), 10px 0px 20px -3px rgba(0, 0, 0, 0.1)',
  };

  const islikeStoryPage = pathName === '/mypage/like_story';
  const isLike = slug === 'LIKES';

  return (
    <div
      onClick={handleTabClick}
      className='text-primaryGray-400 flex w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-tr-[10px] font-bold '
    >
      <div
        style={shadowStyle}
        className={`${bgColorClass} ${zIndexClass} hover:bg-primaryGray-300 border-primaryGray-200 flex h-[40px] w-[320px] translate-x-[30px] skew-x-[-20deg] transform items-center justify-center rounded-tl-[12px] border border-b-white transition-all duration-300 hover:text-black`}
      >
        {islikeStoryPage &&
          materialIcon({
            iconName: isLike ? 'favorite' : 'visibility',
            size: 16,
            style: 'mr-1 skew-x-[+20deg]',
          })}
        <p className='mr-7 skew-x-[+20deg] transform text-[14px]'>{children}</p>
      </div>
    </div>
  );
};
