import { rest } from 'msw';

export const travelPlan = rest.post('/updateTitle', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ message: '제목이 입력되었습니다.' }));
});
