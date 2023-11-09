'use client';
import { useAtom, useSetAtom } from 'jotai';
import { useForm } from 'react-hook-form';

import { formModePlanAtom, formModeRecordAtom } from '@/store';
import { registerStateAtom } from '@/store/travelState.atom';

import { travelTag } from '../../../../../constants/travelStep3Tag.constants';
import { IStep3Props } from '../../Travel.typs';
import NavigateButton from '../NavigateButton/NavigateButton';
import Step3Category from './components/Step3Category/Step3Category';
import Step3Tag from './components/Step3Tag/Step3Tag';

const Step3What: React.FC<IStep3Props> = ({ config }) => {
  const [registerAtom] = useAtom(registerStateAtom);

  const setPlanAtom = useSetAtom(formModePlanAtom);
  const setRecordAtom = useSetAtom(formModeRecordAtom);
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    registerAtom == 'plan'
      ? setPlanAtom((prev) => ({
          ...prev,
          theme: data.theme,
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
          <div className='bg-primaryBlue-100 absolute flex h-[600px] w-full max-w-[969px] flex-col items-center justify-center'>
            <div className='text-primaryGray-500 my-5 h-[50px] w-full items-center text-center text-[30px] font-semibold'>
              {config.label}
            </div>
            <div>
              <Step3Category control={control} />
            </div>
            {registerAtom == 'record' && (
              <>
                <div className='text-primaryGray-500  mb-[10px] mt-[60px] text-[30px] font-semibold'>
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
          <NavigateButton handleSubmit={handleSubmit} onSubmit={onSubmit} />
        </div>
      </form>
    </>
  );
};

export default Step3What;
