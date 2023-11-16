import { useAtom } from 'jotai';
import { Button } from 'ui';

import { selectedDateIdAtom } from '@/store';
import { travelDetailModalAtoms } from '@/store/travelDetailModal.atoms';

import DndList from './_component/DndList';
import UploadImgFiles from './_component/UploadImgFiles';

const TravelDetailModal: React.FC = () => {
  const [detailModalState, setDetailModalState] = useAtom(
    travelDetailModalAtoms
  );
  const [selectedDateId] = useAtom(selectedDateIdAtom);

  const handleSave = async (e) => {
    e.preventDefault();
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
  const handleClearAllItems = () => {
    setDetailModalState([]);
    console.log('reset?', detailModalState);
  };

  return (
    <>
      <div className='inline-flex max-h-[85vh] justify-center overflow-y-auto	'>
        <div className='flex w-full flex-col items-center px-2.5'>
          <h2 className='mb-4 text-center text-lg font-bold'>
            {selectedDateId}일차 기록
          </h2>
          <div className='flex w-full flex-col gap-4'>
            <div className='h-[350px] w-[650px] bg-gray-200'>지도</div>
            <UploadImgFiles />
            <DndList />
          </div>
          <div className=' flex gap-3 pt-6'>
            <Button
              onClick={handleClearAllItems}
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

export default TravelDetailModal;
