import * as yup from 'yup';

import { signupConstants } from '../../../constants';

export const LOGIN_SCHEMA = yup.object({
  email: yup
    .string()
    .matches(signupConstants.REGEX.id, {
      message: '이메일 형식에 맞지 않습니다',
      excludeEmptyString: true,
    })
    .required('이메일을 입력해주세요.'),
  password: yup
    .string()
    .min(8, '8자 이상 입력해주세요.')
    .max(16, '16자 이하로 입력해주세요.')
    .matches(signupConstants.REGEX.password, {
      message: '영문, 숫자, 특수문자를 조합해서 입력해주세요.',
    })
    .required('비밀번호를 입력해주세요'),
});
