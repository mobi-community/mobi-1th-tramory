import * as yup from 'yup';

export const SERVICE_SCHEMA = yup.object({
  title: yup
    .string()
    .min(5, '5자 이상 입력해주세요.')
    .max(40, '40자 이하로 입력해주세요.')
    .required('제목을 필수로 입력해주세요.'),
  description: yup
    .string()
    .min(5, '5자 이상 입력해주세요.')
    .max(200, '200자 이하로 입력해주세요.')
    .required('내용을 필수로 입력해주세요'),
});
