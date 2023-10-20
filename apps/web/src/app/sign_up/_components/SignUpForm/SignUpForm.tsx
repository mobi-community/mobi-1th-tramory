'use client';

import { useForm } from 'react-hook-form';

import { ValidatorInput } from '../../../../components';

export const SignUpForm = () => {
  const { control } = useForm();

  return (
    <div>
      <div className='flex items-center justify-center'>
        <ValidatorInput
          label={'ID'}
          subLabel={'아이디'}
          name={'id'}
          type={'text'}
          control={control}
          placeholder='예)example@gmail.com'
        />
        <div>
          <button>중복 확인</button>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <ValidatorInput
          label={'Password'}
          subLabel={'패스워드'}
          name={'password'}
          type={'password'}
          control={control}
          placeholder='영문, 숫자, 특수기호를 포함한 8자 이상으로 설정해주세요'
        />
      </div>
      <div className='flex items-center justify-center'>
        <ValidatorInput
          label={'PW Confirm'}
          subLabel={'패스워드 확인'}
          name={'pwconfirm'}
          type={'password'}
          control={control}
          placeholder='같은 패스워드를 다시 입력해주세요'
        />
      </div>
      <div className='flex items-center justify-center'>
        <ValidatorInput
          label={'Nickname'}
          subLabel={'닉네임'}
          name={'nickName'}
          type={'text'}
          control={control}
        />
        <div>
          <button>중복 확인</button>
        </div>
      </div>
    </div>
  );
};
