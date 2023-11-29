'use client';
import { useEffect } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Button } from 'ui';

import { useDate } from '@/app/(needLogin)/travel/_hooks/useDate';
import TravelModalDefault from '@/components/ModalDefault/TravelModalDefault';

import TravelDetailModal from '../../../TravelModal/TravelDetailModal';

interface IStep4DatesProps {
  control: Control;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
}

const Step4Dates: React.FC<IStep4DatesProps> = ({
  control,
  itemsPerPage,
  currentPage,
}) => {
  const {
    getDates,
    openModal,
    date,
    selectedDateId,
    setSelectedDateId,
    isModalOpen,
    startIdx,
    endIdx,
    setIsModalOpen,
  } = useDate(itemsPerPage, currentPage);

  useEffect(() => {
    getDates();
  }, []);

  return (
    <>
      <Controller
        name='category'
        control={control}
        defaultValue={''}
        render={() => (
          <div>
            <div className='text-primaryGray-500  mb-[10px] ml-[120px] mt-[50px] text-[30px] font-semibold'></div>
            <div className='mt-[20px] flex  flex-wrap justify-center'>
              {date.slice(startIdx, endIdx).map((date) => (
                <div
                  key={date.id}
                  className={` m-3 flex h-[90px] w-[320px] cursor-pointer  rounded-sm  bg-white
                  ${
                    selectedDateId == date.id
                      ? 'border-primaryBlue-400 border'
                      : 'border-none'
                  }`}
                  onMouseEnter={() => setSelectedDateId(date.id)}
                  onMouseLeave={() => setSelectedDateId(null)}
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
                      onClick={(e) => {
                        e.preventDefault();
                        openModal(date.id);
                      }}
                    >
                      기록 등록
                    </Button>
                  </div>
                </div>
              ))}
              <TravelModalDefault
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              >
                <TravelDetailModal />
              </TravelModalDefault>
            </div>
          </div>
        )}
      />
    </>
  );
};

export default Step4Dates;
