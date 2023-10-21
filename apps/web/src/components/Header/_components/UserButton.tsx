'use client';

import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from 'ui';

import { headerConfig } from '../../../constants';
import materialIcon from '../../../utils/materialIcon';

export const UserButton: React.FC = () => {
  // 버튼 클릭 시 발생하는 이벤트는 페이지 생성 및 로그아웃 기능 구현 후 추가하겠습니다.
  return (
    <Popover>
      <PopoverTrigger>
        {materialIcon({
          iconName: 'account_circle',
          ...headerConfig.iconStyle,
        })}
      </PopoverTrigger>
      <PopoverContent className='min-h-[115px] w-[120px] pt-[8px] text-center text-[15px]'>
        <div className={`${headerConfig.settingStyle} border-b-[1px]`}>
          마이페이지
        </div>
        <div className={`${headerConfig.settingStyle} border-b-[1px]`}>
          설정하기
        </div>
        <div className={headerConfig.settingStyle}>로그아웃</div>
      </PopoverContent>
    </Popover>
  );
};
