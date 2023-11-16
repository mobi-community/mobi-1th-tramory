import { useAtom, useSetAtom } from 'jotai';

import { useDateSelection } from '@/app/(needLogin)/travel/_components/NavigateButton/use-data-selection';
import { formModePlanAtom, formModeRecordAtom } from '@/store';
import { registerStateAtom } from '@/store/travelState.atom';

// onSubmit 로직 분리
export const useOnSubmitStep2 = () => {
  const setPlanAtom = useSetAtom(formModePlanAtom);
  const setRecordAtom = useSetAtom(formModeRecordAtom);
  const [registerState] = useAtom(registerStateAtom);
  const isDateSelected = useDateSelection();

  const onSubmit = (data) => {
    console.log('onsubmit 작동중', data);
    if (isDateSelected) {
      registerState == 'plan'
        ? setPlanAtom((prev) => ({
            ...prev,
            startDate: data.postDate[0].toISOString().split('T')[0],
            endDate: data.postDate[1].toISOString().split('T')[0],
          }))
        : setRecordAtom((prev) => ({
            ...prev,
            startDate: data.postDate[0].toISOString().split('T')[0],
            endDate: data.postDate[1].toISOString().split('T')[0],
          }));
    } else {
      alert('날짜를 선택해주세요');
    }
  };

  return onSubmit;
};
