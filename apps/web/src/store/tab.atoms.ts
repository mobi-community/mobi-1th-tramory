import { atom } from 'jotai';

export const currentTabAtom = atom({
  state: true,
  color: 'white',
  zIndex: '9',
});
export const draftTabAtom = atom({
  state: false,
  color: 'primaryGray-200',
  zIndex: '1',
});

export const tabSelectedAtom = atom(null, (get, set) => {
  if (get(currentTabAtom).state === true) {
    set(currentTabAtom, {
      state: false,
      color: 'primaryGray-200',
      zIndex: '1',
    });
    set(draftTabAtom, { state: true, color: 'white', zIndex: '9' });
  } else {
    set(currentTabAtom, {
      state: true,
      color: 'white',
      zIndex: '9',
    });
    set(draftTabAtom, {
      state: false,
      color: 'primaryGray-200',
      zIndex: '1',
    });
  }
});
