import { useAtom, useSetAtom } from 'jotai';

import { targetStoryAtom } from '@/store';
import { toggleAllDropdownsAtom } from '@/store/dropdownFormSection.atoms';

export const useStoryDetailPage = () => {
  const allToggleAction = useSetAtom(toggleAllDropdownsAtom);

  const [targetStory, setTargetStory] = useAtom(targetStoryAtom);

  return {
    allToggleAction,
    targetStory,
    setTargetStory,
  };
};
