import { rest } from 'msw';

import { storyMock } from '@/app/(needLogin)/story_community/_mocks';

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
