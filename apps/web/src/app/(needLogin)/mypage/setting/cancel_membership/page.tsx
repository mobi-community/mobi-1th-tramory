import { SettingContainer } from '../_components';
import { CancelInfo } from './_components';

const SettingCancelMembershipPage = () => {
  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <SettingContainer title='회원 탈퇴'>
        <CancelInfo />
      </SettingContainer>
    </div>
  );
};

export default SettingCancelMembershipPage;
