'use client';

import { Wrapper } from '@googlemaps/react-wrapper';
import { useAtom } from 'jotai';
import React, { useState } from 'react';

import { MapPageConfig } from '../../../../../constants';
import { MapAtom } from '../../../../../store';
import { AnimatedArrow, Map, Marker, SearchBar } from './_components';

export const MapPage: React.FC = () => {
  const apiKey = process.env.NEXT_PUBLIC_MAP_API_KEY;
  const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
  const [zoom] = useAtom(MapAtom.zoom);
  const [center] = useState<google.maps.LatLngLiteral>(
    MapPageConfig.initialLocation
  );
  const [isDarkMode] = useAtom(MapAtom.isDarkMode);

  const onClick = (e: google.maps.MapMouseEvent) => {
    setClicks([...clicks, e.latLng!]);
  };

  const editedLocation = clicks.map((latLng) => latLng.toJSON());

  console.log('click', editedLocation);

  if (apiKey)
    return (
      <div className='text-center'>
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
