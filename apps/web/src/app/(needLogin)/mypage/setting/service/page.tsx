'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from 'ui';

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
    // 이 함수는 버튼 클릭 시 실행됩니다.
    // 이 때 file input을 클릭하는 것처럼 동작하게 합니다.
    fileInputRef.current.click();
  };

  const defaultStyle = {
    width: '530px',
    marginLeft: '0',
    marginRight: '104px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };
  const onSubmit = () => {
    console.log('성공');
  };

  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <SettingContainer title='서비스 문의하기'>
        <div className='px-16 pb-16 pt-7'>
          <div className='px-7'>
            <h1 className='text-primaryGray-500 text-lg font-medium'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between'>
                  <p className='font-medium'>
                    문의 종류{' '}
                    <span className='text-primaryBlue-default font-bold'>
                      *
                    </span>
                  </p>
                  {/* select */}
                  <div className='h-[36px] w-[650px] border'></div>
                </div>
                <div className='flex justify-between'>
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
                <div className='flex justify-between'>
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
                <div className='flexflex-col'>
                  <div className='flex'>
                    <p className='font-medium'>파일 첨부</p>
                    <Button
                      onClick={onButtonClick}
                      variant='roundednavy'
                      weight='bold'
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
                  <p className='text-sm font-light'>
                    10MB 이하의 hwp, pdf, zip, MS Office 파일, 이미지 파일(JPG,
                    GIF, PNG, BMP) 만 등록 가능합니다.
                  </p>
                </div>
                <Button
                  variant='defaultnavy'
                  shape='full'
                  weight='bold'
                  className='w-[200px]'
                >
                  문의하기
                </Button>
              </form>
            </h1>
          </div>
        </div>
      </SettingContainer>
    </div>
  );
};

export default SettingServicePage;
