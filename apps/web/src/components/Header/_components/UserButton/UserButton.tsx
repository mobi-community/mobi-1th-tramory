'use client';

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from 'ui';

import { headerConfig } from '@/constants';
import materialIcon from '@/utils/materialIcon';

export const UserButton: React.FC = () => {
  // 버튼 클릭 시 발생하는 이벤트 + setIsLogin은 페이지 생성 및 로그아웃 기능 구현 후 추가하겠습니다.
  const { status } = useSession();

  return (
    <Popover>
      <PopoverTrigger>
        {materialIcon({
          iconName: 'account_circle',
          ...headerConfig.iconStyle,
        })}
      </PopoverTrigger>
      <PopoverContent className='min-h-[115px] w-[120px] pt-[8px] text-center text-[15px]'>
        <Link href={headerConfig.href[2].href}>
          <div className={`${headerConfig.settingStyle} border-b-[1px]`}>
            마이페이지
          </div>
        </Link>
        <Link href={headerConfig.href[3].href}>
          <div className={`${headerConfig.settingStyle} border-b-[1px]`}>
            설정하기
          </div>
        </Link>
        <div onClick={() => signOut()} className={headerConfig.settingStyle}>
          {status === 'authenticated' ? '로그아웃' : '로그인'}
        </div>
      </PopoverContent>
    </Popover>
  );
};
