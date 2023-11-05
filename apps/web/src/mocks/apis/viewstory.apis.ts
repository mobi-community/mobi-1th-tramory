import { rest } from 'msw';

import { recordStoriesMock } from '@/app/(needLogin)/mypage/my_story/record/_mocks/recordStoriesMock';

export const getUserViewStories = rest.get(
  '/user/view_story',
  (req, res, ctx) => {
    const mockSotriesData = recordStoriesMock;

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        message: '성공',
        data: mockSotriesData,
      })
    );
  }
);
