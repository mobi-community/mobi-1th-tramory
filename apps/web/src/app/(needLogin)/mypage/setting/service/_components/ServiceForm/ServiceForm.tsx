'use client';
import { Button, Input } from 'ui';

import { serviceOption } from '@/constants/select_options.constants';

import { useServiceForm } from '../../_hooks/useServiceForm';
import { ServiceValidator } from '../ServiceValidator/ServiceValidator';
import { ServiceValidateType } from '../ServiceValidator/ServiceValidator.types';
import { defaultStyle, justifyBetween } from './style';

export const ServiceForm = () => {
  const { handleSubmit, control, fileInputRef, onButtonClick } =
    useServiceForm();

  const onSubmit = async (data: ServiceValidateType) => {
    alert(
      `문의 종류: ${data.serviceType}, 제목: ${data.title}, 내용: ${data.description}`
    );
    console.log(data.serviceType, data.title, data.description);
    try {
      const response = await fetch('/user/service/serviceform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('문의하기 post 실패');
      }

      const responseData = await response.json();

      console.log('response', responseData);
    } catch (error) {
      console.error('로그인 에러:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={justifyBetween}>
        <p className='mb-8 font-medium'>
          문의 종류{' '}
          <span className='text-primaryBlue-default font-bold'>*</span>
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
          제목 <span className='text-primaryBlue-default font-bold'>*</span>
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
          내용 <span className='text-primaryBlue-default font-bold'>*</span>
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
          10MB 이하의 hwp, pdf, zip, MS Office 파일, 이미지 파일(JPG, GIF, PNG,
          BMP) 만 등록 가능합니다.
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
  );
};
