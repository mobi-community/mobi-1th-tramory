import { rest } from 'msw';

import {
  cityDataMock,
  cityListMock,
  countryDataMock,
  countryListMock,
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

    // 영어로 된 국가명 존재 여부
    const hasEngName = (engName: string) =>
      countryListMock.some((country) => country.countryEng === engName);

    // 한글로 된 국가명 존재 여부
    const hasKorName = (korName: string) =>
      countryListMock.some((country) => country.countryKor === korName);

    const countryName = () => {
      if (
        typeof country === 'string' &&
        english.test(country) &&
        hasEngName(country)
      ) {
        return { countryEng: country };
      } else if (
        typeof country === 'string' &&
        korean.test(country) &&
        hasKorName(country)
      ) {
        return { countryKor: country };
      } else {
        return null;
      }
    };

    const data = {
      ...countryDataMock,
      ...countryName(),
      flagImage: fakeImage,
    };

    const resoibseStatus = (
      status: number,
      success: boolean,
      message: string
    ) => {
      return res(ctx.status(status), ctx.json({ success, message }));
    };

    if (!!!countryName()) {
      return resoibseStatus(401, false, '실패');
    }
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

  // 영어로 된 도시명 존재 여부
  const hasEngName = (engName: string) =>
    cityListMock.some((city) => city.cityEng === engName);

  // 한글로 된 도시명 존재 여부
  const hasKorName = (korName: string) =>
    cityListMock.some((city) => city.cityKor === korName);

  const cityName = () => {
    if (typeof city === 'string' && english.test(city) && hasEngName(city))
      return { cityEng: city };
    if (typeof city === 'string' && korean.test(city) && hasKorName(city))
      return { cityKor: city };
    return null;
  };

  const data = {
    ...cityDataMock,
    ...cityName(),
    flagImage: fakeImage,
  };

  const resoibseStatus = (
    status: number,
    success: boolean,
    message: string
  ) => {
    return res(ctx.status(status), ctx.json({ success, message }));
  };

  if (!!!cityName()) {
    return resoibseStatus(401, false, '실패');
  }
  return res(
    ctx.status(200),
    ctx.json({
      success: true,
      message: 'success',
      data,
    })
  );
});
