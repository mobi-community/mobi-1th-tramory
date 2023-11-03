import { rest } from 'msw';

/*
- 국가 정보 객체: 국가명(영문, 국문), 좌표(위도, 경도)
- 도시 정보 객체: 도시/국가명(영문, 국문), 좌표(위도, 경도)
- 국기 이미지 객체
- 방문 기록 객체

1) 국가별 추천 게시물 페이지
- 카드 클릭 시 해당 국가 데이터, 국기 이미지, 방문 기록 데이터 요청

2) 지도 페이지 서치 바
- 국가인지 도시인지 어떻게 구분할지
- 도시의 경우 국가 국기 이미지를 어떻게 받아올지..!

*/

export const getCountryInfo = rest.get(
  '/api/info/country/:country',
  (req, res, ctx) => {
    // const { country } = req.params;

    return res(
      ctx.status(200),
      ctx.json({
        countries: ['Japan', 'China', 'Taiwan', 'Singapore'],
      })
    );
  }
);

export const getCityInfo = rest.get(
  '/api/info/city/:country/:city',
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        countries: ['Japan', 'China', 'Taiwan', 'Singapore'],
      })
    );
  }
);

export const getFlagImage = rest.get(
  '/api/info/flag/:country',
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        countries: ['Japan', 'China', 'Taiwan', 'Singapore'],
      })
    );
  }
);
export const getVisitHistory = rest.get(
  '/api/info/history/:country',
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        countries: ['Japan', 'China', 'Taiwan', 'Singapore'],
      })
    );
  }
);
