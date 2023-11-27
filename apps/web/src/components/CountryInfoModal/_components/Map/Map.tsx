'use client';

import React, { useEffect, useRef } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { CountryInfoConfig } from '@/constants';

import { useMap } from '../../_hooks/useMap';
import type { MapProps } from './Map.types';

export const Map: React.FC<MapProps> = ({ children, ...options }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { map, setMap, center } = useMap();
  const mapId = process.env.NEXT_PUBLIC_MAP_INFO_ID;

  useEffect(() => {
    if (mapRef.current && !map) {
      const newMap = new window.google.maps.Map(mapRef.current, {});

      setMap(newMap);
    }
  }, [mapRef, map, setMap]);

  useDeepCompareEffect(() => {
    if (map) {
      map.setOptions({
        center,
        zoom: 6,
        mapId,
        ...options,
      });
    }
  }, [map, options]);

  return (
    <div ref={mapRef} id='map' style={CountryInfoConfig.wrapperStyle}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child))
          // @ts-ignore
          return React.cloneElement(child, { map });
      })}
    </div>
  );
};
