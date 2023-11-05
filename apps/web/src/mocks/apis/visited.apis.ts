import { rest } from 'msw';

import { visitedContriesConfig } from '@/constants/visited_contries.contstants';

export const getVisitedInfo = rest.get('/user/visited', (req, res, ctx) => {
  const mockVisitedData = visitedContriesConfig.tabs;

  return res(
    ctx.status(200),
    ctx.json({
      success: true,
      message: '성공',
      data: mockVisitedData,
    })
  );
});

export const getMyVisitedInfo = rest.get('/user/myvisited', (req, res, ctx) => {
  const mockVisitedData = visitedContriesConfig.tabs;

  return res(
    ctx.status(200),
    ctx.json({
      success: true,
      message: '성공',
      data: mockVisitedData,
    })
  );
});
