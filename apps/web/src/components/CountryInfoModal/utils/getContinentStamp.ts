import { CountryInfoModalConfig } from '@/constants/countryInfoModal.constants';

// 대륙명 + 방문여부 조합하여 상수로 선언된 객체의 key 값 생성
export const getContinentStamp = (continent: string, isVisited: boolean) =>
  CountryInfoModalConfig[`${isVisited ? '' : 'G_'}${continent}Stamp`];
