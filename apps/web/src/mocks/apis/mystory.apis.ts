import { rest } from 'msw';

import { planStoriesMock } from '@/app/(needLogin)/mypage/my_story/plan/_mocks/planStoriesMock';
import { recordStoriesMock } from '@/app/(needLogin)/mypage/my_story/record/_mocks/recordStoriesMock';

export const getUserRecordStories = rest.get(
  '/user/my_story/record',
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

export const getUserPlanStories = rest.get(
  '/user/my_story/plan',
  (req, res, ctx) => {
    const mockSotriesData = planStoriesMock;

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

export const deleteUserRecordStories = rest.delete(
  '/user/my_story/record/:postId',
  (req, res, ctx) => {
    const { postId } = req.params;

    console.log(`${postId} 삭제 완료`);
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        message: '성공',
        postId,
      })
    );
  }
);
