import { yupResolver } from '@hookform/resolvers/yup';
import { atom, useAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { Button } from 'ui';

import { UserInfo, userInfo } from '@/app/(needLogin)/mypage/_mocks';
import { ValidatorInput } from '@/components';
import materialIcon from '@/utils/materialIcon';

import {
  ACCOUT_SCHEMAS,
  MODIFYFORM_DEFAULT_VALUES,
} from '../../_schema/account.schema';
import type { ModifyType } from './ModifyForm.types';
const isPWVisibleAtom = atom(false);

export const ModifyForm = ({ modifyType }) => {
  const { handleSubmit, control } = useForm<ModifyType>({
    mode: 'onChange',
    resolver: yupResolver(ACCOUT_SCHEMAS[modifyType]),
    defaultValues: MODIFYFORM_DEFAULT_VALUES[modifyType],
  });

  const isTypePrivacy = modifyType === 'privacy';

  const [isPWVisible, setIsPWVisible] = useAtom(isPWVisibleAtom);

  const defaultStyle = {
    width: '530px',
    marginLeft: '0',
    marginRight: '104px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const emailStyle = {
    border: 'none',
    background: '#eee',
  };

  const nicknameConfirmStyle = {
    marginRight: '23px',
  };

  const handleVisibleState = () => {
    setIsPWVisible((prev) => !prev);
  };

  const onSubmit = (data: UserInfo) => {
    console.log('onSumbit!', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='px-7'>
        <h1 className='text-primaryGray-500 text-lg font-medium'>
          {isTypePrivacy ? '개인정보 변경' : '비밀번호 변경'}
        </h1>
        <div className='flex flex-col p-8'>
          {isTypePrivacy ? (
            <>
              <div className='flex justify-between'>
                <p className='text-primaryGray-500 font-bold'>이메일</p>
                <ValidatorInput
                  disabled
                  name={'email'}
                  type={'text'}
                  control={control}
                  style={{ ...defaultStyle, ...emailStyle }}
                  placeholder={userInfo.email}
                />
              </div>
              <div className='flex justify-between'>
                <p className='text-primaryGray-500 w-[52px] font-bold'>
                  닉네임
                </p>
                <div className='flex'>
                  <ValidatorInput
                    name={'nickName'}
                    type={'text'}
                    control={control}
                    style={{ ...defaultStyle, ...nicknameConfirmStyle }}
                  />
                  <Button variant='roundednavy' font='xs' className='h-[36px]'>
                    중복 확인
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className='relative flex justify-between'>
                <p className='text-primaryGray-500 font-bold'>변경 비밀번호</p>
                <ValidatorInput
                  name={'password'}
                  type={isPWVisible ? 'text' : 'password'}
                  control={control}
                  style={defaultStyle}
                  placeholder='영문, 숫자, 특수기호를 포함한 8자 이상으로 설정해주세요'
                />
                <p
                  className='absolute right-28 top-[8px] cursor-pointer'
                  onClick={handleVisibleState}
                >
                  {materialIcon({
                    iconName: isPWVisible ? 'visibility_off' : 'visibility',
                    style: 'text-primaryGray-400',
                    size: 20,
                  })}
                </p>
              </div>
              <div className='flex justify-between'>
                <p className='text-primaryGray-500 font-bold'>비밀번호 확인</p>
                <ValidatorInput
                  name={'pwconfirm'}
                  type={isPWVisible ? 'text' : 'password'}
                  control={control}
                  style={defaultStyle}
                  placeholder='같은 패스워드를 다시 입력해주세요'
                />
              </div>
            </>
          )}

          <Button
            variant='defaultnavy'
            weight='bold'
            shape='full'
            className='m-auto my-5 w-[200px]'
          >
            {isTypePrivacy ? '개인정보 수정하기' : '비밀번호 변경하기'}
          </Button>
        </div>
      </div>
    </form>
  );
};
