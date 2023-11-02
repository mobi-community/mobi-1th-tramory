import { atomWithStorage } from 'jotai/utils';

// import { TravelPlanType } from '@/types/travelPlan.types';
export const formModeAtom = atomWithStorage('formAtom', {
  id: 0,
  category: '',
  title: '',
  startDate: new Date(),
  endDate: new Date(),
  tag0: '',
  tag1: '',
  tag2: '',
  tag3: '',
});
