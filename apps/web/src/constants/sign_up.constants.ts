export type SignUpConstants = typeof signupConstants;
import mainImage from '../app/sign_up/_mocks/main-image.png';
import subImage from '../app/sign_up/_mocks/sub-image.png';
import subImage2 from '../app/sign_up/_mocks/sub-image2.png';
import mainLogo from '../app/sign_up/_mocks/testLogo.png';

export const signupConstants = {
  image: {
    mainLogo: mainLogo,
    mainImage: mainImage,
    subImage: subImage,
    subImage2: subImage2,
  },
  info: '회원가입 하기',
  REGEX: {
    id: /^[a-z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/i,
    password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-?~.,/])(?=.*[0-9]).{8,30}$/,
    nickName: /^[가-힣0-9a-zA-Z]+$/,
  },
};
