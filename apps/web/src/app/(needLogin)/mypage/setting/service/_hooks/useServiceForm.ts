import { yupResolver } from '@hookform/resolvers/yup';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import type { ServiceValidateType } from '../_components/ServiceValidator/ServiceValidator.types';
import { SERVICE_SCHEMA } from '../_schema/service.schema';

export const useServiceForm = () => {
  const { handleSubmit, control } = useForm<ServiceValidateType>({
    mode: 'onChange',
    resolver: yupResolver(SERVICE_SCHEMA),
    defaultValues: { title: '', description: '' },
  });

  const fileInputRef = useRef(null);

  const onButtonClick = () => {
    fileInputRef.current.click();
  };

  return {
    handleSubmit,
    control,
    fileInputRef,
    onButtonClick,
  };
};
