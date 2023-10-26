import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

export const storyModalAtom = atomFamily((postId: number) =>
  atom({ postId: postId, isOpen: false })
);
