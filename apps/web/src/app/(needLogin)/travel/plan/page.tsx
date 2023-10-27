'use client';
import { useSearchParams } from 'next/navigation';

import { travelPlanStep1config } from '@/constants';

import Step1Title from '../_components/Step1Title/Step1Title';
import TravelPlanTemplete from './stepTemplete';

const TravelPlan = () => {
  const params = useSearchParams();
  const search = params.get('stepId');

  let StepComponent;

  if (search == '0') {
    StepComponent = <Step1Title config={travelPlanStep1config} />;
  } else {
    StepComponent = <TravelPlanTemplete search={search} />;
  }

  return <div>{StepComponent}</div>;
};

export default TravelPlan;
