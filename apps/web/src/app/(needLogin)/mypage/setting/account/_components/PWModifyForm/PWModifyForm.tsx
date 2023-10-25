import { yupResolver } from '@hookform/resolvers/yup';
import { atom, useAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { Button } from 'ui';

import { ValidatorInput } from '@/components';
import materialIcon from '@/utils/materialIcon';

import { PW_MODIFY_SCHEMA } from '../../_schema/account.schema';
import type { PWModifyType } from './PWModifyForm.types';

const isPWVisibleAtom = atom(false);

export const PWModifyForm = () => {
  const { control } = useForm<PWModifyType>({
    mode: 'onChange',
    resolver: yupResolver(PW_MODIFY_SCHEMA),
    defaultValues: { password: 'test123#$', pwconfirm: '' },
  });

  const [isPWVisible, setIsPWVisible] = useAtom(isPWVisibleAtom);

  const handleVisibleState = () => {
    setIsPWVisible((prev) => !prev);
  };

  return (
    <form>
      <div className='px-7'>
        <h1 className='text-primaryGray-500 text-lg font-medium'>
          비밀번호 변경
        </h1>
        <div className='flex flex-col p-8'>
          <div className='relative flex justify-between'>
            <p className='text-primaryGray-500 font-bold'>변경 비밀번호</p>
            <ValidatorInput
              name={'password'}
              type={isPWVisible ? 'text' : 'password'}
              control={control}
              style={{
                width: '530px',
                marginLeft: '0',
                marginRight: '104px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
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
              style={{
                width: '530px',
                marginLeft: '0',
                marginRight: '104px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
              placeholder='같은 패스워드를 다시 입력해주세요'
            />
          </div>
          <Button className='m-auto my-5 w-[200px] rounded-full font-bold'>
            비밀번호 변경하기
          </Button>
        </div>
      </div>
    </form>
  );
};
