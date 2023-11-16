import * as yup from 'yup';
export const TITLE_SCHEMA = yup.object({
  title: yup
    .string()
    .min(5, '최소 5자 이상 입력해 주세요.')
    .max(20, '최대 20자 까지만 입력 가능합니다.')
    .required('제목을 입력해 주세요 '),
});

export const CATEGORY_SCHEMA = yup.object({
  theme: yup.string().required('카테고리를 선택해 주세요'),
  travelHashTags: yup.array(),
});

export const DATE_SCHEMA = yup.object({
  days: yup.string().required('작성할 일자를 선택해 주세요'),
});
