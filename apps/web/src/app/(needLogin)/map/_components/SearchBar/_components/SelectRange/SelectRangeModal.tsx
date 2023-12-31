import { useMapSearchBar } from '@/app/(needLogin)/map/hooks/useMapSearchBar';
import { MapPageConfig } from '@/constants';

export const SelectRangeModal: React.FC = () => {
  const { setSearchRange, isSelectModalOpen } = useMapSearchBar();

  return (
    <>
      {isSelectModalOpen && (
        <div className='border-primaryGray-200 z-100 absolute left-0 top-[60px] h-[85px] w-[115px] cursor-pointer rounded border bg-white drop-shadow-xl'>
          {MapPageConfig.rangeArray.map((range, i, arr) => (
            <div
              onClick={() => setSearchRange(range)}
              key={Math.random() * 1000}
              className={`z-100 ml-[10px] h-[40px] w-[80%] pt-[10px] ${
                i !== arr.length - 1
                  ? 'border-primaryGray-100 border-b-[1px]'
                  : ''
              }`}
            >
              {range}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
