import { atom } from 'jotai';

export const isOpenNavAtom = atom({});
export const activeSubNav = atom<string | null>(null);
