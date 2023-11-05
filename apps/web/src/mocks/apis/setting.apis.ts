import { rest } from 'msw';

import { InquiryMockData } from '@/app/(needLogin)/mypage/setting/service/_mock/InquiryMocks';

type DefaultBodyType = {
  nickName?: string;
  password?: string;
  pwconfirm?: string;
  isPrivacy?: boolean;
  serviceType?: string;
  title?: string;
  description?: string;
};

// account
export const patchAccountNicknameForm = rest.patch<DefaultBodyType>(
  'user/info/privacy',
  (req, res, ctx) => {
    const { nickName } = req.body;
    const resoibseStatus = (
      status: number,
      success: boolean,
      message: string,
      nickName?: string
    ) => {
      return res(ctx.status(status), ctx.json({ success, message, nickName }));
    };

    if (nickName) {
      return resoibseStatus(200, true, '성공', nickName);
    } else {
      return resoibseStatus(401, false, '실패');
    }
  }
);

export const patchAccountPasswordForm = rest.patch<DefaultBodyType>(
  'user/info/password',
  (req, res, ctx) => {
    const { password, pwconfirm } = req.body;
    const resoibseStatus = (
      status: number,
      success: boolean,
      message: string,
      password?: string,
      pwconfirm?: string
    ) => {
      return res(
        ctx.status(status),
        ctx.json({ success, message, password, pwconfirm })
      );
    };

    if (password === pwconfirm) {
      return resoibseStatus(200, true, '성공', password, pwconfirm);
    } else {
      return resoibseStatus(401, false, '실패');
    }
  }
);

export const patchAccountIsPrivacy = rest.patch<DefaultBodyType>(
  'user/info/isPrivacy',
  (req, res, ctx) => {
    const { isPrivacy } = req.body;
    const resoibseStatus = (
      status: number,
      success: boolean,
      message: string,
      isPrivacy?: boolean
    ) => {
      return res(ctx.status(status), ctx.json({ success, message, isPrivacy }));
    };

    return resoibseStatus(200, true, '성공', isPrivacy);
  }
);

// cancel_membership
export const deleteUser = rest.delete(
  '/user/cancelmember/:userId',
  (req, res, ctx) => {
    const { userId } = req.params;

    console.log(`${userId} 회원 삭제 완료`);
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        message: '성공',
        userId,
      })
    );
  }
);

// service

// 문의하기 내역 get
export const getInquiryHistory = rest.get(
  '/user/service/inquiryhistory',
  (req, res, ctx) => {
    const mockInquiryHistoryData = InquiryMockData;

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        message: '성공',
        data: mockInquiryHistoryData,
      })
    );
  }
);

// 문의 form post
export const postServiceForm = rest.post<DefaultBodyType>(
  '/user/service/serviceform',
  (req, res, ctx) => {
    const { serviceType, title, description } = req.body;
    const resoibseStatus = (
      status: number,
      success: boolean,
      message: string,
      data?: { serviceType?: string; title?: string; description?: string }
    ) => {
      return res(ctx.status(status), ctx.json({ success, message, data }));
    };

    if (!serviceType || !title || !description) {
      return resoibseStatus(401, false, '실패');
    } else {
      return resoibseStatus(200, true, '성공', {
        serviceType,
        title,
        description,
      });
    }
  }
);
