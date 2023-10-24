'use client';

import React, { useEffect, useState } from 'react';

export const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [mapMarker, setMapMarker] = useState<google.maps.Marker>();

  useEffect(() => {
    if (!mapMarker) {
      setMapMarker(new google.maps.Marker());
    }

    return () => {
      if (mapMarker) mapMarker.setMap(null);
    };
  }, [mapMarker]);

  useEffect(() => {
    if (mapMarker) mapMarker.setOptions(options);
  }, [mapMarker, options]);

  return null;
};
