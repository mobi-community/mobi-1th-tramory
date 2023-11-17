'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { travelPlanStep1config, travelPlanStep5config } from '@/constants';

import Step1Title from '../_components/Step1Title/Step1Title';
import Step5Sumup from '../_components/Step5Sumup/Step5Sumup';
import TravelPlanTemplete from './travelPlanTemplete';

const TravelPlan = () => {
  const router = useRouter();
  const params = useSearchParams();
  const stepId = params.get('stepId');

  useEffect(() => {
    const validStepIds = ['1', '2', '3', '4', '5'];

    if (!validStepIds.includes(stepId)) {
      router.push('/404');
    }
  }, [stepId]);

  let StepComponent;

  if (stepId === '1') {
    StepComponent = <Step1Title config={travelPlanStep1config} />;
  } else if (stepId === '5') {
    StepComponent = <Step5Sumup config={travelPlanStep5config} />;
  } else {
    StepComponent = <TravelPlanTemplete search={stepId} />;
  }

  return <div>{StepComponent}</div>;
};

export default TravelPlan;
