import Step2When from '../_components/Step2When/Step2When';
import Step3What from '../_components/Step3What/Step3What';
import Step4How from '../_components/Step4How/Step4How';
import TravelLayout from '../TravelLayout';

const TravelRecordTemplete = ({ search }) => {
  let StepComponent;

  switch (search) {
    case '1':
      StepComponent = <Step2When label='떠나셨나요' />;
      break;
    case '2':
      StepComponent = <Step3What label='즐기셨나요?' />;

      break;
    case '3':
      StepComponent = <Step4How label='기록할' />;

      break;
  }
  return (
    <>
      <TravelLayout>{StepComponent}</TravelLayout>
    </>
  );
};

export default TravelRecordTemplete;
