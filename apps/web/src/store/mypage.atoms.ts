import { atom } from 'jotai';

import { RecordStoriesMock } from '@/app/(needLogin)/mypage/my_story/record/_mocks/recordStoriesMock';
import { storyType } from '@/components/CommonStory';

interface IuserProfileInfoAtom {
  nickName: string;
  content: string;
  profileImage: string;
  backgroundImage: string;
  bestRecordStories: storyType[];
  planStories: storyType[];
  recordStories: storyType[];
  isProfileContentEdit: boolean;
}

export const userProfileInfoAtom = atom<IuserProfileInfoAtom>({
  nickName: '',
  content: '소개문구를 작성해주세요.',
  profileImage: '',
  backgroundImage: '',
  bestRecordStories: [],
  planStories: [],
  recordStories: [],
  isProfileContentEdit: false,
});

// 내 스토리 - 나의 여행 기록
export const userRecordStoriesAtom = atom([]);

// 내 스토리 - 나의 여행 계획
export const userPlanStoriesAtom = atom([]);

// 내 스토리 디테일 페이지
export const userStoryDetailsAtom = atom({});

// 관심 스토리 - LikeStory
export const likeStoriesAtom = atom([]);

// 관심 스토리 - ViewStory
export const viewStoriesAtom = atom([]);

// 배지
export const badgeAtom = atom([]);

// 방문 국가 - 대륙별
export const visitedContinentAtom = atom([]);

// 방문 국가 - 방문국가별
export const visitedMyVisitedAtom = atom([]);
