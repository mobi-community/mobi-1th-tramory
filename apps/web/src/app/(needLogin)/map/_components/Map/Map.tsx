'use client';

import React, { useEffect, useRef, useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

import type { MapProps } from './Map.types';

export const Map: React.FC<MapProps> = ({ onClick, children, ...options }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  const style = {
    width: '100%',
    height: '550px',
    margin: '10px auto',
  };

  useEffect(() => {
    if (mapRef.current && !map) {
      const newMap = new window.google.maps.Map(mapRef.current, {});

      setMap(newMap);
    }
  }, [mapRef, map]);

  useDeepCompareEffect(() => {
    if (map) map.setOptions(options);
  }, [map, options]);

  useEffect(() => {
    if (map) {
      google.maps.event.clearListeners(map, 'click');

      if (onClick) {
        map.addListener('click', onClick);
      }
    }
  }, [map, onClick]);

  return (
    <>
      <div ref={mapRef} id='map' style={style} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child))
          // @ts-ignore
          return React.cloneElement(child, { map });
      })}
    </>
  );
};
