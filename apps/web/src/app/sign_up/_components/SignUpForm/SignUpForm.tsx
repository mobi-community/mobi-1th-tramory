'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button } from 'ui';

import { ValidatorInput } from '../../../../components';
import { SIGNUP_SCHEMA } from '../../_schema';
import { SignUpFormType } from './SignUpForm.types';

export const SignUpForm = () => {
  const { control } = useForm<SignUpFormType>({
    mode: 'onChange',
    resolver: yupResolver(SIGNUP_SCHEMA),
    defaultValues: { id: '', password: '', pwconfirm: '', nickName: '' },
  });

  return (
    <form>
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
          <Button type='button'>중복 확인</Button>
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
          <Button>중복 확인</Button>
        </div>
      </div>
    </form>
  );
};
