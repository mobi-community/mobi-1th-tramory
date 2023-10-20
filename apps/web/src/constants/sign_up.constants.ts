export type SignUpConstants = typeof signupConstants;
import mainImage from '../app/sign_up/_mock/main-image.png';
import subImage from '../app/sign_up/_mock/sub-image.png';
import mainLogo from '../app/sign_up/_mock/testLogo.png';

export const signupConstants = {
  image: {
    mainLogo: mainLogo,
    mainImage: mainImage,
    subImage: subImage,
  },
  info: '회원가입 하기',
  REGEX: {
    id: /^[0-9a-zA-Z]+$/,
    password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-?~.,/])(?=.*[0-9]).{8,30}$/,
    nickName: /^[가-힣0-9a-zA-Z]+$/,
  },
};
