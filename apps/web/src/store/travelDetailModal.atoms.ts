import { atom } from 'jotai';

export interface Item {
  id: number;
  sequence: number;
  placeName: string;
  addressName: string;
  latitude: string;
  longitude: string;
  description: string;
  country: {
    countryName: string;
  };
  city: {
    cityName: string;
  };
}

export const travelDetailModal = atom<Item[]>([
  {
    id: 1,
    sequence: 1,
    placeName: 'New York ABC Hotel',
    addressName: '123 Broadway Ave, New York, NY 10010',
    latitude: '40.7128N',
    longitude: '74.0060W',
    description: 'A luxurious hotel located in the heart of New York.',
    country: {
      countryName: 'USA',
    },
    city: {
      cityName: 'New York',
    },
  },
  {
    id: 2,
    sequence: 2,
    placeName: 'TimeSquare',
    addressName: '123 Broadway Ave, New York, NY 10010',
    latitude: '40.7128N',
    longitude: '74.0060W',
    description: 'A luxurious hotel located in the heart of New York.',
    country: {
      countryName: 'USA',
    },
    city: {
      cityName: 'New York',
    },
  },
  {
    id: 3,
    sequence: 3,
    placeName: 'Wolfgang Steakhouse',
    addressName: '123 Broadway Ave, New York, NY 10010',
    latitude: '40.7128N',
    longitude: '74.0060W',
    description: 'A luxurious hotel located in the heart of New York.',
    country: {
      countryName: 'USA',
    },
    city: {
      cityName: 'New York',
    },
  },
  {
    id: 4,
    sequence: 4,
    placeName: 'JAZZ Bar in NY',
    addressName: '123 Broadway Ave, New York, NY 10010',
    latitude: '40.7128N',
    longitude: '74.0060W',
    description: 'A luxurious hotel located in the heart of New York.',
    country: {
      countryName: 'USA',
    },
    city: {
      cityName: 'New York',
    },
  },
  {
    id: 5,
    sequence: 5,
    placeName: 'Lego shop',
    addressName: '123 Broadway Ave, New York, NY 10010',
    latitude: '40.7128N',
    longitude: '74.0060W',
    description: 'A luxurious hotel located in the heart of New York.',
    country: {
      countryName: 'USA',
    },
    city: {
      cityName: 'New York',
    },
  },
] as Item[]);
