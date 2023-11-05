import { rest } from 'msw';

import { badgeConfig } from '@/constants';
export const getBadgeInfo = rest.get('/user/badge', (req, res, ctx) => {
  const mockBadgeData = badgeConfig.badges;

  return res(
    ctx.status(200),
    ctx.json({
      success: true,
      message: '성공',
      data: mockBadgeData,
    })
  );
});
