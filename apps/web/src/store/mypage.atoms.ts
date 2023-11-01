import { atom } from 'jotai';

import { storyType } from '@/components/CommonStory';

interface IuserProfileInfoAtom {
  nickName: string;
  content: string;
  profileImage: string;
  backgroundImage: string;
  bestRecordStories: storyType[];
  planStories: storyType[];
  recordStories: storyType[];
}

export const userProfileInfoAtom = atom<IuserProfileInfoAtom>({
  nickName: '',
  content: '',
  profileImage: '',
  backgroundImage: '',
  bestRecordStories: [],
  planStories: [],
  recordStories: [],
});
