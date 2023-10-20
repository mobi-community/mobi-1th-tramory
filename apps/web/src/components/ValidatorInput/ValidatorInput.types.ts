import { InputHTMLAttributes } from 'react';
import { Control, FieldValues } from 'react-hook-form';

export interface ValidatorInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  subLabel?: string;
  name: string;
  control: Control<FieldValues>;
  type: string;
  placeholder?: string;
}
