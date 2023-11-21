import { useAtom, useSetAtom } from 'jotai';
import { useRouter, useSearchParams } from 'next/navigation';

import { formModePlanAtom, formModeRecordAtom } from '@/store';
import { selectedCategoryIdAtom } from '@/store/step3Category.atom';
import { getStepBarAtom } from '@/store/stepNavbar.atom';
import { registerStateAtom } from '@/store/travelState.atom';

import { postPlan, postRecord } from '../_apis/planPostApi';
import { useDateSelection } from '../_components/NavigateButton/use-data-selection';

export const useTravelForm = () => {
  const router = useRouter();
  const [planAtom, setPlanAtom] = useAtom(formModePlanAtom);
  const [recordAtom, setRecordAtom] = useAtom(formModeRecordAtom);
  const [registerState, setRegisterState] = useAtom(registerStateAtom);

  const setStepbarAtom = useSetAtom(getStepBarAtom(2));
  const { isDateSelected, setIsDateSelected } = useDateSelection();
  const params = useSearchParams();
  const search = Number(params.get('stepId'));
  const [selectedCategoryId, setSelectedCategoryId] = useAtom(
    selectedCategoryIdAtom
  );
  // step1 onsubmit 로직 분리
  const step1onSubmit = (data: { title: string }) => {
    // if (fieldValue.trim() == '') {
    //   return;
    // } else {
    router.push(`/travel/${registerState}?stepId=2`);
    registerState == 'plan'
      ? setPlanAtom((prev) => ({ ...prev, title: data.title }))
      : setRecordAtom((prev) => ({ ...prev, title: data.title }));
    // }
  };

  // step2 onsubmit 로직 분리
  const step2onSubmit = (data: {
    postDate: { toISOString: () => string }[];
  }) => {
    if (isDateSelected) {
      setStepbarAtom(true);
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

  // step3 onsubmit 로직 분리
  const step3onSubmit = async (data: {
    tag0: string;
    tag1: string;
    tag2: string;
    tag3: string;
    theme: string;
  }) => {
    setStepbarAtom(true);
    registerState == 'record'
      ? setRecordAtom((prev) => ({
          ...prev,
          theme: data.theme.toString(),
          travelHashTags: Array(4)
            .fill(null)
            .map((_, index) => ({
              id: Math.floor(Math.random() * 100000),
              hashTag: { name: data[`tag${index}`].slice(1) },
            })),
        }))
      : setPlanAtom((prev) => ({
          ...prev,
          theme: data.theme.toString(),
        }));
    registerState == 'plan' ? postPlan(planAtom) : postRecord(recordAtom);
  };

  // navigatebutton 로직 분리
  const handleNextButtonClick = (handleSubmit, onSubmit) => (e) => {
    e.preventDefault();
    if (isDateSelected) {
      handleSubmit(onSubmit)();
      router.push(`/travel/${registerState}?stepId=${search + 1}`);
    } else {
      alert('날짜를 선택해주세요');
    }
  };

  return {
    planAtom,
    setPlanAtom,
    recordAtom,
    setRecordAtom,
    registerState,
    setRegisterState,
    step1onSubmit,
    step2onSubmit,
    setIsDateSelected,
    isDateSelected,
    step3onSubmit,
    handleNextButtonClick,
    search,
    selectedCategoryId,
    setSelectedCategoryId,
  };
};
