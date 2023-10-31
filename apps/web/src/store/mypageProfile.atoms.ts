import { atom } from 'jotai';

export interface ImypageProfileContent {
  content: string;
  isEdit: boolean;
}

export const mypageProfileBgImageAtom = atom<File | null>(null as File);
export const mypageProfileImageAtom = atom<File | null>(null as File);
export const mypageProfileContent = atom<ImypageProfileContent>({
  content: '소개문구를 작성해주세요.',
  isEdit: false,
});
