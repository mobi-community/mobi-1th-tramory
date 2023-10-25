'use client';
import Link from 'next/link';

const NavigateButton = ({ handleSubmit, onSubmit }) => {
  return (
    <>
      <Link
        href={`/`}
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
        href={`/travel/plan`}
        className='relative z-10 ml-[380px]  flex  h-[60px] w-[60px] items-center justify-center rounded-[50%] bg-white pl-1'
      >
        <span
          className='material-icons-outlined '
          style={{ fontSize: '50px', color: '#ECF1F7' }}
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)();
          }}
        >
          arrow_forward_ios
        </span>
      </Link>
    </>
  );
};

export default NavigateButton;
