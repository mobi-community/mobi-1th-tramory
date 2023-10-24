import { travelRecordStep1config } from '../../../../constants';
import Step1Title from '../_components/Step1Title.tsx/Step1Title';

export default function travelRecordStep1() {
  return (
    <div>
      <Step1Title config={travelRecordStep1config} />
    </div>
  );
}
