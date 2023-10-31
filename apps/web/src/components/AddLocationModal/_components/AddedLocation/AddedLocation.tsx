import { Button } from 'ui';

import { AddLocationConfig } from '@/constants';

export const AddedLocation: React.FC = () => {
  return (
    <div>
      <div className='m-auto mb-[20px] w-[751px] '>
        <div className='border-primaryGray-300 flex justify-between border-b-[1px] pb-5 pt-[60px]'>
          <div>장소명</div>
          <div className='font-bold'>로마 다빈치 공항</div>
        </div>
        <div className='flex justify-between py-[30px]'>
          <div>주소</div>
          <div>
            <div className='mb-[40px] text-xl'>
              Narita International Airport1-1 Furugome, Narita, Chiba 282
            </div>
            <div className='bg-primaryGray-300 h-[292px] w-[558px]'>지도</div>
          </div>
        </div>
      </div>
      <div className='mb-[40px] text-center'>
        <Button
          variant='lightblue'
          className='h-[50px] w-[190px] text-base font-bold'
        >
          {AddLocationConfig.buttonText}
        </Button>
      </div>
    </div>
  );
};
