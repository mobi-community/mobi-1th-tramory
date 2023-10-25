import { rest } from 'msw';

import { dates } from '@/app/(needLogin)/travel/_components/Step4How/mocks';

export const handlers = [
  rest.get('/random', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: 'OK' }));
  }),
  rest.get('/dates', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dates));
  }),
];
