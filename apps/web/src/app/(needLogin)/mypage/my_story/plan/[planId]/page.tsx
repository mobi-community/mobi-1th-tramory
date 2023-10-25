'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Button } from 'ui';

import { Line } from '@/components';
import { detailPageConfig } from '@/constants/detailPage.constans';

import { planDescription } from '../../_mocks';
import fakeImage from '../../_mocks/fake-profile-image.png';
import DetailCardSection from './_components/DetailCardSection/DetailCardSection';

const MyStoryPlanDetailPage = () => {
  const { planId } = useParams();

  const planDetail = planDescription.filter((detail) => detail.id === planId);

  console.log(planDetail);
  return (
    <div className='ml-16 flex w-[60vw] flex-col items-center justify-center p-20'>
      <div className='flex w-full items-center justify-between'>
        <div className='text-[24px] font-bold'>{planDetail[0].title}</div>
        <div className=' text-primaryGray-400 text-[14px]'>
          {planDetail[0].date}
        </div>
      </div>
      <div className='mt-3 flex w-full items-center justify-start gap-3'>
        <div
          style={{ boxShadow: '0 0 3px rgba(0, 0, 0, 0.15)' }}
          className='w-[35px] rounded-full '
        >
          <Image src={fakeImage} alt='fakeProfile' width={35} height={35} />
        </div>
        <div className=' font-semibold'>kei_123</div>
      </div>
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
      <div className='bg-primaryGray-200 mt-5 h-[300px] w-full'>지도 위치</div>
    </div>
  );
};

export default MyStoryPlanDetailPage;
