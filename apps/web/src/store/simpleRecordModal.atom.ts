import { atom } from 'jotai';

export const dateRangeAtom = atom([new Date(), null]);
export const openSelectAtom = atom(false);
export const openSimpleRecordModalAtom = atom(false);
