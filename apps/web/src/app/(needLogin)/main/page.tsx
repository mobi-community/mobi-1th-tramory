'use client';

import { useRef } from 'react';

import { usePageScroll } from '../../../hooks';
import { MapPage, RecommendByCountryPage } from './_components';

const MainPage: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>();

  usePageScroll(wrapperRef);

  return (
    <div
      className='no-scroll max-h-[calc(100vh-80px)] overflow-y-scroll'
      ref={wrapperRef}
    >
      <MapPage />
      <RecommendByCountryPage />
    </div>
  );
};

export default MainPage;
