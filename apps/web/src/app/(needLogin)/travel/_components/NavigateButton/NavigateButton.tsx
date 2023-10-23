'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavigateButton = () => {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={`/plan/${pathname}`}
        className='relative z-10  mr-[380px] flex h-[70px] w-[70px] items-center justify-center rounded-[50%] bg-white pr-1'
      >
        <span
          className='material-icons-outlined'
          style={{ fontSize: '55px', color: '#ECF1F7' }}
        >
          arrow_back_ios
        </span>
      </Link>
      <Link
        href={`/plan/${pathname}`}
        className='relative z-10 ml-[380px] mt-[20px] flex  h-[70px] w-[70px] items-center justify-center rounded-[50%] bg-white pl-1'
      >
        <span
          className='material-icons-outlined '
          style={{ fontSize: '55px', color: '#ECF1F7' }}
        >
          arrow_forward_ios
        </span>
      </Link>
    </>
  );
};

export default NavigateButton;
