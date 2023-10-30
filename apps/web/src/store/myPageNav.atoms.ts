import { atom } from 'jotai';

export const mypageNavStatesAtom = atom({});

export const selectedNavAtom = atom(
  null,
  (get, set, { href, title, router }) => {
    const currentStates = get(mypageNavStatesAtom);

    if (currentStates[title]) {
      set(mypageNavStatesAtom, {});
    } else {
      set(mypageNavStatesAtom, {
        [title]: true,
      });
      router.push(href);
    }
  }
);
