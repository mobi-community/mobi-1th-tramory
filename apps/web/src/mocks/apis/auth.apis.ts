import { rest } from 'msw';

type DefaultBodyType = {
  email: string;
  password?: string;
  pwconfirm?: string;
  nickName?: string;
};

export const fetchLoginUserhandler = rest.post<DefaultBodyType>(
  '/login',
  (req, res, ctx) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res(
        ctx.status(401),
        ctx.json({
          success: false,
          message: '실패',
        })
      );
    } else {
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          message: '성공',
        })
      );
    }
  }
);

// 회원가입 데이터 보내기
export const fetchSignUpUserData = rest.post<DefaultBodyType>(
  '/signup',
  (req, res, ctx) => {
    const { email, password, pwconfirm, nickName } = req.body;

    if (!email || !password || !pwconfirm || !nickName) {
      return res(
        ctx.status(400),
        ctx.json({ success: false, message: '실패' })
      );
    } else {
      return res(ctx.status(200), ctx.json({ success: true, message: '성공' }));
    }
  }
);
