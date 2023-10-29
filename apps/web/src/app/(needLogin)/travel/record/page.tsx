'use client';
import { useSearchParams } from 'next/navigation';

import { travelRecordStep1config } from '@/constants';

import Step1Title from '../_components/Step1Title/Step1Title';
import TravelRecordTemplete from './stepTemplate';

const TravelPlan = () => {
  const params = useSearchParams();
  const search = params.get('stepId');

  let StepComponent;

  if (search == '0') {
    StepComponent = <Step1Title config={travelRecordStep1config} />;
  } else {
    StepComponent = <TravelRecordTemplete search={search} />;
  }

  return <div>{StepComponent}</div>;
};

export default TravelPlan;
