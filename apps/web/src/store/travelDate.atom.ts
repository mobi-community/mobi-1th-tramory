import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const travelDateAtom = atom([]);
export const dateRangeAtom1 = atom([new Date(), null]);
export const dateRangeAtom2 = atom([
  new Date('2023-11-03'),
  new Date('2023-11-06'),
]);
export const localDateAtom = atomWithStorage<Date[]>('dateAtom', []);
