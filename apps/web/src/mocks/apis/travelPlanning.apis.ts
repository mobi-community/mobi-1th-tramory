import { rest } from 'msw';

export const travelPlan = rest.post(
  'http://localhost:3000/updateTitle',
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: '제목이 입력되었습니다.' })
    );
  }
);
