import { atomWithStorage } from 'jotai/utils';

import type {
  TravelPlanType,
  TravelRecordType,
} from '@/types/TravelRegister.types';

export const formModePlanAtom = atomWithStorage<TravelPlanType>('formAtom', {
  id: 0,
  title: '',
  startDate: '',
  endDate: '',
  theme: 0,
  isPublic: false,
  isComplete: '',
  isRecord: '',
  user: { nickname: '' },
  travelHashTags: Array(4).fill({ id: 0, hashTag: { name: '' } }),
  travelDailyPlansDetails: [
    {
      id: 0,
      sequence: 0,
      latitude: '',
      longitude: '',
      description: '',
      country: {
        id: 0,
        countryName: '',
        countryNameKr: '',
      },
      city: {
        id: 0,
        cityName: '',
        cityNameKr: '',
      },
    },
  ],
});

export const formModeRecordAtom = atomWithStorage<TravelRecordType>(
  'formAtom',
  {
    id: 0,
    title: '',
    startDate: '',
    endDate: '',
    theme: 0,
    isPublic: false,
    isComplete: '',
    isRecord: '',
    user: { nickname: '' },
    travelDailyPlansDetails: [
      {
        id: 0,
        sequence: 0,
        latitude: '',
        longitude: '',
        description: '',
        country: {
          id: 0,
          countryName: '',
          countryNameKr: '',
        },
        city: {
          id: 0,
          cityName: '',
          cityNameKr: '',
        },
      },
    ],
  }
);
