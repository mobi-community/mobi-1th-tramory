import { rest } from 'msw';

type DefaultBodyType = {
  email: string;
  password?: string;
  pwconfirm?: string;
  nickName?: string;
};

// 로그인 데이터 보내기
export const fetchLoginUserhandler = rest.post<DefaultBodyType>(
  '/login',
  (req, res, ctx) => {
    const { email, password } = req.body;
    const resoibseStatus = (
      status: number,
      success: boolean,
      message: string
    ) => {
      return res(ctx.status(status), ctx.json({ success, message }));
    };

    if (!email || !password) {
      return resoibseStatus(401, false, '실패');
    } else {
      return resoibseStatus(200, true, '성공');
    }
  }
);

// 회원가입 데이터 보내기
export const fetchSignUpUserData = rest.post<DefaultBodyType>(
  '/signup',
  (req, res, ctx) => {
    const { email, password, pwconfirm, nickName } = req.body;
    const resoibseStatus = (
      status: number,
      success: boolean,
      message: string
    ) => {
      return res(ctx.status(status), ctx.json({ success, message }));
    };

    if (!email || !password || !pwconfirm || !nickName) {
      return resoibseStatus(400, false, '실패');
    } else {
      return resoibseStatus(200, true, '성공');
    }
  }
);
