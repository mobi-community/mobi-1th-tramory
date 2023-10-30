import { atom } from 'jotai';

export const currentTabAtom = atom({
  state: true,
  color: 'white',
  zIndex: '9',
  param: 'current',
});
export const draftTabAtom = atom({
  state: false,
  color: 'primaryGray-200',
  zIndex: '1',
  param: 'draft',
});

export const tabSelectedAtom = atom(null, (get, set) => {
  if (get(currentTabAtom).state === true) {
    set(currentTabAtom, {
      ...get(currentTabAtom),
      state: false,
      color: 'primaryGray-200',
      zIndex: '1',
    });
    set(draftTabAtom, {
      ...get(draftTabAtom),
      state: true,
      color: 'white',
      zIndex: '9',
    });
  } else {
    set(currentTabAtom, {
      ...get(currentTabAtom),
      state: true,
      color: 'white',
      zIndex: '9',
    });
    set(draftTabAtom, {
      ...get(draftTabAtom),
      state: false,
      color: 'primaryGray-200',
      zIndex: '1',
    });
  }
});
