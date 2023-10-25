import {
  africaData,
  asiaData,
  BannerImg,
  europeData,
  naData,
  oceaniaData,
  saData,
} from '../app/(needLogin)/mypage/visit_country/_mock';

export type VisitedContriesConfig = typeof visitedContriesConfig;

export const visitedContriesConfig = {
  tabs: [
    {
      lastPathname: 'continent',
      tabTitle: '대륙별',
      continents: [
        {
          ko: '아시아',
          en: 'ASIA',
          bannerImg: BannerImg.asiaBanner,
          continentData: asiaData,
        },
        {
          ko: '아프리카',
          en: 'AFRICA',
          bannerImg: BannerImg.africaBanner,
          continentData: africaData,
        },
        {
          ko: '유럽',
          en: 'EUROPE',
          bannerImg: BannerImg.europeBanner,
          continentData: europeData,
        },
        {
          ko: '북아메리카',
          en: 'NORTH AMERICA',
          bannerImg: BannerImg.naBanner,
          continentData: naData,
        },
        {
          ko: '남아메리카',
          en: 'SOUTH AMERICA',
          bannerImg: BannerImg.saBanner,
          continentData: saData,
        },
        {
          ko: '오세아니아',
          en: 'OCEANIA',
          bannerImg: BannerImg.oceaniaBanner,
          continentData: oceaniaData,
        },
      ],
    },
    {
      lastPathname: 'my_visited',
      tabTitle: '방문국가별',
    },
  ],
};
