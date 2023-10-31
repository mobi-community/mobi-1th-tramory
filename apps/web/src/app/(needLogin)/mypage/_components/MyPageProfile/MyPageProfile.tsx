'use client';
import { useAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Button, Input } from 'ui';

import profileImage from '/public/images/profile-image.svg';
import {
  mypageProfileBgImageAtom,
  mypageProfileContent,
  mypageProfileImageAtom,
} from '@/store/mypageProfile.atoms';
import materialIcon from '@/utils/materialIcon';

export const MyPageProfile = () => {
  const [profilebg, setProfilebg] = useAtom(mypageProfileBgImageAtom);
  const [profileImg, setProfileImg] = useAtom(mypageProfileImageAtom);
  const [profileContent, setProfileContent] = useAtom(mypageProfileContent);
  const [tempContent, setTempContent] = useState(profileContent.content);
  const bgInputRef = useRef<HTMLInputElement>(null);
  const profileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadImage = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'bg' | 'profile'
  ) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    const file = e.target.files[0];

    if (type === 'bg') {
      setProfilebg(file);
    } else {
      setProfileImg(file);
    }
  };

  const handleDeleteImage = (type: 'bg' | 'profile') => {
    if (type === 'bg' && profilebg) {
      URL.revokeObjectURL(bgImageUrl);
      setProfilebg(null);
      if (bgInputRef.current) {
        bgInputRef.current.value = '';
      }
    } else if (type === 'profile' && profileImg) {
      URL.revokeObjectURL(profileImgUrl);
      setProfileImg(null);
      if (profileInputRef.current) {
        profileInputRef.current.value = '';
      }
    }
  };

  const handleuploadImagebutton = (type: 'bg' | 'profile') => {
    if (type === 'bg' && bgInputRef.current) {
      bgInputRef.current.click();
    } else if (type === 'profile' && profileInputRef.current) {
      profileInputRef.current.click();
    }
  };

  const bgImageUrl = profilebg ? URL.createObjectURL(profilebg) : null;
  const profileImgUrl = profileImg
    ? URL.createObjectURL(profileImg)
    : profileImage;

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImageUrl})` }}
        className=' bg-primaryGray-200 relative h-[180px] w-full rounded-tl-[80px] pl-12 pr-4 pt-4'
      >
        <div className='flex items-end justify-end'>
          <input
            type='file'
            accept='image/*'
            ref={bgInputRef}
            className=' hidden'
            onChange={(e) => {
              handleUploadImage(e, 'bg');
            }}
          />
          <Button
            onClick={() => {
              handleuploadImagebutton('bg');
            }}
            className='h-[25px] w-[70px] text-[10px]'
            variant='roundednavy'
            size='xsm'
          >
            이미지 수정
          </Button>
          <Button
            onClick={() => {
              handleDeleteImage('bg');
            }}
            className='ml-2 h-[25px] w-[70px] text-[10px]'
            variant='roundednavy'
            size='xsm'
          >
            이미지 삭제
          </Button>
        </div>
        <div className='absolute left-[456px] top-[120px] '>
          {/* 비율 수정하기 */}
          <Image
            className='rounded-full'
            src={profileImgUrl ? profileImgUrl : profileImage}
            alt='default_profile_image'
            width={110}
            height={110}
          />
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
        <div className='mt-1 text-[14px] font-semibold'>User1</div>
        <div className='flex items-center justify-center'>
          <div>
            {profileContent.isEdit ? (
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
                  // onchange로 변경된 값으로 저장하고 isEdit을 false로 바꿈
                  onClick={() => {
                    setProfileContent({
                      content: tempContent,
                      isEdit: false,
                    });
                  }}
                >
                  저장
                </Button>
                <Button
                  className='h-[20px] w-[35px] text-[10px]'
                  variant='roundednavy'
                  size='xsm'
                  onClick={() => {
                    setTempContent(profileContent.content);
                    setProfileContent((prev) => ({
                      ...prev,
                      isEdit: false,
                    }));
                  }}
                >
                  취소
                </Button>
              </div>
            ) : (
              <div className='flex'>
                <div className='ml-4 text-[12px]'>{profileContent.content}</div>
                <div
                  onClick={() => {
                    setProfileContent((prev) => ({
                      ...prev,
                      isEdit: true,
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
            ref={profileInputRef}
            className=' hidden'
            onChange={(e) => {
              handleUploadImage(e, 'profile');
            }}
          />
          <Button
            onClick={() => {
              handleuploadImagebutton('profile');
            }}
            className='h-[25px] w-[70px] text-[10px]'
            variant='roundednavy'
            size='xsm'
          >
            이미지 수정
          </Button>
          <Button
            onClick={() => {
              handleDeleteImage('profile');
            }}
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
