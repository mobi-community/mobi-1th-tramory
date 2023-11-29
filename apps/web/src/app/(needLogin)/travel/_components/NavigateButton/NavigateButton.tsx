'use client';
import { useAtomValue } from 'jotai';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import { registerStateAtom } from '@/store/travelState.atom';

import { useDateSelection } from './use-data-selection';

const NavigateButton = ({ handleSubmit, onSubmit }) => {
  const params = useSearchParams();
  const search = Number(params.get('stepId'));
  const registerState = useAtomValue(registerStateAtom);
  const router = useRouter();
  const { isDateSelected } = useDateSelection();

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    if (isDateSelected) {
      handleSubmit(onSubmit)();
      router.push(`/travel/${registerState}?stepId=${search + 1}`);
    } else {
      alert('날짜를 선택해주세요');
    }
  };

  return (
    <>
      <Link
        href={`/travel/${registerState}?stepId=${search - 1}`}
        className='relative z-10  mr-[380px] flex h-[60px] w-[60px] items-center justify-center rounded-[50%] bg-white pr-1'
      >
        <span
          className='material-icons-outlined'
          style={{ fontSize: '50px', color: '#ECF1F7' }}
        >
          arrow_back_ios
        </span>
      </Link>
      <Link
        href={`/travel/${registerState}?stepId=${search + 1}`}
        className='relative z-10 ml-[380px]  flex  h-[60px] w-[60px] items-center justify-center rounded-[50%] bg-white pl-1'
      >
        <span
          className='material-icons-outlined '
          style={{ fontSize: '50px', color: '#ECF1F7' }}
          onClick={handleNextButtonClick}
        >
          arrow_forward_ios
        </span>
      </Link>
    </>
  );
};

export default NavigateButton;
