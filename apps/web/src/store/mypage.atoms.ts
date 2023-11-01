import { atom } from 'jotai';

interface IuserProfileInfoAtom {
  nickName: string;
  content: string;
  profileImage: string;
  backgroundImage: string;
}

export const userProfileInfoAtom = atom<IuserProfileInfoAtom>({
  nickName: '',
  content: '',
  profileImage: '',
  backgroundImage: '',
});
