import { InputHTMLAttributes } from 'react';
import { Control } from 'react-hook-form';

import type { SignUpFormType } from '../../app/sign_up/_components';

export interface ValidatorInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  subLabel?: string;
  name: 'email' | 'password' | 'pwconfirm' | 'nickName';
  control: Control<SignUpFormType>;
  type: string;
  placeholder?: string;
}
