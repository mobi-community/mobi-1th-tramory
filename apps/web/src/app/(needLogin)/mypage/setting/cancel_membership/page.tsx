'use client';
import { useAtom } from 'jotai';
import Image from 'next/image';
import { useEffect } from 'react';
import { Button, Checkbox } from 'ui';

import { cancelMembersipConfig } from '@/constants';
import { userProfileInfoAtom } from '@/store/mypage.atoms';

import { SettingContainer } from '../_components';

const SettingCancelMembershipPage = () => {
  const [userInfo, setUserInfo] = useAtom(userProfileInfoAtom);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('/user/info');
        const data = await response.json();

        if (response.ok) {
          setUserInfo(data.data);
        } else {
          console.error(
            '서버로부터 정보를 가져오는 데 실패했습니다:',
            data.message
          );
        }
      } catch (error) {
        console.error('사용자 정보를 가져오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleDeleteMember = async () => {
    try {
      const response = await fetch(`/user/cancelmember/${userInfo.email}`, {
        method: 'DELETE',
      });

      console.log('삭제 확인', response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <SettingContainer title='회원 탈퇴'>
        <div className='p-16'>
          <div className='px-7'>
            <h1 className='text-primaryGray-500 text-lg font-medium'>
              {cancelMembersipConfig.map((info, index) => (
                <div key={index}>
                  <h1 className='mb-5'>{info.title}</h1>
                  {info.description && (
                    <div className='mb-8 ml-7 flex items-center text-base'>
                      <div className='bg-primaryGray-500 mr-4 h-1 w-1 rounded-full'></div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: info.description,
                        }}
                      />
                    </div>
                  )}

                  {info.user?.profileImage && (
                    <div className='bg-primaryBlue-100 mb-8 ml-7 flex w-[400px] items-center rounded-3xl border border-[#CFDDEE] p-4'>
                      <div className='relative h-[40px] w-[40px]'>
                        <Image
                          src={userInfo?.profileImage}
                          fill
                          alt='유저 프로필'
                          className='rounded-full'
                          priority
                        />
                      </div>
                      <p className='ml-3 text-base'>{userInfo?.email}</p>
                    </div>
                  )}

                  {info.deleteData?.map((deletedata, idx) => (
                    <div key={idx} className='ml-7 flex items-center text-base'>
                      <div className='bg-primaryGray-500 mr-4 h-1 w-1 rounded-full'></div>
                      <div>{deletedata}</div>
                    </div>
                  ))}

                  {info.confirmCheckDesc && (
                    <div className='mb-8'>
                      <div className='bg-primaryGray-300 mb-7 h-px w-full'></div>
                      <Checkbox id='cancelMemeberConfirm' className='mr-2' />
                      <label
                        htmlFor='cancelMemeberConfirm'
                        className='text-base'
                      >
                        {info.confirmCheckDesc}
                      </label>
                    </div>
                  )}
                </div>
              ))}
            </h1>
            <div className='flex w-full justify-center'>
              <Button
                variant='defaultnavy'
                weight='bold'
                shape='full'
                className='px-12 text-white'
                onClick={handleDeleteMember}
              >
                탈퇴하기
              </Button>
            </div>
          </div>
        </div>
      </SettingContainer>
    </div>
  );
};

export default SettingCancelMembershipPage;
