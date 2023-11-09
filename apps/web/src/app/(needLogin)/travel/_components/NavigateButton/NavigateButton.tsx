'use client';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { registerStateAtom } from '@/store/travelState.atom';

const NavigateButton = ({ handleSubmit, onSubmit }) => {
  const params = useSearchParams();
  const search = Number(params.get('stepId'));
  const router = useRouter();
  const [registerState] = useAtom(registerStateAtom);
  // 데이터 제출 여부 상태 저장
  const [isValid, setIsValid] = useState(false);

  // 데이터 제출 여부 구분해주기 위한 함수
  const modifyOnSumit = (data) => {
    onSubmit(data);
    setIsValid(true);
  };

  useEffect(() => {
    if (isValid) {
      router.push(`/travel/${registerState}?stepId=${search + 1}`);
    }
  }, [isValid]);

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
        // href 작동 막기 (데이터 전송 후 이동을 위해)
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(modifyOnSumit)();
        }}
      >
        <span
          className='material-icons-outlined '
          style={{ fontSize: '50px', color: '#ECF1F7' }}
        >
          arrow_forward_ios
        </span>
      </Link>
    </>
  );
};

export default NavigateButton;
