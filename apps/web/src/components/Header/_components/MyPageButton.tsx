'use client';

import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from 'ui';

import materialIcon from '../../../utils/materialIcon';

export const MyPageButton: React.FC = () => {
  return (
    <Popover>
      <PopoverTrigger>
        {materialIcon({
          iconName: 'account_circle',
          style: 'text-primaryGray-400 cursor-pointer pl-5',
          size: 32,
        })}
      </PopoverTrigger>
      <PopoverContent className='h-[115px] w-[120px] pt-[5px] text-center text-[15px]'>
        <div className='h-[35px] w-[88px] border-b-[1px] pt-[7px]'>
          마이페이지
        </div>
        <div className='h-[35px]  w-[88px] border-b-[1px] pt-[7px]'>
          설정하기
        </div>
        <div className='h-[35px]  w-[88px] pt-[7px]'>로그아웃</div>
      </PopoverContent>
    </Popover>
  );
};
