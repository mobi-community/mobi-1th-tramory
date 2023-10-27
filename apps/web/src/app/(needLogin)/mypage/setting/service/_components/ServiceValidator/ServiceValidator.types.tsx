import { Control } from 'react-hook-form';

export type ServiceValidateType = {
  title?: string;
  serviceType?: string;
  description?: string;
};

export interface ServiceValidateProps {
  serviceOptions?: string[];
  name: 'serviceType' | 'title' | 'description';
  control: Control<ServiceValidateType>;
  type?: string;
  placeholder?: string;
  initialValue?: string;
  value?: string;
  style?: React.CSSProperties;
}
