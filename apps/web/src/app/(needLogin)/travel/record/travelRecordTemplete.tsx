import { travelRecordStep5config } from '@/constants';
import { travelRecordStep2config } from '@/constants/travelStep2.constants';
import { travelRecordStep3config } from '@/constants/travelStep3.constants';
import { travelRecordStep4config } from '@/constants/travelStep4.constants';

import Step2When from '../_components/Step2When/Step2When';
import Step3What from '../_components/Step3What/Step3What';
import Step4How from '../_components/Step4How/Step4How';
import Step5Sumup from '../_components/Step5Sumup/Step5Sumup';
import TravelLayout from '../TravelLayout';

const COMPONENTS_MAP = {
  '1': <Step2When config={travelRecordStep2config} />,
  '2': <Step3What config={travelRecordStep3config} />,
  '3': <Step4How config={travelRecordStep4config} />,
  '4': <Step5Sumup config={travelRecordStep5config} />,
};

const TravelRecordTemplete = ({ search }) => {
  const StepComponent = COMPONENTS_MAP[search];

  return <TravelLayout>{StepComponent}</TravelLayout>;
};

export default TravelRecordTemplete;
