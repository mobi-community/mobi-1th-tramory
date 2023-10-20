import * as yup from 'yup';

import { signupConstants } from '../../../constants/sign_up.constants';

export const SIGNUP_SCHEMA = yup.object({
  id: yup
    .string()
    .min(5, '5자 이상 입력해주세요.')
    .max(12, '12자 이하로 입력해주세요.')
    .matches(signupConstants.REGEX.id, {
      message: '영문과 숫자만 입력해주세요.',
      excludeEmptyString: true,
    })
    .required('아이디을 입력해주세요.'),

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
      message: '영문, 숫자, 특수문자를 조합해서 입력해주세요.',
    })
    .required('비밀번호를 입력해주세요'),

  nickName: yup
    .string()
    .min(3, '3자 이상 입력해주세요.')
    .max(15, '15자 이하로 입력해주세요.')
    .matches(signupConstants.REGEX.nickName, {
      message: '닉네임에 영문, 한글, 숫자만 입력해주세요.',
      excludeEmptyString: true,
    })
    .required('아이디을 입력해주세요.'),
});
