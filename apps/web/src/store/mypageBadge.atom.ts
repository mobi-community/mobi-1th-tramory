import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';
export const isHowToAtom = atomFamily(() => atom(false));
