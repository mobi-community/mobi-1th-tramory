import Image from 'next/image';

import { travelStep1config } from '../../../../../constants';

const Step1Title = () => {
  return (
    <div className=' flex h-screen w-auto flex-col items-center justify-center'>
      <div className='flex  items-center justify-between font-semibold'></div>
      <div className=' flex flex-row'>
        <div className='bg-primaryBlue-100 relative rounded-br-[28px] rounded-tr-[28px] '>
          <div className='absolute z-20 ml-5 mt-5'>
            <div className='h-0.5 w-5 bg-white'></div>
            <div className='h-5 w-0.5 bg-white'></div>
          </div>
          <div className='absolute right-0 z-20 mr-5 mt-5'>
            <div className='h-0.5 w-5 bg-white'></div>
            <div className='absolute right-0 h-5 w-0.5 bg-white'></div>
          </div>
          <div className='absolute bottom-0 z-20 mb-5 ml-5'>
            <div className='h-5 w-0.5 bg-white'></div>
            <div className='h-0.5 w-5 bg-white'></div>
          </div>
          <div className='absolute bottom-0 right-0 z-20 mb-5 mr-5'>
            <div className='h-5 w-0.5 bg-white'></div>
            <div className='absolute right-0 h-0.5 w-5 bg-white'></div>
          </div>
          <div className='absolute left-1/2 top-3/4 z-20 -translate-x-1/2 -translate-y-1/2 transform'>
            <div className='flex flex-col text-center'>
              <h2 className='text-2xl font-bold tracking-wide text-white'>
                {travelStep1config.title}
              </h2>
              <div className='my-[10px] h-[1px] w-[210px] bg-white'></div>
              <p className='mt-[5px] text-xs text-white'>
                {travelStep1config.description}
              </p>
            </div>
          </div>
          <Image
            src={travelStep1config.step1Image}
            width={370}
            alt='Left_Intro_Image'
            priority
          />
        </div>
        <div className='bg-primaryBlue-100 w-[650px] rounded-bl-[28px] rounded-tl-[28px] pb-[30px] '>
          <div className='flex flex-col items-center justify-center'>
            <div className='bg-primaryBlue-default flex h-[60px] w-full items-center justify-center rounded-tl-[28px] text-center text-3xl font-bold tracking-wide text-white'>
              <span className='material-icons-outlined mr-[15px] rotate-90 '>
                flight
              </span>
              {travelStep1config.rightSectionTitle}
            </div>
            <div className='flex w-full flex-col items-center justify-center pb-[30px] pl-[40px] pr-[40px]'>
              <div className='text-primaryGray-400 pt-[200px] text-3xl font-bold'>
                {travelStep1config.planDescription}
              </div>
              <input />
              <span className='material-icons-outlined'>
                arrow_circle_right
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1Title;
