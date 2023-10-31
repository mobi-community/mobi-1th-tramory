import { travelPlanStep2config } from '@/constants/travelStep2.constants';
import { travelPlanStep3config } from '@/constants/travelStep3.constants';
import { travelPlanStep4config } from '@/constants/travelStep4.constants';

import Step2When from '../_components/Step2When/Step2When';
import Step3What from '../_components/Step3What/Step3What';
import Step4How from '../_components/Step4How/Step4How';
import TravelLayout from '../TravelLayout';

const TravelPlanTemplete = ({ search }) => {
  let StepComponent;

  switch (search) {
    case '1':
      StepComponent = <Step2When config={travelPlanStep2config} />;
      break;
    case '2':
      StepComponent = <Step3What config={travelPlanStep3config} />;
      break;
    case '3':
      StepComponent = <Step4How config={travelPlanStep4config} />;
      break;
  }
  return (
    <>
      <TravelLayout>{StepComponent}</TravelLayout>
    </>
  );
};

export default TravelPlanTemplete;
