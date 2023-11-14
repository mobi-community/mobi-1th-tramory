'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { travelRecordStep1config } from '@/constants';

import Step1Title from '../_components/Step1Title/Step1Title';
import TravelRecordTemplete from './travelRecordTemplete';

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

  const StepComponent =
    stepId === '1' ? (
      <Step1Title config={travelRecordStep1config} />
    ) : (
      <TravelRecordTemplete search={stepId} />
    );

  return <div>{StepComponent}</div>;
};

export default TravelPlan;
