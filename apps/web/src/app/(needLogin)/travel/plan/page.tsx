'use client';

import { useSearchParams } from 'next/navigation';

import { travelPlanStep1config } from '@/constants';

import Step1Title from '../_components/Step1Title/Step1Title';
import TravelPlanTemplete from './travelPlanTemplete';

const TravelPlan = () => {
  const params = useSearchParams();
  const search = params.get('stepId');

  // `search`가 '0'이면 Step1Title을 사용, 그렇지 않으면 TravelPlanTemplete를 사용
  const StepComponent =
    search === '0' ? (
      <Step1Title config={travelPlanStep1config} />
    ) : (
      <TravelPlanTemplete search={search} />
    );

  return <div>{StepComponent}</div>;
};

export default TravelPlan;
