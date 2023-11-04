import { atom } from 'jotai';

export interface Country {
  countryName: string;
}

export interface City {
  cityName: string;
}

export interface TravelDailyPlanDetail {
  id: number;
  sequence: number;
  placeName: string;
  addressName: string;
  latitude: string;
  longitude: string;
  description: string;
  country: Country;
  city: City;
}

export interface TravelDailyPlansState {
  travelDailyPlansDetails: TravelDailyPlanDetail[];
}

export const initialTravelDailyPlansDetails: TravelDailyPlanDetail[] = [
  {
    id: 1,
    sequence: 1,
    placeName: '',
    addressName: '',
    latitude: '',
    longitude: '',
    description: '',
    country: {
      countryName: '',
    },
    city: {
      cityName: '',
    },
  },
];

export const travelDailyPlansDetailsAtom = atom<TravelDailyPlanDetail[]>(
  initialTravelDailyPlansDetails
);
