import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

import type { StoryType } from '@/components/CommonStory/CommonStory.types';

// 객체의 key 값을 통한 deep equal을 사용해 atom 값 비교할 수 있도록 수정
export const storyModalAtom = atomFamily(
  ({ isOpen }: { postId: string; isOpen: boolean }) => atom({ isOpen: isOpen }),
  (a, b) => a.postId === b.postId
);

export const likedStatusAtom = atomFamily(
  ({ liked }: { postId: string; liked: number }) => atom({ liked }),
  (a, b) => a.postId === b.postId
);

export const viewedStatusAtom = atomFamily(
  ({ viewed }: { postId: string; viewed: number }) => atom({ viewed }),
  (a, b) => a.postId === b.postId
);

export const targetStoryAtom = atom<StoryType>({} as StoryType);
