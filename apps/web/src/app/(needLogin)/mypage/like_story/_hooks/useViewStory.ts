import { useAtom } from 'jotai';

import { viewStoriesAtom } from '@/store/mypage.atoms';

export const useViewStory = () => {
  const [viewStories, setViewStories] = useAtom(viewStoriesAtom);

  return {
    viewStories,
    setViewStories,
  };
};
