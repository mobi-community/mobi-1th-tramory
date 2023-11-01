import { atom } from 'jotai';

import { MapPageConfig } from '@/constants';

export const MapAtom = {
  zoom: atom<number>(3),
  click: atom<google.maps.LatLng[]>([]),
  center: atom<google.maps.LatLngLiteral>(MapPageConfig.initialLocation),
  marker: atom<google.maps.Marker | null>(null as google.maps.Marker),
  map: atom<google.maps.Map | undefined>(undefined as google.maps.Map),
};
