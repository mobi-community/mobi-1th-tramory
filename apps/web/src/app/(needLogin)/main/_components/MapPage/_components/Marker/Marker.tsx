'use client';

import { useAtom } from 'jotai';
import React, { useEffect } from 'react';

import { MapAtom } from '../../../../../../../store';

export const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [mapMarker, setMapMarker] = useAtom(MapAtom.marker);

  useEffect(() => {
    if (!mapMarker) {
      setMapMarker(new google.maps.Marker());
    }

    return () => {
      if (mapMarker) mapMarker.setMap(null);
    };
  }, [mapMarker, setMapMarker]);

  useEffect(() => {
    if (mapMarker) mapMarker.setOptions(options);
  }, [mapMarker, options]);

  return null;
};
