'use client';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Button } from 'ui';

import { selectedDateIdAtom, travelDateAtom } from '@/store';

interface IStep4DatesProps {
  control: Control;
  itemsPerPage: number;
  currentPage: number;
}

const Step4Dates: React.FC<IStep4DatesProps> = ({
  control,
  itemsPerPage,
  currentPage,
}) => {
  const [date, setDate] = useAtom(travelDateAtom);
  const [, setSelectedDateId] = useAtom(selectedDateIdAtom);

  const startIdx = currentPage * itemsPerPage;
  const endIdx = (currentPage + 1) * itemsPerPage;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDates = async () => {
    try {
      const res = await fetch('/dates');
      const data = await res.json();

      // console.log('성공', data);
      setDate(data);
    } catch (error) {
      console.error('에러', error);
    }
  };

  useEffect(() => {
    getDates();
  }, []);

  return (
    <>
      <Controller
        name='days'
        control={control}
        defaultValue={''}
        render={({ field, fieldState: { error } }) => (
          <div>
            <div className='text-primaryGray-500  mb-[10px] ml-[120px] mt-[50px] text-[30px] font-semibold'></div>
            <div className='mt-[20px] flex  flex-wrap justify-center'>
              {date.slice(startIdx, endIdx).map((date) => (
                <div
                  key={date.id}
                  className={` hover:border-primaryBlue-700 m-3 flex h-[90px] w-[320px]  cursor-pointer  rounded-sm border bg-white 
                  `}
                  onClick={() => {
                    setSelectedDateId(date.id);
                    field.onChange(date.dates);
                  }}
                >
                  <div className='ml-[20px] mt-[0px] flex-col items-center  justify-center '>
                    {date.id < 10 && (
                      <div className=' flex w-[80px] justify-center text-[50px] font-bold'>
                        0{date.id}
                      </div>
                    )}
                    {date.id >= 10 && (
                      <div className=' flex w-[80px] justify-center border text-[50px] font-bold'>
                        {date.id}
                      </div>
                    )}
                    <div className='ml-[27px] mt-[-15px] text-[12px]'>일차</div>
                  </div>
                  <div>
                    <div
                      className={`bg-primaryBlue-100  hover:border-primaryBlue-300 ml-[10px] mt-[-23px] h-[40px] w-[40px] rounded-[50%] border-b`}
                    ></div>
                    <div className='text-primaryGray-300 ml-[14px] mt-[5px]  flex w-[32px] justify-center text-[30px]'>
                      |
                    </div>
                    <div
                      className={` bg-primaryBlue-100 hover:border-primaryBlue-300 ml-[10px] mt-[5px] h-[40px] w-[40px] rounded-[50%] border-t
                      `}
                    ></div>
                  </div>
                  <div className='ml-[20px] flex-col  border-black'>
                    <li className='mt-[18px] flex list-none items-center justify-center text-[13px] font-semibold '>
                      {date.dates}({date.day})
                    </li>
                    <Button
                      className='mt-[10px] flex h-[26px] w-[120px] pt-[2px] text-black'
                      variant='roundednavy'
                      size='sm'
                    >
                      기록 등록
                    </Button>
                  </div>
                </div>
              ))}
              {error && (
                <div className='absolute mb-1 ml-[0px]  mt-[230px] text-[14px] text-red-500'>
                  {error.message}
                </div>
              )}
            </div>
          </div>
        )}
      />
    </>
  );
};

export default Step4Dates;
