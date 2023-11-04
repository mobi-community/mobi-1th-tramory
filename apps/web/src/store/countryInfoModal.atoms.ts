import { atom } from 'jotai';
import { atomFamily, atomWithStorage } from 'jotai/utils';

import type { CityInfoType, CountryInfoType } from '@/components';

type countryInfoModalType = {
  target?: string;
  isOpen?: boolean;
};

export const isCountryInfoModalOpen = atomFamily(
  ({ isOpen }: countryInfoModalType) => atom({ isOpen: isOpen }),
  (a, b) => a.target === b.target
);

// 자동으로 해당 key값과 value값을 local storage에 등록, 수정해줍니다.
// atomWithStorage(key, value) -> 가져다 쓸 때는 일반 atom과 동일하게 사용할 수 있습니다.
export const targetLocationAtom = atomWithStorage('targetLocation', '');

export const targetCountryAtom = atom('');
export const targetCityAtom = atom('');

export const countryDataAtom = atom<CountryInfoType>({} as CountryInfoType);
export const cityDataAtom = atom<CityInfoType>({} as CityInfoType);
