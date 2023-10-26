'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Pagination } from '@/components/Pagination';

import NavigateButton from '../NavigateButton/NavigateButton';
import Step4Dates from './components/Step4Dates/Step4Dates';
import { dates } from './mocks';

const Step4How = ({ label }) => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(4);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className='mt-[57px] flex h-[600px] items-center justify-center '>
            <div className='bg-primaryBlue-100 absolute flex h-[600px] w-full max-w-[969px] justify-center border'>
              <div className='flex flex-col items-center'>
                <div className='text-primaryGray-500 mt-[80px] text-[30px] font-semibold'>
                  {label} 일자를 선택해 주세요
                </div>
                <Step4Dates
                  control={control}
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                />
                <div className='absolute mt-[450px]'>
                  <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    itemsPerPage={itemsPerPage}
                    testData={dates.length}
                    bgColor='blue'
                  />
                </div>
              </div>
            </div>
            <NavigateButton handleSubmit={handleSubmit} onSubmit={onSubmit} />
          </div>
        </div>
      </form>
    </>
  );
};

export default Step4How;
