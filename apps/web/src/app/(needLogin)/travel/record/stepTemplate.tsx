import { travelRecordStep2config } from '@/constants/travelStep2.constants';
import { travelRecordStep3config } from '@/constants/travelStep3.constants';
import { travelRecordStep4config } from '@/constants/travelStep4.constants';

import Step2When from '../_components/Step2When/Step2When';
import Step3What from '../_components/Step3What/Step3What';
import Step4How from '../_components/Step4How/Step4How';
import TravelLayout from '../TravelLayout';

const TravelRecordTemplete = ({ search }) => {
  let StepComponent;

  switch (search) {
    case '1':
      StepComponent = <Step2When config={travelRecordStep2config} />;
      break;
    case '2':
      StepComponent = <Step3What config={travelRecordStep3config} />;

      break;
    case '3':
      StepComponent = <Step4How config={travelRecordStep4config} />;
      break;
  }
  return (
    <>
      <TravelLayout>{StepComponent}</TravelLayout>
    </>
  );
};

export default TravelRecordTemplete;
