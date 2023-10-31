'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { stepArray } from '../../../../../constants/stepnavbar.constants';

// * url 확정 후 기능 구현 시 추가할 사항
// 기본 : border + primaryGray-300
// 해당 url에 머무는 경우 : border + primaryBlue-400
// 내용을 저장하고 다음 페이지로 넘어간 경우 : bg + primaryBlue-400

const StepNavbar: React.FC = () => {
  const registerState = localStorage.getItem('registerState');
  const params = useSearchParams();
  const search = Number(params.get('stepId'));

  return (
    <>
      <div className='mt-10 flex h-20 items-center justify-center'>
        <ul className='bg-primaryBlue-100 absolute  flex h-20 w-full max-w-[969px] justify-center'>
          {stepArray.map(({ id, step, title }) => (
            <Link
              href={{
                pathname: `/travel/${registerState}`,
                query: {
                  stepId: id,
                },
              }}
              key={id}
            >
              <li
                key={id}
                className='relative relative z-10 z-50 mx-11 list-none	'
              >
                <div
                  className={`	mx-5 mt-5 flex h-10 w-10 items-center justify-center rounded-full border-4 text-xs font-semibold ${
                    search == id
                      ? 'border-primaryBlue-300 text-primaryBlue-300 bg-white'
                      : search > id
                      ? 'border-primaryBlue-300 bg-primaryBlue-300 text-white'
                      : 'border-primaryGray-300 text-primaryGray-300 bg-white'
                  } `}
                >
                  {step}
                </div>
                <div className='text-primaryGray-400 mx-4	mt-5 flex h-12 w-12 items-center justify-center font-semibold'>
                  {title}
                </div>
              </li>
            </Link>
          ))}
        </ul>
        <div className='bg-primaryBlue-200 z-10 h-1 w-full max-w-[500px]'></div>
      </div>
    </>
  );
};

export default StepNavbar;
