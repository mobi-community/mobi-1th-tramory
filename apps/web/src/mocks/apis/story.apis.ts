import { rest } from 'msw';

import { storyMock } from '@/app/(needLogin)/story_community/_mocks';

export const getStoryList = rest.get('/story/story_list', (req, res, ctx) => {
  const mockStoryList = storyMock;

  return res(
    ctx.status(200),
    ctx.json({
      success: true,
      message: 'success',
      data: mockStoryList,
    })
  );
});
