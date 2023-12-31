'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useAtom } from 'jotai';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Input } from 'ui';

import { formModePlanAtom, formModeRecordAtom } from '@/store';
import { registerStateAtom } from '@/store/travelState.atom';

import { TITLE_SCHEMA } from '../../_schema/travel.schema';
import { type Step1TitleProps } from '../../Travel.type';

const Step1Title: React.FC<Step1TitleProps> = ({ config }) => {
  const [planAtom, setPlanAtom] = useAtom(formModePlanAtom);
  const [recordAtom, setRecordAtom] = useAtom(formModeRecordAtom);
  const [registerState, setRegisterState] = useAtom(registerStateAtom);
  const { handleSubmit, control, watch } = useForm({
    resolver: yupResolver(TITLE_SCHEMA),
  });
  const fieldValue = watch('title', '');
  const pathname = usePathname();
  const router = useRouter();
  const headerHeight = 90;

  // pathname에 /travel/plan을 포함할 경우 'plan'으로 atomstorage 저장
  // 아닐경우 'record'로 저장
  useEffect(() => {
    pathname.includes('/travel/plan')
      ? setRegisterState('plan')
      : setRegisterState('record');
  }, [pathname, setRegisterState, planAtom, recordAtom, registerState]);

  const onSubmit = (data: { title: string }) => {
    if (fieldValue.trim() == '') {
      return;
    } else {
      router.push(`/travel/${registerState}?stepId=2`);
      registerState == 'plan'
        ? setPlanAtom((prev) => ({ ...prev, title: data.title }))
        : setRecordAtom((prev) => ({ ...prev, title: data.title }));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          height: `calc(100vh - ${headerHeight}px)`,
        }}
        className=' flex min-h-full w-auto flex-col items-center justify-center'
      >
        <div className='flex  items-center justify-between font-semibold'></div>
        <div className=' flex flex-row'>
          <div className='bg-primaryBlue-100 relative rounded-br-[28px] rounded-tr-[28px] '>
            <div className='absolute z-20 ml-5 mt-5'>
              <div className='h-0.5 w-5 bg-white'></div>
              <div className='h-5 w-0.5 bg-white'></div>
            </div>
            <div className='absolute right-0 z-20 mr-5 mt-5'>
              <div className='h-0.5 w-5 bg-white'></div>
              <div className='absolute right-0 h-5 w-0.5 bg-white'></div>
            </div>
            <div className='absolute bottom-0 z-20 mb-5 ml-5'>
              <div className='h-5 w-0.5 bg-white'></div>
              <div className='h-0.5 w-5 bg-white'></div>
            </div>
            <div className='absolute bottom-0 right-0 z-20 mb-5 mr-5'>
              <div className='h-5 w-0.5 bg-white'></div>
              <div className='absolute right-0 h-0.5 w-5 bg-white'></div>
            </div>
            <div className='absolute left-1/2 top-3/4 z-20 -translate-x-1/2 -translate-y-1/2 transform'>
              <div className='flex flex-col text-center'>
                <h2 className='text-2xl font-bold tracking-wide text-white'>
                  {config.title}
                </h2>
                <div className='my-[10px] h-[1px] w-[210px] bg-white'></div>
                <p className='mt-[5px] text-xs text-white'>
                  {config.description}
                </p>
              </div>
            </div>
            <Image
              src={config.step1Image}
              width={370}
              alt='Left_Intro_Image'
              priority
            />
          </div>
          <div className='bg-primaryBlue-100 w-[650px] rounded-bl-[28px] rounded-tl-[28px] pb-[30px] '>
            <div className='flex flex-col items-center justify-center'>
              <div className='bg-primaryBlue-default flex h-[60px] w-full items-center justify-center rounded-tl-[28px] text-center text-3xl font-bold tracking-wide text-white'>
                <span className='material-icons-outlined mr-[15px] rotate-90 '>
                  flight
                </span>
                {config.rightSectionTitle}
              </div>
              <div className='flex w-full flex-col items-center justify-center pb-[30px] pl-[40px] pr-[40px]'>
                <div className='text-primaryGray-400 pt-[170px] text-3xl font-bold'>
                  {config.rightSectionDescription}
                </div>
                <div className='mt-[20px] flex w-full items-center items-center justify-center gap-2'>
                  <Controller
                    name='title'
                    control={control}
                    defaultValue={
                      registerState == 'plan'
                        ? planAtom.title || ''
                        : recordAtom.title || ''
                    }
                    render={({ field, fieldState: { error } }) => (
                      <div className='ml-9'>
                        <Input
                          {...field}
                          className='w-[330px] border-b-2 border-gray-300 bg-transparent text-center text-lg'
                          placeholder={config.inputPlaceholder}
                        />
                        {error && (
                          <div className='absolute mb-1 ml-[0px]  mt-2 text-[14px] text-red-500'>
                            {error.message}
                          </div>
                        )}
                      </div>
                    )}
                  />

                  <span
                    className={`material-icons-outlined mt-[5px] ${
                      fieldValue.trim()
                        ? 'cursor-pointer'
                        : 'pointer-events-none opacity-40'
                    }
                    `}
                    style={{ fontSize: '30px' }}
                    onClick={() => {
                      if (fieldValue.trim()) {
                        handleSubmit(onSubmit)();
                      }
                    }}
                  >
                    arrow_circle_right
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Step1Title;
