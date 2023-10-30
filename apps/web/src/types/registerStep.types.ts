import { Control } from 'react-hook-form';

export interface IregisterFormvalue {
  [key: string]: string;
}

export interface IRegisterProps {
  control: Control<IregisterFormvalue>;
  id?: number;
  name?: string;
}
