import { useAtom } from 'jotai';

import { MapAtom } from '@/store';

export const useMap = () => {
  const [map, setMap] = useAtom(MapAtom.map);

  const [zoom, setZoom] = useAtom(MapAtom.zoom);

  const [center, setCenter] = useAtom(MapAtom.center);

  return {
    map,
    setMap,
    zoom,
    setZoom,
    center,
    setCenter,
  };
};
