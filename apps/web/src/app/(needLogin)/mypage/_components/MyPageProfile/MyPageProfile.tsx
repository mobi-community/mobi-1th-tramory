import { useAtomValue } from 'jotai';
import Image from 'next/image';
import { Button } from 'ui';

// import profileImage from '/public/images/profile-image.svg';
import { userProfileInfoAtom } from '@/store/mypage.atoms';
import materialIcon from '@/utils/materialIcon';

export const MyPageProfile = () => {
  const userInfo = useAtomValue(userProfileInfoAtom);

  console.log(userInfo);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${userInfo.backgroundImage})` }}
        className='bg-primaryGray-200 relative h-[180px] w-full rounded-tl-[80px] bg-center pl-12 pr-4 pt-4'
      >
        <div className='flex items-end justify-end'>
          <Button
            className='h-[25px] w-[70px] text-[10px]'
            variant='roundednavyWhite'
            weight='bold'
            size='xsm'
          >
            이미지 수정
          </Button>
          <Button
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
              src={userInfo.profileImage}
              alt='default_profile_image'
              fill
            />
          </div>
        </div>
      </div>
      <div className='flex items-end justify-end px-5 pt-5'>
        <Button
          className=' bg-primaryBlue-700 w-[90px] rounded-3xl text-[14px] font-bold text-white'
          variant='roundednavy'
        >
          지도
        </Button>
      </div>
      <div className=' text-primaryBlue-700 flex flex-col items-center justify-center'>
        <div className='mt-1 text-[14px] font-semibold'>
          {userInfo.nickName}
        </div>
        <div className='flex items-center justify-center'>
          <div className='ml-4 text-[12px]'>{userInfo.content}</div>
          <div>
            <div className='border-primaryBlue-700 hover:bg-primaryBlue-700 ml-2 flex h-[18px] w-[18px] cursor-pointer items-center justify-center rounded-full border p-1 hover:text-white hover:opacity-80'>
              {materialIcon({
                iconName: 'edit',
                size: 14,
              })}
            </div>
          </div>
        </div>
        <div className='mt-2'>
          <Button
            className='h-[25px] w-[70px] text-[10px]'
            variant='roundednavy'
            size='xsm'
          >
            이미지 수정
          </Button>
          <Button
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
