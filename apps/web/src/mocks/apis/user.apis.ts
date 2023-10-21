import { rest } from 'msw';

export const getUserData = rest.get('api/users/getUserData', (_, res, ctx) => {
  return res(ctx.status(200), ctx.json({ message: 'success!!' }));
});
