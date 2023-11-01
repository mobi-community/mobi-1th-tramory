'use client';
import { useAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button, Input } from 'ui';

import { userProfileInfoAtom } from '@/store/mypage.atoms';
import { profileStateAtom } from '@/store/mypageProfile.atoms';
import materialIcon from '@/utils/materialIcon';

import { useImageUpload } from '../../_hooks/useImageUpload';

export const MyPageProfile = () => {
  const [profileState, setProfileState] = useAtom(userProfileInfoAtom);
  const [tempContent, setTempContent] = useState(profileState.content);

  const bgImageUploadProps = useImageUpload(
    profileStateAtom,
    'backgroundImage'
  );
  const profileImageUploadProps = useImageUpload(
    profileStateAtom,
    'profileImage'
  );

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${
            bgImageUploadProps.imageUrl || profileState.backgroundImage
          })`,
        }}
        className='bg-primaryGray-200 relative h-[180px] w-full rounded-tl-[80px] bg-center pl-12 pr-4 pt-4'
      >
        <div className='flex items-end justify-end'>
          <input
            type='file'
            accept='image/*'
            ref={bgImageUploadProps.inputRef}
            className=' hidden'
            onChange={bgImageUploadProps.handleUploadImage}
          />
          <Button
            onClick={bgImageUploadProps.handleUploadButtonClick}
            className='h-[25px] w-[70px] text-[10px]'
            variant='roundednavyWhite'
            weight='bold'
            size='xsm'
          >
            이미지 수정
          </Button>
          <Button
            onClick={bgImageUploadProps.handleDeleteImage}
            className='ml-2 h-[25px] w-[70px] text-[10px]'
            variant='roundednavyWhite'
            weight='bold'
            size='xsm'
          >
            이미지 삭제
          </Button>
        </div>
        <div className='absolute left-[456px] top-[120px] '>
          <div className='relative h-[110px] w-[110px]'>
            <Image
              style={{ objectFit: 'cover' }}
              className='rounded-full'
              src={
                profileImageUploadProps.imageUrl || profileState.profileImage
              }
              alt='default_profile_image'
              fill
            />
          </div>
        </div>
      </div>

      <div className='flex items-end justify-end px-5 pt-5'>
        <Link href={'/map'}>
          <Button
            className=' bg-primaryBlue-700 w-[90px] rounded-3xl text-[14px] font-bold text-white'
            variant='roundednavy'
          >
            지도
          </Button>
        </Link>
      </div>
      <div className=' text-primaryBlue-700 flex flex-col items-center justify-center'>
        <div className='mt-1 text-[14px] font-semibold'>
          {profileState.nickName}
        </div>
        <div className='flex items-center justify-center'>
          <div>
            {profileState.isProfileContentEdit ? (
              <div className='flex items-center gap-2'>
                <Input
                  className=' border-primaryGray-300 h-[20px] w-[200px] border'
                  onChange={(e) => {
                    setTempContent(e.target.value);
                  }}
                  value={tempContent}
                />
                <Button
                  className='h-[20px] w-[35px] text-[10px]'
                  variant='roundednavy'
                  size='xsm'
                  onClick={() => {
                    setProfileState((prev) => ({
                      ...prev,
                      content: tempContent,
                      isProfileContentEdit: false,
                    }));
                  }}
                >
                  저장
                </Button>
                <Button
                  className='h-[20px] w-[35px] text-[10px]'
                  variant='roundednavy'
                  size='xsm'
                  onClick={() => {
                    setTempContent(profileState.content);
                    setProfileState((prev) => ({
                      ...prev,
                      isProfileContentEdit: false,
                    }));
                  }}
                >
                  취소
                </Button>
              </div>
            ) : (
              <div className='flex'>
                <div className='ml-4 text-[12px]'>{profileState.content}</div>
                <div
                  onClick={() => {
                    setProfileState((prev) => ({
                      ...prev,
                      isProfileContentEdit: true,
                    }));
                  }}
                  className='border-primaryBlue-700 hover:bg-primaryBlue-700 ml-2 flex h-[18px] w-[18px] cursor-pointer items-center justify-center rounded-full border p-1 hover:text-white hover:opacity-80'
                >
                  {materialIcon({
                    iconName: 'edit',
                    size: 14,
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='mt-2'>
          <input
            type='file'
            accept='image/*'
            ref={profileImageUploadProps.inputRef}
            className=' hidden'
            onChange={profileImageUploadProps.handleUploadImage}
          />
          <Button
            onClick={profileImageUploadProps.handleUploadButtonClick}
            className='h-[25px] w-[70px] text-[10px]'
            variant='roundednavy'
            size='xsm'
          >
            이미지 수정
          </Button>
          <Button
            onClick={profileImageUploadProps.handleDeleteImage}
            className='ml-2 h-[25px] w-[70px] text-[10px]'
            variant='roundednavy'
            size='xsm'
          >
            이미지 삭제
          </Button>
        </div>
      </div>
    </>
  );
};
