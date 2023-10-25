import * as yup from 'yup';

import { signupConstants } from '@/constants';

export const PRIVACY_MODIFY_SCHEMA = yup.object({
  nickName: yup
    .string()
    .min(2, '2자 이상 입력해주세요.')
    .max(10, '10자 이하로 입력해주세요.')
    .matches(signupConstants.REGEX.nickName, {
      message: '한글, 영문, 숫자 10자 이내로 입력해주세요',
      excludeEmptyString: true,
    })
    .required('닉네임을 입력해주세요.'),
});

export const PW_MODIFY_SCHEMA = yup.object({
  password: yup
    .string()
    .min(8, '8자 이상 입력해주세요.')
    .max(16, '16자 이하로 입력해주세요.')
    .matches(signupConstants.REGEX.password, {
      message: '영문, 숫자, 특수문자를 조합해서 입력해주세요.',
    })
    .required('비밀번호를 입력해주세요'),

  pwconfirm: yup
    .string()
    .min(8, '8자 이상 입력해주세요.')
    .max(16, '16자 이하로 입력해주세요.')
    .matches(signupConstants.REGEX.password, {
      message: '영문, 숫자, 특수문자를 조합해서 입력해주세요!',
    })
    .required('비밀번호를 다시 입력해주세요'),
});
