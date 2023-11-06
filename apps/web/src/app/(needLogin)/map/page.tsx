'use client';

import { Wrapper } from '@googlemaps/react-wrapper';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

import FloatingMenu from '@/components/Floating_menu/FloatingMenu';
import { MapPageConfig } from '@/constants';
import { MapAtom, MapPageAtom } from '@/store';
import { userInfoAtom } from '@/store/userInfo.atoms';

import { AnimatedArrow, Map, Marker, SearchBar } from './_components';

const MapPage: React.FC = () => {
  const apiKey = process.env.NEXT_PUBLIC_MAP_API_KEY;
  const [clicks, setClicks] = useAtom(MapAtom.click);
  const zoom = useAtomValue(MapAtom.zoom);
  const center = useAtomValue(MapAtom.center);
  const isDarkMode = useAtomValue(MapPageAtom.isDarkMode);
  const setUserInfo = useSetAtom(userInfoAtom);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setUserInfo({
        nickName: session.user.name,
        email: session.user.email,
      });
    }
    // eslint fix
  }, [session, setUserInfo]);

  const onClick = (e: google.maps.MapMouseEvent) => {
    setClicks([...clicks, e.latLng!]);
  };

  // 클릭된 위치 좌표 반환하는 함수
  const editedLocation = clicks.map((latLng) => latLng.toJSON());

  console.log('click', editedLocation);

  if (apiKey)
    return (
      <div className='m-auto overflow-hidden text-center'>
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
        <FloatingMenu />
      </div>
    );
  return null;
};

export default MapPage;
