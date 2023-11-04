import { rest } from 'msw';

import {
  cityDataMock,
  countryDataMock,
} from '@/app/(needLogin)/recommend_country/_mocks';

export const getCountryData = rest.get('/api/countries', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      countries: ['Japan', 'China', 'Taiwan', 'Singapore'],
    })
  );
});

export const getCountryInfo = rest.get(
  '/api/country_info/:country',
  (req, res, ctx) => {
    const country = req.params.country;

    const data = {
      ...countryDataMock,
      countryEng: country,
      flagImage: '/public/images/이탈리아.gif',
    };

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        message: 'success',
        data,
      })
    );
  }
);

export const getCityInfo = rest.get('/api/city_info/:city', (req, res, ctx) => {
  const city = req.params.city;

  const data = {
    ...cityDataMock,
    cityEng: city,
    flagImage: '/public/images/이탈리아.gif',
  };

  return res(
    ctx.status(200),
    ctx.json({
      success: true,
      message: 'success',
      data,
    })
  );
});
