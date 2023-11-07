import { rest } from 'msw';

import { recordStoriesMock } from '@/app/(needLogin)/mypage/my_story/record/_mocks/recordStoriesMock';
import { UserInfo } from '@/app/(needLogin)/otherspage/_mocks';
import { currentBadge, currentBanner } from '@/utils/otherPageMockFunc';

export const getOtherStories = rest.get(
  '/api/othersStories',
  (req, res, ctx) => {
    const mockStoryList = recordStoriesMock;
    const resoibseStatus = (
      status: number,
      success: boolean,
      message: string
    ) => {
      return res(ctx.status(status), ctx.json({ success, message }));
    };
    // const page = req.params.page;

    if (!mockStoryList) {
      return resoibseStatus(401, false, '실패');
    } else {
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          message: '성공',
          data: mockStoryList,
        })
      );
    }
  }
);

export const getOthersUserInfo = rest.get(
  '/api/othersUserInfo',
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(UserInfo));
  }
);

export const getOtherBadges = rest.get('/api/othersBadges', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(currentBadge));
});

export const getOthersBanner = rest.get(
  '/api/othersBanner',
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(currentBanner));
  }
);
