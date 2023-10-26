import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button } from 'ui';

import { ValidatorInput } from '@/components';

import { PRIVACY_MODIFY_SCHEMA } from '../../_schema/account.schema';
import type { PrivacyModifyType } from './PrivacyModifyForm.types';

export const PrivacyModifyForm = () => {
  const { control } = useForm<PrivacyModifyType>({
    mode: 'onChange',
    resolver: yupResolver(PRIVACY_MODIFY_SCHEMA),
    defaultValues: { nickName: '유저 닉네임' },
  });

  return (
    <form>
      <div className='px-7'>
        <h1 className='text-primaryGray-500 text-lg font-medium'>
          개인정보 변경
        </h1>
        <div className='flex flex-col p-8'>
          <div className='flex justify-between'>
            <p className='text-primaryGray-500 font-bold'>이메일</p>
            <ValidatorInput
              disabled
              name={'email'}
              type={'text'}
              control={control}
              style={{
                width: '530px',
                marginLeft: '0',
                marginRight: '104px',
                background: '#eee',
                borderRadius: '4px',
              }}
              placeholder='example@gmail.com'
            />
          </div>
          <div className='flex justify-between'>
            <p className='text-primaryGray-500 w-[52px] font-bold'>닉네임</p>
            <div className='flex'>
              <ValidatorInput
                name={'nickName'}
                type={'text'}
                control={control}
                style={{
                  width: '530px',
                  marginLeft: '0',
                  marginRight: '18px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
              <Button variant='roundednavy' font='xs' className='h-[36px]'>
                중복 확인
              </Button>
            </div>
          </div>
          <Button
            variant='defaultnavy'
            weight='bold'
            shape='full'
            className='m-auto my-5 w-[200px] text-white'
          >
            개인정보 수정하기
          </Button>
        </div>
      </div>
    </form>
  );
};
