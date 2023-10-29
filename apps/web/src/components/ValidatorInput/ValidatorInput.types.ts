import { SignUpFormType } from '@/app/sign_up/_components/SignUpForm/SignUpForm.types';
import { InputHTMLAttributes } from 'react';
import { Control } from 'react-hook-form';

export interface ValidatorInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  subLabel?: string;
  name: 'email' | 'password' | 'pwconfirm' | 'nickName';
  control: Control<SignUpFormType>;
  type: string;
  placeholder?: string;
}
