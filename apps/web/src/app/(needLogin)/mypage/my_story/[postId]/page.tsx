'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { Button } from 'ui';

import { Line } from '@/components';
import { detailPageConfig } from '@/constants/detailPage.constans';

import {
  DetailCardSection,
  DropdownFormSection,
  MapSections,
  SlideImages,
  UserProfileSection,
} from '../../_components';
import { planDescription } from '../_mocks';

const MyStoryPlanDetailPage = () => {
  const { postId } = useParams();
  const params = useSearchParams();
  const page = params.get('page');

  const isPlanPage = page === 'plan';

  const planDetail = planDescription.filter((detail) => detail.id === postId);

  return (
    <div className='ml-16 flex w-[60vw] flex-col items-center justify-center p-20'>
      <UserProfileSection planDetail={planDetail[0]} />
      <Line />
      <DetailCardSection planDetail={planDetail[0]} />
      <div className='mt-4 flex w-full justify-start gap-4'>
        <Button
          size='xsm'
          className=' border-primaryGray-500 text-primaryGray-500 hover:bg-primaryGray-300 hover:border-primaryGray-300 h-[35px] w-[115px] rounded-2xl border-opacity-40 hover:text-white'
          variant='roundednavy'
        >
          {isPlanPage ? '계획' : '기록'} {detailPageConfig.buttons[0]}
        </Button>
        <Button
          size='xsm'
          className=' border-primaryGray-500 text-primaryGray-500 hover:bg-primaryGray-300 hover:border-primaryGray-300 h-[35px] w-[115px] rounded-2xl border-opacity-40 hover:text-white'
          variant='roundednavy'
        >
          {isPlanPage ? '계획' : '기록'} {detailPageConfig.buttons[1]}
        </Button>
      </div>
      <MapSections />
      <SlideImages />
      <DropdownFormSection />
    </div>
  );
};

export default MyStoryPlanDetailPage;
