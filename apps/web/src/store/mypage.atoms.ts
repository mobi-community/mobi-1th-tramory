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

// 내 스토리 - 나의 여행 기록
export const userRecordStoriesAtom = atom([]);

// 내 스토리 - 나의 여행 계획
export const userPlanStoriesAtom = atom([]);

// 관심 스토리 - LikeStory
export const likeStoriesAtom = atom([]);

// 관심 스토리 - ViewStory
export const viewStoriesAtom = atom([]);
