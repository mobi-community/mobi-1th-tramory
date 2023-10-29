'use client';
import { SettingContainer } from '../_components';
import { ServiceForm, UserInquiryHistory } from './_components';

const SettingServicePage = () => {
  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <SettingContainer title='서비스 문의하기'>
        <div className='px-16 pb-16 pt-7'>
          <div className='px-7'>
            <h1 className='text-primaryGray-500 text-lg font-medium'>
              {/* 서비스 문의하기 form */}
              <ServiceForm />
            </h1>
          </div>
        </div>
        <div className='px-12'>
          <div className='flex flex-col'>
            <p className='text-primaryBlue-700 mb-5 text-xl font-bold'>
              문의 내역
            </p>
            <div className='mb-4 ml-4 flex items-center'>
              <div className='bg-primaryGray-500 mr-2 h-1 w-1 rounded-full'></div>
              <p className='text-primaryGray-500 font-medium'>
                현재까지 등록한 문의내역과 답변을 확인할 수 있습니다.{' '}
              </p>
            </div>
          </div>
          <UserInquiryHistory />
        </div>
      </SettingContainer>
    </div>
  );
};

export default SettingServicePage;
