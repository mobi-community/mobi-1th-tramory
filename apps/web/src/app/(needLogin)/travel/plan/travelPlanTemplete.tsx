import { travelPlanStep5config } from '@/constants';
import { travelPlanStep2config } from '@/constants/travelStep2.constants';
import { travelPlanStep3config } from '@/constants/travelStep3.constants';
import { travelPlanStep4config } from '@/constants/travelStep4.constants';

import Step2When from '../_components/Step2When/Step2When';
import Step3What from '../_components/Step3What/Step3What';
import Step4How from '../_components/Step4How/Step4How';
import Step5Sumup from '../_components/Step5Sumup/Step5Sumup';
import TravelLayout from '../TravelLayout';

const COMPONENTS_MAP = {
  '2': <Step2When config={travelPlanStep2config} />,
  '3': <Step3What config={travelPlanStep3config} />,
  '4': <Step4How config={travelPlanStep4config} />,
  '5': <Step5Sumup config={travelPlanStep5config} />,
};

const TravelPlanTemplete = ({ search }) => {
  const StepComponent = COMPONENTS_MAP[search];

  return <TravelLayout>{StepComponent}</TravelLayout>;
};

export default TravelPlanTemplete;
