'use client';
import Link from 'next/link';

import { useTravelForm } from '../../_hooks/useTravelRegister';

const NavigateButton = ({ handleSubmit, onSubmit }) => {
  const { handleNextButtonClick, registerState, search } = useTravelForm();

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
          onClick={handleNextButtonClick(handleSubmit, onSubmit)}
        >
          arrow_forward_ios
        </span>
      </Link>
    </>
  );
};

export default NavigateButton;
