import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

import type { storyType } from '@/components/CommonStory';

// 객체의 key 값을 통한 deep equal을 사용해 atom 값 비교할 수 있도록 수정
export const storyModalAtom = atomFamily(
  ({ isOpen }: { postId: number | string; isOpen: boolean }) =>
    atom({ isOpen: isOpen }),
  (a, b) => a.postId === b.postId
);

export const targetStoryAtom = atom<storyType>({} as storyType);
