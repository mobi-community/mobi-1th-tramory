import { StaticImageData } from 'next/image';

// 아프리카
import egyptImage from '/public/images/recom_country/africa/recom_egypt.jpg';
import madagascarImage from '/public/images/recom_country/africa/recom_madagascar.jpg';
import mauritiusImage from '/public/images/recom_country/africa/recom_mauritius.jpg';
import moroccoImage from '/public/images/recom_country/africa/recom_morocco.jpg';
import namibiaImage from '/public/images/recom_country/africa/recom_namibia.jpg';
import materialIcon from '@/utils/materialIcon';

const africa = [
  { id: 0, country: 'mauritius', coverImage: mauritiusImage },
  { id: 1, country: 'morocco', coverImage: moroccoImage },
  { id: 2, country: 'namibia', coverImage: namibiaImage },
  { id: 3, country: 'egypt', coverImage: egyptImage },
  { id: 4, country: 'madagascar', coverImage: madagascarImage },
];

// 아시아
import chinaImage from '/public/images/recom_country/asia/recom_china.jpg';
import japanImage from '/public/images/recom_country/asia/recom_japan.jpg';
import southKoreaImage from '/public/images/recom_country/asia/recom_south_korea.jpg';
import taiwanImage from '/public/images/recom_country/asia/recom_taiwan.jpg';
import thailandImage from '/public/images/recom_country/asia/recom_thailand.jpg';
import uaeImage from '/public/images/recom_country/asia/recom_united_arab_emirates.jpg';
import vietnamImage from '/public/images/recom_country/asia/recom_vietnam.jpg';

const asia = [
  { id: 0, country: 'china', coverImage: chinaImage },
  { id: 1, country: 'japan', coverImage: japanImage },
  { id: 2, country: 'south korea', coverImage: southKoreaImage },
  { id: 3, country: 'taiwan', coverImage: taiwanImage },
  { id: 4, country: 'thailand', coverImage: thailandImage },
  { id: 5, country: 'vietnam', coverImage: vietnamImage },
  { id: 6, country: 'uae', coverImage: uaeImage },
];

// 유럽
import franceImage from '/public/images/recom_country/europe/recom_france.jpg';
import germanyImage from '/public/images/recom_country/europe/recom_germany.jpg';
import italyImage from '/public/images/recom_country/europe/recom_italy.jpg';
import spainImage from '/public/images/recom_country/europe/recom_spain.jpg';
import switzerlandImage from '/public/images/recom_country/europe/recom_switzerland.jpg';
import ukImage from '/public/images/recom_country/europe/recom_uk.jpg';

const europe = [
  { id: 0, country: 'france', coverImage: franceImage },
  { id: 1, country: 'germany', coverImage: germanyImage },
  { id: 2, country: 'italy', coverImage: italyImage },
  { id: 3, country: 'spain', coverImage: spainImage },
  { id: 4, country: 'switzerland', coverImage: switzerlandImage },
  { id: 5, country: 'uk', coverImage: ukImage },
];

// 북아메리카
import canadaImage from '/public/images/recom_country/northamerica/recom_canada.jpg';
import jamaicaImage from '/public/images/recom_country/northamerica/recom_jamaica.jpg';
import kubaImage from '/public/images/recom_country/northamerica/recom_kuba.jpg';
import mexicoImage from '/public/images/recom_country/northamerica/recom_mexico.jpg';
import usaImage from '/public/images/recom_country/northamerica/recom_usa.jpg';

const northAmerica = [
  { id: 0, country: 'usa', coverImage: usaImage },
  { id: 1, country: 'canada', coverImage: canadaImage },
  { id: 2, country: 'mexico', coverImage: mexicoImage },
  { id: 3, country: 'jamaica', coverImage: jamaicaImage },
  { id: 4, country: 'kuba', coverImage: kubaImage },
];

// 남아메리카
import argentinaImage from '/public/images/recom_country/southamerica/recom_argentina.jpg';
import boliviainaImage from '/public/images/recom_country/southamerica/recom_bolivia.jpg';
import brazilImage from '/public/images/recom_country/southamerica/recom_brazil.jpg';
import chileImage from '/public/images/recom_country/southamerica/recom_chile.jpg';
import peruImage from '/public/images/recom_country/southamerica/recom_peru.jpg';
import uruguayImage from '/public/images/recom_country/southamerica/recom_uruguay.jpg';

const southAmerica = [
  { id: 0, country: 'argentina', coverImage: argentinaImage },
  { id: 1, country: 'bolivia', coverImage: boliviainaImage },
  { id: 2, country: 'brazil', coverImage: brazilImage },
  { id: 3, country: 'chile', coverImage: chileImage },
  { id: 4, country: 'peru', coverImage: peruImage },
  { id: 5, country: 'uruguay', coverImage: uruguayImage },
];

// 오세아니아
import australiaImage from '/public/images/recom_country/oceania/recom_australia.jpg';
import fijiImage from '/public/images/recom_country/oceania/recom_fiji.jpg';
import newZealandImage from '/public/images/recom_country/oceania/recom_new_zealand.jpg';
import papuaNewGuineaImage from '/public/images/recom_country/oceania/recom_papua_new_guinea.jpg';
import samoaImage from '/public/images/recom_country/oceania/recom_samoa.jpg';

const oceania = [
  { id: 0, country: 'australia', coverImage: australiaImage },
  { id: 1, country: 'new zealand', coverImage: newZealandImage },
  { id: 2, country: 'fiji', coverImage: fijiImage },
  { id: 3, country: 'papua new guinea', coverImage: papuaNewGuineaImage },
  { id: 4, country: 'samoa', coverImage: samoaImage },
];

export type recomCountryType = {
  id: number;
  country: string;
  coverImage: StaticImageData;
};

export type recomContinentType = {
  id: number;
  continent: string;
  countries: recomCountryType[];
};

export const recommendPageConfig = {
  readmoreIcon: materialIcon({
    iconName: 'keyboard_double_arrow_down',
    size: 20,
  }),
  continentsArray: [
    { id: 0, continent: 'africa', countries: africa },
    { id: 1, continent: 'asia', countries: asia },
    { id: 2, continent: 'europe', countries: europe },
    { id: 3, continent: 'north america', countries: northAmerica },
    { id: 4, continent: 'south america', countries: southAmerica },
    { id: 5, continent: 'oceania', countries: oceania },
  ],
};
