'use client';
import { yupResolver } from '@hookform/resolvers/yup';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAtom, useSetAtom } from 'jotai';
import { useForm } from 'react-hook-form';

import { formModePlanAtom, formModeRecordAtom } from '@/store';
import { getStepBarAtom } from '@/store/stepNavbar.atom';
import { registerStateAtom } from '@/store/travelState.atom';

import { travelTag } from '../../../../../constants/travelStep3Tag.constants';
import { postPlan, postRecord } from '../../_apis/planPostApi';
import { CATEGORY_SCHEMA } from '../../_schema/travel.schema';
import type { IStep3Props } from '../../Travel.type';
import NavigateButton from '../NavigateButton/NavigateButton';
import Step3Category from './components/Step3Category/Step3Category';
import Step3Tag from './components/Step3Tag/Step3Tag';

const Step3What: React.FC<IStep3Props> = ({ config }) => {
  // const queryClient = useQueryClient();
  const [registerState] = useAtom(registerStateAtom);
  const [planAtom, setPlanAtom] = useAtom(formModePlanAtom);
  const [recordAtom, setRecordAtom] = useAtom(formModeRecordAtom);

  const setStepbarAtom = useSetAtom(getStepBarAtom(3));
  // const mutation = useMutation(postPlan, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries();
  //   },
  // });
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(CATEGORY_SCHEMA),
  });

  const onSubmit = async (data: {
    tag0: string;
    tag1: string;
    tag2: string;
    tag3: string;
    theme: string;
  }) => {
    setStepbarAtom(true);
    registerState == 'record'
      ? setRecordAtom((prev) => ({
          ...prev,
          theme: data.theme.toString(),
          travelHashTags: Array(4)
            .fill(null)
            .map((_, index) => ({
              id: Math.floor(Math.random() * 100000),
              hashTag: { name: data[`tag${index}`].slice(1) },
            })),
        }))
      : setPlanAtom((prev) => ({
          ...prev,
          theme: data.theme.toString(),
        }));
    registerState == 'plan' ? postPlan(planAtom) : postRecord(recordAtom);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-[57px] flex h-[600px] items-center justify-center '>
          <div className='bg-primaryBlue-100 absolute flex h-[600px] w-full max-w-[969px] flex-col items-center justify-center'>
            <div>
              <div
                className={`${
                  registerState == 'record' ? 'mt-[-80px]' : 'mt-[-80px] '
                }`}
              >
                <div className='text-primaryGray-500  mb-[10px] ml-[150px] mt-[0px] text-[30px] font-semibold'>
                  {config.label}
                </div>
                <Step3Category control={control} />
              </div>
              {registerState == 'record' && (
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
          <NavigateButton handleSubmit={handleSubmit} onSubmit={onSubmit} />
        </div>
      </form>
    </>
  );
};

export default Step3What;
