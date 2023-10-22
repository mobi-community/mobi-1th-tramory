import React, { useEffect, useRef, useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { MapPageConfig } from '../../../../../constants';
import type { MapProps } from './Map.types';

export const Map: React.FC<MapProps> = ({
  onClick,
  children,
  styles,
  ...options
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (mapRef.current && !map) {
      const newMap = new window.google.maps.Map(mapRef.current, {});

      setMap(newMap);
    }
  }, [mapRef, map]);

  useDeepCompareEffect(() => {
    if (map) {
      const styledMapType = new google.maps.StyledMapType(styles || [], {
        name: 'Styled Map',
      });

      map.mapTypes.set('styled_map', styledMapType);
      map.setOptions({
        mapTypeId: 'styled_map',
        ...options,
        styles: undefined,
      });
    }
  }, [map, options, styles]);

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
