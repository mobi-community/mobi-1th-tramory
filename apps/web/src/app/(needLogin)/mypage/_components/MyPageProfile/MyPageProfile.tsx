import Image from 'next/image';
import { Button } from 'ui';

import profileImage from '/public/images/profile-image.svg';

// import { headerConfig } from '../../../../../constants';
import materialIcon from '../../../../../utils/materialIcon';

export const MyPageProfile = () => {
  return (
    <>
      <div className=' bg-primaryGray-200 bo relative h-[180px] w-full rounded-tl-[80px] pl-12 pr-4 pt-4'>
        <div className='flex items-end justify-end'>
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
        <div className='absolute left-[456px] top-[120px] '>
          <Image
            className='rounded-full'
            src={profileImage}
            alt='default_profile_image'
            width={110}
          />
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
        <div className='mt-1 text-[14px] font-semibold'>User1</div>
        <div className='flex items-center justify-center'>
          <div className='ml-4 text-[12px]'>소개문구를 작성해주세요.</div>
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
