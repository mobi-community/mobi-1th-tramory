import { useAtom } from 'jotai';

import { likeStoriesAtom } from '@/store/mypage.atoms';

export const useLikeStory = () => {
  const [likeStories, setLikeStories] = useAtom(likeStoriesAtom);

  return {
    likeStories,
    setLikeStories,
  };
};
