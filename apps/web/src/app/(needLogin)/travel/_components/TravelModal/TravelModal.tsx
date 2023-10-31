import { Button } from 'ui';

import DndList from './_component/DndList';
import UploadImgFiles from './_component/UploadImgFiles';

const TravelModal: React.FC = () => {
  return (
    <>
      <div className='inline-flex max-h-[85vh] justify-center overflow-y-auto	'>
        <div className='flex w-full flex-col items-center px-2.5'>
          <h2 className='mb-4 text-center text-lg font-bold'>1일차 기록</h2>
          <div className='flex w-full flex-col gap-4'>
            <div className='h-[350px] w-[650px] bg-gray-200'>지도</div>
            <UploadImgFiles />
            <DndList />
          </div>
          <div className=' flex gap-3 pt-6'>
            <Button
              variant='roundednavy'
              size='lg'
              className='min-w-[200px] rounded-3xl font-bold'
            >
              초기화
            </Button>
            <Button
              variant='defaultnavy'
              size='lg'
              className='min-w-[200px] rounded-3xl font-bold'
            >
              저장
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelModal;
