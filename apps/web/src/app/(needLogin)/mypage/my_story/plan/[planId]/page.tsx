'use client';

import { useParams } from 'next/navigation';

import { Line } from '@/components';

import { planDescription } from '../../_mocks';
import {
  Buttons,
  DetailCardSection,
  DropdownFormSection,
  MapSections,
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
      <Buttons />
      <MapSections />
      <DropdownFormSection />
    </div>
  );
};

export default MyStoryPlanDetailPage;
