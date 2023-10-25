import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

export const isIndividualToggleAtom = atomFamily(() => atom(false));
