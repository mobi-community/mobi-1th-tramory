import { yupResolver } from '@hookform/resolvers/yup';
import { atom, useAtom } from 'jotai';
import { useForm } from 'react-hook-form';

import type { ModifyType } from '../_components/ModifyForm/ModifyForm.types';
import {
  ACCOUT_SCHEMAS,
  MODIFYFORM_DEFAULT_VALUES,
} from '../_schema/account.schema';

const isPWVisibleAtom = atom(false);

export const useModifyForm = (modifyType: string) => {
  const { handleSubmit, control, reset } = useForm<ModifyType>({
    mode: 'onChange',
    resolver: yupResolver(ACCOUT_SCHEMAS[modifyType]),
    defaultValues: MODIFYFORM_DEFAULT_VALUES[modifyType],
  });

  const [isPWVisible, setIsPWVisible] = useAtom(isPWVisibleAtom);

  const handleVisibleState = () => {
    setIsPWVisible((prev) => !prev);
  };

  return { handleSubmit, control, reset, isPWVisible, handleVisibleState };
};
