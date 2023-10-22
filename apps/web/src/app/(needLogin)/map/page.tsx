'use client';

import { Wrapper } from '@googlemaps/react-wrapper';
import React, { useState } from 'react';

import { MapPageConfig } from '../../../constants';
import { Map, Marker } from './_components';

const MapPage: React.FC = () => {
  const apiKey = process.env.NEXT_PUBLIC_MAP_API_KEY;
  const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
  const [zoom] = useState<number>(11);
  const [center] = useState<google.maps.LatLngLiteral>({
    lat: 37.569227,
    lng: 126.9777256,
  });

  const onClick = (e: google.maps.MapMouseEvent) => {
    setClicks([...clicks, e.latLng!]);
  };

  const editedVal = clicks.map((latLng) => latLng.toJSON());

  console.log('click', editedVal);

  if (apiKey)
    return (
      <div style={{ textAlign: 'center' }}>
        <Wrapper apiKey={apiKey}>
          <Map
            center={center}
            onClick={onClick}
            zoom={zoom}
            styles={MapPageConfig.mapStyle.dark}
            mapId={process.env.NEXT_PUBLIC_MAP_API_ID}
          >
            {clicks.map((location, i) => (
              <Marker key={i} position={location} />
            ))}
          </Map>
        </Wrapper>
      </div>
    );
  return null;
};

export default MapPage;
