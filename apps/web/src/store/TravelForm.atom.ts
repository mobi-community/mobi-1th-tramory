import { atomWithStorage } from 'jotai/utils';

import type {
  TravelPlanType,
  TravelRecordType,
} from '@/types/TravelRegister.types';

const today = new Date();

export const formModePlanAtom = atomWithStorage<TravelPlanType>('formAtom', {
  id: 0,
  title: '',
  startDate:
    today.getFullYear() + '-' + today.getMonth() + '-' + today.getDay(),
  endDate: today.getFullYear() + '-' + today.getMonth() + '-' + today.getDay(),
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
    startDate:
      today.getFullYear() + '-' + today.getMonth() + '-' + today.getDay(),
    endDate:
      today.getFullYear() + '-' + today.getMonth() + '-' + today.getDay(),
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
