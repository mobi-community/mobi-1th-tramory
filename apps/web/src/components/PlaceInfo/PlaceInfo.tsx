'use client';
import { dropdown_count_atom } from '@/store/dropdownFormSection.atoms';
import { useAtom } from 'jotai';
import { useSearchParams } from 'next/navigation';
import { Button } from 'ui';

export const PlaceInfo = ({ dayData }) => {
  const [dayCount] = useAtom(dropdown_count_atom);
  const params = useSearchParams();
  const isEdit = params.get('isEdit');
  const isEditPage = isEdit === 'true';
  const { isDayLocationData, isDayDescriptionData } = dayData;

  const emptyData =
    isDayLocationData === false && isDayDescriptionData === false;
  const onlyLocationData =
    isDayLocationData === true && isDayDescriptionData === false;
  const allData = isDayLocationData === true && isDayDescriptionData === true;

  return (
    <>
      {emptyData && isEditPage && (
        <div className='mb-5 mt-5 flex'>
          <Button
            size='xsm'
            className='border-primaryBlue-700 text-primaryBlue-700 h-8 w-[158px]'
            variant='roundednavy'
          >
            장소 추가하기
          </Button>
        </div>
      )}

      {(onlyLocationData || allData) && (
        <div className='mt-2 flex gap-3 px-3 py-3 '>
          <div className='bg-primaryBlue-700 mt-1 flex h-[28px] w-[32px] items-center justify-center rounded-full text-[15px] font-semibold text-white'>
            <p>{dayCount}</p>
          </div>

          <div className='flex w-full flex-col'>
            <div className='flex justify-between'>
              <div>
                <div className='text-[18px] font-semibold'>도쿄</div>
                <div className='text-primaryGray-500 text-[12px]'>
                  1 Chome Dotonbori, Chuo Ward, Osaka, 542-0071 일본
                </div>
              </div>
              {isEditPage && (
                <div className='flex items-center gap-2'>
                  <Button
                    className=' right-3 top-3 h-[18px] w-[48px] text-[10px]'
                    size='xsm'
                    variant='roundednavy'
                  >
                    수정
                  </Button>
                  <Button
                    className=' right-3 top-3 h-[18px] w-[48px] text-[10px]'
                    size='xsm'
                    variant='roundednavy'
                  >
                    삭제
                  </Button>
                  <span className='material-icons-outlined'>menu</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
