'use client';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { Button } from 'ui';

import { selectedDateIdAtom } from '@/store/selectedDateIdAtom.atom';
import { travelDateAtom } from '@/store/travelDate.atom';

const Step4Dates = ({ control }) => {
  const [date, setDate] = useAtom(travelDateAtom);
  const [selectedDateId, setSelectedDateId] = useAtom(selectedDateIdAtom);
  const getRandom = async () => {
    const res = await fetch('/dates').then((res) => res.json());

    setDate(res);
  };

  useEffect(() => {
    getRandom();
  }, []);

  return (
    <>
      <Controller
        name='category'
        control={control}
        defaultValue={''}
        render={({ field }) => (
          <div>
            <div className='text-primaryGray-500  mb-[10px] ml-[120px] mt-[30px] text-[30px] font-semibold'></div>
            <div className='mt-[20px] flex  flex-wrap justify-center'>
              {date.slice(0, 4).map((date) => (
                <div
                  key={date.id} //date id
                  className={` m-3 flex h-[90px] w-[320px] cursor-pointer  rounded-sm  bg-white
                  ${
                    selectedDateId == date.id
                      ? 'border-primaryBlue-400 border'
                      : 'border-none'
                  }`}
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
                      className={`bg-primaryBlue-100  ml-[10px] mt-[-23px] h-[40px] w-[40px] rounded-[50%]                   ${
                        selectedDateId == date.id
                          ? 'border-primaryBlue-300 border-b'
                          : 'border-none'
                      }`}
                    ></div>
                    <div className='text-primaryGray-300 ml-[14px] mt-[5px]  flex w-[32px] justify-center text-[30px]'>
                      |
                    </div>
                    <div
                      className={` bg-primaryBlue-100 ml-[10px] mt-[5px] h-[40px] w-[40px] rounded-[50%]
                      ${
                        selectedDateId == date.id
                          ? 'border-primaryBlue-300 border-t'
                          : 'border-none'
                      }`}
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
            </div>
          </div>
        )}
      />
    </>
  );
};

export default Step4Dates;
