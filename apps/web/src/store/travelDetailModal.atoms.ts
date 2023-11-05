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

export const travelDetailModalAtoms = atom<Item[]>([
  {
    id: 1,
    sequence: 1,
    placeName: 'New York ABC Hotel',
    addressName: '123 Broadway Ave, New York, NY 10010',
    latitude: '40.7128N',
    longitude: '74.0060W',
    description: '뉴욕에있는 첫날 좋은호텔에 묵었다',
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
    description: '뉴욕의 상징! 타임스퀘어에있는 상점들에서 쇼핑을 했다',
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
    description: '점심은 미리 예약해두었던 울프강 스테이크! 넘 맛있었다',
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
    description: '저녁은 야경을 보면 재즈를 들을 수 있는곳으로 왔다.',
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
    description:
      '조카들을 위한 선물을 샀다. 록펠러센터근처에 있는 레고샵. 직원들이 매우 친절하다!',
    country: {
      countryName: 'USA',
    },
    city: {
      cityName: 'New York',
    },
  },
] as Item[]);
