'use client';

import { Wrapper } from '@googlemaps/react-wrapper';
import { useAtom, useAtomValue } from 'jotai';
import React from 'react';

import { MapPageConfig } from '@/constants';
import { MapAtom } from '@/store';

import { AnimatedArrow, Map, Marker, SearchBar } from './_components';

export const MapPage: React.FC = () => {
  const apiKey = process.env.NEXT_PUBLIC_MAP_API_KEY;
  const [clicks, setClicks] = useAtom(MapAtom.click);
  const zoom = useAtomValue(MapAtom.zoom);
  const center = useAtomValue(MapAtom.center);
  const isDarkMode = useAtomValue(MapAtom.isDarkMode);

  const onClick = (e: google.maps.MapMouseEvent) => {
    setClicks([...clicks, e.latLng!]);
  };

  // 클릭된 위치 좌표 반환하는 함수
  const editedLocation = clicks.map((latLng) => latLng.toJSON());

  console.log('click', editedLocation);

  if (apiKey)
    return (
      <div className='min-h-[calc(100vh-80px)] w-[100%] text-center'>
        <SearchBar />
        <Wrapper apiKey={apiKey}>
          <Map
            center={center}
            onClick={onClick}
            zoom={zoom}
            styles={MapPageConfig.mapStyle[`${isDarkMode ? 'dark' : 'light'}`]}
            mapId={process.env.NEXT_PUBLIC_MAP_API_ID}
          >
            {clicks.map((location, i) => (
              <Marker key={i} position={location} />
            ))}
          </Map>
        </Wrapper>
        <AnimatedArrow />
      </div>
    );
  return null;
};
