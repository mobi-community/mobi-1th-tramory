import { InputHTMLAttributes } from 'react';
import { Control } from 'react-hook-form';

import { SignUpFormType } from '@/app/sign_up/_components/SignUpForm/SignUpForm.types';

export interface ValidatorInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  subLabel?: string;
  name: 'email' | 'password' | 'pwconfirm' | 'nickName';
  control: Control<SignUpFormType>;
  type: string;
  placeholder?: string;
}
