'use client';

import { useAtom, useAtomValue } from 'jotai';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { stepNavbarAtomFamily } from '@/store/stepNavbar.atom';
import { registerStateAtom } from '@/store/travelState.atom';

import { stepArray } from '../../../../../constants/stepnavbar.constants';

const StepNavbar: React.FC = () => {
  const [registerState] = useAtom(registerStateAtom);
  const params = useSearchParams();
  const search = Number(params.get('stepId'));
  const navbarAtom = useAtomValue(stepNavbarAtomFamily(`atom${search}`));

  const onClickNavbar = (e, id) => {
    console.log(id, navbarAtom);
    if (id > search && navbarAtom == false) {
      e.preventDefault();
    }
  };

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
                onClick={(e) => onClickNavbar(e, id)}
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
