'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button } from 'ui';

const OthersPageContainer = ({}) => {
  // 빈 객체를 초기로 할당할 수 없음
  const [userInfo, setUserInfo] = useState({
    nickName: '',
    info: '',
    profileImage: '',
  });

  const getOthersUserInfo = async () => {
    try {
      const res = await fetch('/api/othersUserInfo');
      const data = await res.json();

      setUserInfo(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOthersUserInfo();
  }, []);

  return (
    <>
      <div className='mt-3 flex justify-center'>
        <div className='h-auto w-[1024px] rounded-tl-[80px]  border-l border-r border-t shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'>
          <div className=' bg-primaryGray-200 bo relative h-[180px] w-full rounded-tl-[80px] pl-12 pr-4 pt-4'>
            <div className='absolute left-[50px] top-[140px] '>
              <Image
                className='rounded-full'
                src={userInfo.profileImage}
                alt='default_profile_image'
                width={110}
              />
            </div>
            <div className='flex'>
              <div className='ml-[128px] mt-[180px] w-[300px]'>
                <div className='mt-1 text-[14px] font-semibold'>
                  {userInfo.nickName}
                </div>
                <div className='text-[12px]'>{userInfo.info}</div>
              </div>
              <div className='ml-[500px] flex items-end'>
                <Button
                  className=' bg-primaryBlue-700 w-[90px] rounded-3xl text-[14px] font-bold text-white'
                  variant='roundednavy'
                >
                  지도
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OthersPageContainer;
