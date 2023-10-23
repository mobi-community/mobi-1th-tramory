import { rest } from 'msw';

export const getCountryData = [
  rest.get('/api/countries', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        countries: ['Japan', 'China', 'Taiwan', 'Singapore'],
      })
    );
  }),
];
