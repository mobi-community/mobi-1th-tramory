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
            <div>
              위치 바뀌는 영역
              <div>컴포넌트 map 돌리기</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelModal;
