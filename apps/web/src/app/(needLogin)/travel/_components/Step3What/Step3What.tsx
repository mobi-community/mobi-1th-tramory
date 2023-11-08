/* eslint-disable no-unused-vars */
'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { formModePlanAtom, formModeRecordAtom } from '@/store';
import { registerStateAtom } from '@/store/travelState.atom';

import { travelTag } from '../../../../../constants/travelStep3Tag.constants';
import { CATEGORY_SCHEMA } from '../../_schema/travel.schema';
import type { IStep3Props } from '../../Travel.type';
import NavigateButton from '../NavigateButton/NavigateButton';
import Step3Category from './components/Step3Category/Step3Category';
import Step3Tag from './components/Step3Tag/Step3Tag';

const Step3What: React.FC<IStep3Props> = ({ config }) => {
  const [registerAtom] = useAtom(registerStateAtom);

  const [planAtom, setPlanAtom] = useAtom(formModePlanAtom);
  // eslint-disable-next-line no-unused-vars
  const [recordAtom, setRecordAtom] = useAtom(formModeRecordAtom);
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(CATEGORY_SCHEMA),
  });

  const onSubmit = async (data) => {
    registerAtom == 'plan'
      ? setPlanAtom((prev) => ({
          ...prev,
          theme: data.theme.toString(),
          travelHashTags: Array(4)
            .fill(null)
            .map((_, index) => ({
              id: Math.floor(Math.random() * 100000),
              hashTag: { name: data[`tag${index}`] },
            })),
        }))
      : setRecordAtom((prev) => ({
          ...prev,
          theme: data.theme,
        }));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-[57px] flex h-[600px] items-center justify-center '>
          <div className='bg-primaryBlue-100 absolute flex h-[600px] w-full max-w-[969px] justify-center '>
            <div>
              <div className='mt-[14px]'>
                <div
                  className={`${
                    registerAtom == 'record' ? 'mt-[150px]' : 'mt-0'
                  }`}
                >
                  <div className='text-primaryGray-500  mb-[10px] ml-[150px] mt-[60px] text-[30px] font-semibold'>
                    {config.label}
                  </div>
                  <Step3Category control={control} />
                </div>
                {registerAtom == 'plan' && (
                  <>
                    <div className='text-primaryGray-500  mb-[10px] ml-[93px] mt-[60px] text-[30px] font-semibold'>
                      {config.subLabel}
                    </div>
                    <div className='mt-[30px] flex justify-center '>
                      {travelTag.map((tag) => (
                        <div key={tag.id}>
                          <Step3Tag control={control} id={tag.id} />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <NavigateButton handleSubmit={handleSubmit} onSubmit={onSubmit} />
        </div>
      </form>
    </>
  );
};

export default Step3What;
