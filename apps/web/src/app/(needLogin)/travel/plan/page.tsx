import { travelPlanStep1config } from '../../../../constants';
import Step1Title from '../_components/Step1Title.tsx/Step1Title';

export default function travelPlanStep1() {
  return (
    <div>
      <Step1Title config={travelPlanStep1config} />
    </div>
  );
}
