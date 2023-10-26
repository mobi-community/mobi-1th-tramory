import { Button } from 'ui';

import { detailPageConfig } from '@/constants/detailPage.constans';

export const Buttons = () => {
  return (
    <div className='mt-4 flex w-full justify-start gap-4'>
      <Button
        size='xsm'
        className=' border-primaryGray-500 text-primaryGray-500 hover:bg-primaryGray-300 hover:border-primaryGray-300 h-[35px] w-[115px] rounded-2xl border-opacity-40 hover:text-white'
        variant='roundednavy'
      >
        계획 {detailPageConfig.buttons[0]}
      </Button>
      <Button
        size='xsm'
        className=' border-primaryGray-500 text-primaryGray-500 hover:bg-primaryGray-300 hover:border-primaryGray-300 h-[35px] w-[115px] rounded-2xl border-opacity-40 hover:text-white'
        variant='roundednavy'
      >
        계획 {detailPageConfig.buttons[1]}
      </Button>
    </div>
  );
};
