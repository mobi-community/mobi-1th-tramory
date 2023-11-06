import { rest } from 'msw';

import { storyMock } from '@/app/(needLogin)/story_community/_mocks/storyMock';
import type { storyType } from '@/components/CommonStory';

// 스토리 목록
export const getStoryList = rest.get(
  '/story/story_list/:page',
  (req, res, ctx) => {
    const mockStoryList = storyMock;

    const page = req.params.page;

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        message: 'success',
        data: mockStoryList.slice(
          (Number(page) + 1) * 10 - 10,
          (Number(page) + 1) * 10
        ),
        total: mockStoryList.length,
      })
    );
  }
);

// 스토리 상세
export const getStoryDetail = rest.get(
  '/story/detail/:postId',
  (req, res, ctx) => {
    const postId = req.params.postId;

    const targetStory: storyType = storyMock.find(
      (detail) => detail.id + '' === postId
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
