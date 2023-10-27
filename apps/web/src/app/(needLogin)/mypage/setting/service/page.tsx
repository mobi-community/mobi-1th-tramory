'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from 'ui';

import { serviceOption } from '@/constants/select_options.constants';

import { SettingContainer } from '../_components';
import { ServiceValidator } from './_components/ServiceValidator';
import { ServiceValidateType } from './_components/ServiceValidator/ServiceValidator.types';
import { SERVICE_SCHEMA } from './_schema/service.schema';

const SettingServicePage = () => {
  const { handleSubmit, control } = useForm<ServiceValidateType>({
    mode: 'onChange',
    resolver: yupResolver(SERVICE_SCHEMA),
    defaultValues: { title: '', description: '' },
  });

  const fileInputRef = useRef(null);

  const onButtonClick = () => {
    fileInputRef.current.click();
  };
  const defaultStyle = {
    width: '700px',
    marginLeft: '0',
    border: '1px solid #e5e7eb',
    borderRadius: '4px',
  };

  /**
   * @todo common style 리팩터링해야할 것 같아요
   */
  const justifyBetween = 'flex justify-between';

  const onSubmit = (data: ServiceValidateType) => {
    alert(
      `문의 종류: ${data.serviceType}, 제목: ${data.title}, 내용: ${data.description}`
    );
    console.log(data.serviceType, data.title, data.description);
  };

  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <SettingContainer title='서비스 문의하기'>
        <div className='px-16 pb-16 pt-7'>
          <div className='px-7'>
            <h1 className='text-primaryGray-500 text-lg font-medium'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={justifyBetween}>
                  <p className='mb-8 font-medium'>
                    문의 종류{' '}
                    <span className='text-primaryBlue-default font-bold'>
                      *
                    </span>
                  </p>
                  {/* select */}
                  <ServiceValidator
                    serviceOptions={serviceOption}
                    name={'serviceType'}
                    control={control}
                    initialValue='문의 종류를 선택해주세요'
                  />
                </div>
                <div className={`mb-8 ${justifyBetween}`}>
                  <p className='font-medium'>
                    제목{' '}
                    <span className='text-primaryBlue-default font-bold'>
                      *
                    </span>
                  </p>
                  {/* name === 'title' */}
                  <ServiceValidator
                    name={'title'}
                    control={control}
                    type={'text'}
                    style={defaultStyle}
                    placeholder='5자 이상 40자 이내로 입력해주세요'
                  />
                </div>
                <div className={`mb-8 ${justifyBetween}`}>
                  <p className='font-medium'>
                    내용{' '}
                    <span className='text-primaryBlue-default font-bold'>
                      *
                    </span>
                  </p>
                  {/* name === 'description' */}
                  <ServiceValidator
                    name={'description'}
                    control={control}
                    type={'text'}
                    placeholder=''
                  />
                </div>
                <div className='flex flex-col'>
                  <div className='flex'>
                    <p className='mr-[70px] font-medium'>파일 첨부</p>
                    <Button
                      onClick={onButtonClick}
                      variant='roundednavy'
                      weight='bold'
                      type='button'
                    >
                      파일 첨부하기
                    </Button>
                    <Input
                      type='file'
                      id='fileUpload'
                      style={{ display: 'none' }}
                      ref={fileInputRef}
                    />
                  </div>
                  <p className='ml-[140px] mt-2 text-sm font-light'>
                    10MB 이하의 hwp, pdf, zip, MS Office 파일, 이미지 파일(JPG,
                    GIF, PNG, BMP) 만 등록 가능합니다.
                  </p>
                </div>
                <div className='mt-10 flex justify-center'>
                  <Button
                    variant='defaultnavy'
                    shape='full'
                    weight='bold'
                    className='w-[200px]'
                  >
                    문의하기
                  </Button>
                </div>
              </form>
            </h1>
          </div>
        </div>
      </SettingContainer>
    </div>
  );
};

export default SettingServicePage;
