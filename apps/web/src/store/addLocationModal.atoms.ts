import { atom } from 'jotai';

// 장소 추가 모달 열림 여부
export const isAddLocationOpen = atom(false);
// 장소 서치바 연관검색어 창 열림 여부
export const isLocationSearchModalOpen = atom(false);
// 장소명 수정 인풋창 노출 여부
export const isEditLocationAtom = atom(false);
// 장소명 값
export const locationValueAtom = atom<string>('');
// 상세 주소 값
export const addressValueAtom = atom<string>('');
