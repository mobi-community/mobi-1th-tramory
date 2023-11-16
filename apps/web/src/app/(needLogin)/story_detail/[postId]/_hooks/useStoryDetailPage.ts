import { useAtom, useSetAtom } from 'jotai';

import { likedStatusAtom, targetStoryAtom, viewedStatusAtom } from '@/store';
import { toggleAllDropdownsAtom } from '@/store/dropdownFormSection.atoms';

export const useStoryDetailPage = (id?: string) => {
  const allToggleAction = useSetAtom(toggleAllDropdownsAtom);

  const [targetStory, setTargetStory] = useAtom(targetStoryAtom);

  const [likedStatus, setLikedStatus] = useAtom(
    likedStatusAtom({ postId: id, liked: 0 })
  );

  const [viewedStatus, setViewedStatus] = useAtom(
    viewedStatusAtom({ postId: id, viewed: 0 })
  );

  return {
    allToggleAction,
    targetStory,
    setTargetStory,
    likedStatus,
    viewedStatus,
    setLikedStatus,
    setViewedStatus,
  };
};
