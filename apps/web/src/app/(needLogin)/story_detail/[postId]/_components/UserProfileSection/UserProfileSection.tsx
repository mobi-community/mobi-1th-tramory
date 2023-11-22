'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import materialIcon from '@/utils/materialIcon';

import { useStoryDetailPage } from '../../_hooks/useStoryDetailPage';
import fakeImage from '../../_mocks/fake-profile-image.png';
import type { UserProfileSectionProps } from './UserProfileSection.types';

export const UserProfileSection: React.FC<UserProfileSectionProps> = ({
  targetStory,
}) => {
  const { id, user, content } = targetStory;
  /**
   * todo
   * split 에러 해결 필요
   */
  // const formattedDate = content.date.split('T')[0];

  const { likedStatus, setLikedStatus } = useStoryDetailPage(id);

  const handlePostLiked = async () => {
    try {
      const response = await fetch('/story/detail/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ storyId: id, isLiked: likedStatus }),
      });

      const res = await response.json();

      console.log('res', res.data);
      setLikedStatus(res.data.status);
    } catch (error) {
      console.error('좋아요 정보를 전달하는 데 실패했습니다🥲', error);
    }
  };

  if (targetStory) {
    return (
      <div className='mb-[20px] flex w-full flex-col justify-between'>
        <div className='flex w-full items-center justify-between'>
          <div className='text-[24px] font-bold'>{content.title}</div>
          <div className=' text-primaryGray-400 text-[14px]'>
            {/* {formattedDate} */}
          </div>
        </div>
        <div className='flex justify-between'>
          <Link
            className='mt-3 flex w-full cursor-pointer items-center justify-start gap-3'
            href={'/otherspage?tab=1'}
          >
            <div
              style={{ boxShadow: '0 0 3px rgba(0, 0, 0, 0.15)' }}
              className='w-[35px] rounded-full '
            >
              <Image src={fakeImage} alt='fakeProfile' width={35} height={35} />
            </div>
            <div className=' font-semibold'>{user.userId}</div>
          </Link>
          <div className='flex pt-[25px]'>
            <div
              className='border-primaryGray-300 ml-[5px] flex h-[24px] min-w-[60px] cursor-pointer items-center justify-center rounded-[20px] border p-[3px]'
              onClick={handlePostLiked}
            >
              {materialIcon({
                iconName: 'favorite',
                style: `mt-[4px] mr-[5px] text-${
                  likedStatus ? 'primaryYellow' : 'primaryGray-300'
                }`,
                size: 10,
              })}
              <div className='text-primaryGray-300 text-[12px]'>
                {content.liked}
              </div>
            </div>
            <div className='border-primaryGray-300 ml-[5px] flex h-[24px] min-w-[60px] cursor-pointer items-center justify-center rounded-[20px] border p-[3px]'>
              {materialIcon({
                iconName: 'visibility',
                style: 'mt-[4px] mr-[5px] text-primaryGray-300',
                size: 10,
              })}
              <div className='text-primaryGray-300 text-[12px]'>
                {content.viewed}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>LOADING</div>;
  }
};
