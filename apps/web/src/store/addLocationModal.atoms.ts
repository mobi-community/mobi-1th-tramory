import { atom } from 'jotai';

export const isAddLocationOpen = atom(false);
export const isLocationSearchModalOpen = atom(false);
export const isEditLocationAtom = atom(false);
export const isEditAddressAtom = atom(false);
export const locationValueAtom = atom<string | { location: string }>('');
export const addressValueAtom = atom<string | { address: string }>('');
