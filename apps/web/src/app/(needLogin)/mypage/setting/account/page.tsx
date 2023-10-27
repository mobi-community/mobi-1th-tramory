'use client';
import { SettingContainer } from '../_components';
import {
  AccountPrivateOrPublic,
  PrivacyModifyForm,
  PWModifyForm,
} from './_components';
const SettingAccountPage = () => {
  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <SettingContainer title='계정 설정'>
        <div className='p-16'>
          {/* 개인정보 변경 폼 */}
          <PrivacyModifyForm />
          {/* 비밀번호 변경 폼 */}
          <PWModifyForm />
          {/* 계정 공개 여부 컴포넌트 */}
          <AccountPrivateOrPublic />
        </div>
      </SettingContainer>
    </div>
  );
};

export default SettingAccountPage;
