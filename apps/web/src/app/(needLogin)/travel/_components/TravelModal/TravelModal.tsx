import { useAtom } from 'jotai';
import { Button } from 'ui';

import { travelDetailModalAtoms } from '@/store/travelDetailModal.atoms';

import DndList from './_component/DndList';
import UploadImgFiles from './_component/UploadImgFiles';

const TravelModal: React.FC = () => {
  const [detailModalState] = useAtom(travelDetailModalAtoms);

  const handleSave = async () => {
    try {
      console.log('data?', detailModalState);

      const response = await fetch('/updateDetailModal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ travelDailyPlansState: detailModalState }),
      });

      if (response.ok) {
        console.log(response);

        const res = await response.json();

        console.log(res.message);
      } else {
        throw new Error('오류');
      }
    } catch (error) {
      console.error('fetch오류', error);
    }
  };

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
              onClick={handleSave}
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