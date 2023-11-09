import { rest } from 'msw';

import {
  cityDataMock,
  countryDataMock,
} from '@/app/(needLogin)/recommend_country/_mocks';

import fakeImage from '../../../public/images/이탈리아.gif';

// msw + 목데이터에 관련해서만 사용되는 로직이라 상수로 분리하지 않았습니다.
const english = /[a-zA-Z]/; //영어
const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; //한글

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

    const countryName = () => {
      if (typeof country === 'string' && english.test(country))
        return { countryEng: country };
      if (typeof country === 'string' && korean.test(country))
        return { countryKor: country };
    };

    const data = {
      ...countryDataMock,
      ...countryName(),
      flagImage: fakeImage,
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

  const cityName = () => {
    if (typeof city === 'string' && english.test(city))
      return { cityEng: city };
    if (typeof city === 'string' && korean.test(city)) return { cityKor: city };
  };

  const data = {
    ...cityDataMock,
    ...cityName(),
    flagImage: fakeImage,
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
