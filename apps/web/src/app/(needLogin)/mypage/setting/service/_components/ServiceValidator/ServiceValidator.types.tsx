import { Control } from 'react-hook-form';

export type ServiceValidateType = {
  title?: string;
  description?: string;
};

export interface ServiceValidateProps {
  name: 'title' | 'description';
  control: Control<ServiceValidateType>;
  type: string;
  placeholder?: string;
  value?: string;
  style?: React.CSSProperties;
}
