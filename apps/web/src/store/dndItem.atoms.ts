import { atom } from 'jotai';

export const editingMemoIndexAtom = atom<number | null>(null);
export const currentMemoAtom = atom<string>('');
