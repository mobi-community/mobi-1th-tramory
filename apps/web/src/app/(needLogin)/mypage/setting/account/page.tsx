'use client';
import { useAtom } from 'jotai';
import { Button } from 'ui';

import { isAccountPrivacyAtom } from '@/store/mypage.atoms';

import { SettingContainer } from '../_components';
import { ModifyForm } from './_components/ModifyForm/ModifyForm';

const SettingAccountPage = () => {
  const [isAccountPrivacy, setIsAccountPrivacy] = useAtom(isAccountPrivacyAtom);

  const handleChangeAccountPrivacy = () => {
    setIsAccountPrivacy((prev: boolean) => !prev);
  };

  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <SettingContainer title='계정 설정'>
        <div className='p-16'>
          {/* 개인정보 변경 폼 */}
          <ModifyForm modifyType='privacy' />
          {/* 비밀번호 변경 폼 */}
          <ModifyForm modifyType='password' />
          {/* 계정 공개 여부 컴포넌트 */}
          <form>
            <div className='text-primaryGray-500 px-7 font-medium'>
              <h1 className='text-lg'>계정공개 여부</h1>
              <div className='bg-primaryGray-300 my-5 h-px w-full'></div>
              <div className='ml-4'>
                <p>
                  계정 비공개 시, 프로필 및 스토리가 전체 비공개 처리되어 외부에
                  공개되지 않습니다.
                </p>
                <p className='text-sm text-rose-500'>
                  * 스토리를 공개 설정하여도, 계정 비공개 상태에서는 공개되지
                  않습니다.
                </p>
                <div className='ml-2 mt-4 flex items-center justify-between'>
                  <div className='flex'>
                    <div className='mr-5'>
                      <input
                        id='accountPublic'
                        name='radio'
                        type='radio'
                        className='accent-primaryBlue-default mr-2'
                        checked={isAccountPrivacy}
                        onChange={handleChangeAccountPrivacy}
                      />
                      <label htmlFor='accountPublic'>예</label>
                    </div>
                    <div>
                      <input
                        id='accountPrivate'
                        name='radio'
                        type='radio'
                        className='accent-primaryBlue-default mr-2'
                        checked={!isAccountPrivacy}
                        onChange={handleChangeAccountPrivacy}
                      />
                      <label htmlFor='accountPrivate'>아니오</label>
                    </div>
                  </div>
                  <Button
                    variant='defaultnavy'
                    weight='bold'
                    shape='full'
                    className='w-[200px]'
                  >
                    계정공개 여부 변경하기
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </SettingContainer>
    </div>
  );
};

export default SettingAccountPage;
