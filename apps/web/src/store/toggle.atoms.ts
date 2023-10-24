import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

export const isToggleAtom = atomFamily(() => atom(false));
