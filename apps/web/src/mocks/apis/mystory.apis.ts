import { rest } from 'msw';

import { planStoriesMock } from '@/app/(needLogin)/mypage/my_story/plan/_mocks/planStoriesMock';
import { recordStoriesMock } from '@/app/(needLogin)/mypage/my_story/record/_mocks/recordStoriesMock';

export const getUserRecordStories = rest.get(
  '/user/my_story/record',
  (req, res, ctx) => {
    const mockSotriesData = recordStoriesMock;
    const resoibseStatus = (
      status: number,
      success: boolean,
      message: string
    ) => {
      return res(ctx.status(status), ctx.json({ success, message }));
    };

    if (!mockSotriesData) {
      return resoibseStatus(401, false, '실패');
    } else {
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          message: '성공',
          data: mockSotriesData,
        })
      );
    }
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

export const getUserPlanStoryById = rest.get(
  '/user/my_story/plan/:postId',
  (req, res, ctx) => {
    const { postId } = req.params;
    const story = planStoriesMock.find((story) => story.id === Number(postId));

    if (!story) {
      return res(
        ctx.status(404),
        ctx.json({
          success: false,
          message: '스토리를 찾을 수 없습니다.',
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        message: '성공',
        data: story,
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

export const getUserRecordStoryById = rest.get(
  '/user/my_story/record/:postId',
  (req, res, ctx) => {
    const { postId } = req.params;
    const story = recordStoriesMock.find((story) => story.id === postId);

    if (!story) {
      return res(
        ctx.status(404),
        ctx.json({
          success: false,
          message: '스토리를 찾을 수 없습니다.',
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        message: '성공',
        data: story,
      })
    );
  }
);
