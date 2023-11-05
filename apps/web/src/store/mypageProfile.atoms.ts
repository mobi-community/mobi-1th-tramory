import { atom } from 'jotai';

export interface IProfileState {
  nickName: string;
  content: string;
  profileImage: string | null;
  backgroundImage: string | null;
  bestRecordStories: any[];
  planStories: any[];
  recordStories: any[];
  profileContent: string;
  isProfileContentEdit: boolean;
}

export const profileStateAtom = atom<IProfileState>({
  nickName: '',
  content: '',
  profileImage: null,
  backgroundImage: null,
  bestRecordStories: [],
  planStories: [],
  recordStories: [],
  profileContent: '소개문구를 작성해주세요.',
  isProfileContentEdit: false,
});
