// 'use client';
// import { useSearchParams } from 'next/navigation';

// import { travelPlanStep1config } from '@/constants';

// import Step1Title from '../_components/Step1Title/Step1Title';
// import Step2When from '../_components/Step2When/Step2When';
// import Step3What from '../_components/Step3What/Step3What';
// import Step4How from '../_components/Step4How/Step4How';
// import TravelLayout from '../TravelLayout';

// const TravelPlan = () => {
//   const params = useSearchParams();
//   const search = params.get('stepId');

//   let StepComponent;

//   switch (search) {
//     case '0':
//       StepComponent = <Step1Title config={travelPlanStep1config} />;
//       break;
//     case '1':
//       StepComponent = (
//         <TravelLayout>
//           <Step2When label='떠나시나요' />
//         </TravelLayout>
//       );
//       break;
//     case '2':
//       StepComponent = (
//         <TravelLayout>
//           <Step3What label='떠나시나요?' />
//         </TravelLayout>
//       );
//       break;
//     case '3':
//       StepComponent = (
//         <TravelLayout>
//           <Step4How label='계획할' />
//         </TravelLayout>
//       );
//       break;
//   }
//   return <div>{StepComponent}</div>;
// };

// export default TravelPlan;
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
