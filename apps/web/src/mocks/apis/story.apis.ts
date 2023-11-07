import { rest } from 'msw';

import { recordStoriesMock } from '@/app/(needLogin)/mypage/my_story/record/_mocks/recordStoriesMock';

// 스토리 목록
export const getStoryList = rest.get(
  '/story/storypage/:page',
  (req, res, ctx) => {
    const mockStoryList = recordStoriesMock;
    const resoibseStatus = (
      status: number,
      success: boolean,
      message: string
    ) => {
      return res(ctx.status(status), ctx.json({ success, message }));
    };
    const page = req.params.page;

    if (!mockStoryList) {
      return resoibseStatus(401, false, '실패');
    } else {
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          message: '성공',
          data: mockStoryList.slice(
            (Number(page) + 1) * 10 - 10,
            (Number(page) + 1) * 10
          ),
          total: mockStoryList.length,
        })
      );
    }
  }
);

// 스토리 상세
export const getStoryDetail = rest.get(
  '/story/detail/:postId',
  (req, res, ctx) => {
    const postId = req.params.postId;

    const targetStory = recordStoriesMock.find(
      (detail) => detail.id === postId
    );

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        message: 'success',
        data: targetStory,
      })
    );
  }
);
