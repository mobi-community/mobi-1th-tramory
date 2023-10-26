'use client';

import { useParams } from 'next/navigation';
import { Button } from 'ui';

import { Line } from '@/components';
import { detailPageConfig } from '@/constants/detailPage.constans';

import { planDescription } from '../../_mocks';
import {
  DetailCardSection,
  DropdownFormSection,
  UserProfileSection,
} from './_components';

const MyStoryPlanDetailPage = () => {
  const { planId } = useParams();
  const planDetail = planDescription.filter((detail) => detail.id === planId);

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
          계획 {detailPageConfig.buttons[0]}
        </Button>
        <Button
          size='xsm'
          className=' border-primaryGray-500 text-primaryGray-500 hover:bg-primaryGray-300 hover:border-primaryGray-300 h-[35px] w-[115px] rounded-2xl border-opacity-40 hover:text-white'
          variant='roundednavy'
        >
          계획 {detailPageConfig.buttons[1]}
        </Button>
      </div>
      <div className='bg-primaryGray-200 mb-4 mt-5 h-[300px] w-full'>
        지도 위치
      </div>
      <DropdownFormSection />
    </div>
  );
};

export default MyStoryPlanDetailPage;
