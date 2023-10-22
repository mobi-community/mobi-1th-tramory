import { atom } from 'jotai';

export const isMountedAtom = atom(false);
export const hoveredAtom = atom<string>('');
export const isModalOpenAtom = atom(false);
