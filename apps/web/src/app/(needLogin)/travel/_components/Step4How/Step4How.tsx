/* eslint-disable no-unused-vars */
'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Pagination } from '@/components';
import { formModePlanAtom, formModeRecordAtom } from '@/store';
import { registerStateAtom } from '@/store/travelState.atom';

import { postPlan, postRecord } from '../../_apis/planPostApi';
import { DATE_SCHEMA } from '../../_schema/travel.schema';
import type { IStep4Props } from '../../Travel.type';
import NavigateButton from '../NavigateButton/NavigateButton';
import Step4Dates from './components/Step4Dates/Step4Dates';
import { dates } from './mocks';

const Step4How: React.FC<IStep4Props> = ({ config }) => {
  const [registerState] = useAtom(registerStateAtom);
  const [planAtom, setPlanAtom] = useAtom(formModePlanAtom);
  const [recordAtom, setRecordAtom] = useAtom(formModeRecordAtom);
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(DATE_SCHEMA),
  });
  const onSubmit = (data) => console.log(data);

  console.log(planAtom);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(4);

  registerState == 'plan'
    ? console.log('plan data', planAtom)
    : console.log('record data', recordAtom);

  useEffect(() => {
    if (registerState == 'plan') {
      postPlan(planAtom);
    } else {
      postRecord(recordAtom);
    }
  }, []);

  return (
    <>
      <form
      // onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className='mt-[57px] flex h-[600px] items-center justify-center '>
            <div className='bg-primaryBlue-100 absolute flex h-[600px] w-full max-w-[969px] justify-center border'>
              <div className='flex flex-col items-center'>
                <div className='text-primaryGray-500 mt-[80px] text-[30px] font-semibold'>
                  {config.label}
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
                    dataLength={dates.length}
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
