import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

export const isIndividualToggleAtom = atomFamily(() => atom(false));
export const isIndividualFlagToggleAtom = atomFamily(() => atom(false));
export const isIndividualOneBadgeToggleAtom = atomFamily(() => atom(false));
