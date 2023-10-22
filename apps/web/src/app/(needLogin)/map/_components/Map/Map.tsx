import React, { useEffect, useRef, useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { MapPageConfig } from '../../../../../constants';
import type { MapProps } from './Map.types';

export const Map: React.FC<MapProps> = ({ onClick, children, ...options }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  // const localityLayer = map?.getFeatureLayer("LOCALITY")

  useEffect(() => {
    if (mapRef.current && !map) {
      const newMap = new window.google.maps.Map(mapRef.current, {});

      setMap(newMap);
    }
  }, [mapRef, map]);

  // MapProps의 옵션들에 변화가 생길 때 map에 덥데이트를 적용하기 위해 사용된다.
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
      <div ref={mapRef} id='map' style={MapPageConfig.wrapperStyle} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child))
          // @ts-ignore
          return React.cloneElement(child, { map });
      })}
    </>
  );
};
