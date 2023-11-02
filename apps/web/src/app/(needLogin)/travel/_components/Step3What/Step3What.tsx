'use client';
import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';

import type { TravelPlanStep3Config } from '@/constants/travelStep3.constants';
import { formModeAtom } from '@/store';
import { TravelPlanType } from '@/types/travelPlan.types';

import { travelTag } from '../../../../../constants/travelStep3Tag.constants';
import NavigateButton from '../NavigateButton/NavigateButton';
import Step3Category from './components/Step3Category/Step3Category';
import Step3Tag from './components/Step3Tag/Step3Tag';

interface IStep3Props {
  config: TravelPlanStep3Config;
}

const Step3What: React.FC<IStep3Props> = ({ config }) => {
  const [formAtom, setFormAtom] = useAtom(formModeAtom);
  const { handleSubmit, control } = useForm<TravelPlanType>({
    defaultValues: formAtom,
  });

  // formModeAtom에 타입이 있어야함
  const postForm = async () => {
    await fetch('/api/plans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formAtom),
    })
      .then((res) => {
        if (res.status === 200) {
          alert('post 요청 성공');
        } else if (res.status === 403) {
          return res.json();
        }
      })
      .catch((error) => {
        console.log('네트워크 에러', error);
      });
  };

  const onSubmit = async (data) => {
    setFormAtom((prev) => ({
      ...prev,
      category: data.category,
      tag1: data.tag0,
      tag2: data.tag1,
      tag3: data.tag2,
      tag4: data.tag3,
    }));
    try {
      await postForm();
    } catch (error) {
      console.log('요청 처리 중 에러 발생:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-[57px] flex h-[600px] items-center justify-center '>
          <div className='bg-primaryBlue-100 absolute flex h-[600px] w-full max-w-[969px] justify-center '>
            <div>
              <div className='mt-[14px]'>
                <div className='text-primaryGray-500  mb-[10px] ml-[150px] mt-[60px] text-[30px] font-semibold'>
                  {config.label}
                </div>
                <Step3Category control={control} />
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
