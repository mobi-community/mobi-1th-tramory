'use client';

import { useSearchParams } from 'next/navigation';

import { travelRecordStep1config } from '@/constants';

import Step1Title from '../_components/Step1Title/Step1Title';
import TravelRecordTemplete from './travelRecordTemplete';

const TravelPlan = () => {
  const params = useSearchParams();
  const search = params.get('stepId');

  const StepComponent =
    search === '0' ? (
      <Step1Title config={travelRecordStep1config} />
    ) : (
      <TravelRecordTemplete search={search} />
    );

  return <div>{StepComponent}</div>;
};

export default TravelPlan;
