import { travelPlanStep1config } from '../../../../constants';
import Step1Title from '../_components/Step1Title/Step1Title';

const travelPlanStep1 = () => {
  return (
    <div>
      <Step1Title config={travelPlanStep1config} />
    </div>
  );
};

export default travelPlanStep1;
