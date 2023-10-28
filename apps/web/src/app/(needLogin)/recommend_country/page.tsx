'use client';

import { useCallback, useEffect, useRef } from 'react';

import { recommendPageConfig } from '@/constants';

import { PageBox } from './_components';

const RecommendCountryPage: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>();
  const pageHeight = window.innerHeight + 20;

  // 스크롤을 위로 올려주는 함수
  const scrollToTop = useCallback(() => {
    wrapperRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [wrapperRef]);

  // 스크롤을 맨 아래로 내려주는 함수
  const scrollToBottom = useCallback(() => {
    wrapperRef.current?.scrollTo({
      top: pageHeight,
      behavior: 'smooth',
    });
  }, [wrapperRef, pageHeight]);

  // 기존 scroll 이벤트를 막아주는 함수
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div
      className='max-h-[calc(100vh-20px)] overflow-x-hidden'
      ref={wrapperRef}
    >
      <PageBox
        continentArray={recommendPageConfig.continentsArray.slice(0, 3)}
        isTop={true}
        handleScroll={scrollToBottom}
      />
      <PageBox
        continentArray={recommendPageConfig.continentsArray.slice(3)}
        isTop={false}
        handleScroll={scrollToTop}
      />
    </div>
  );
};

export default RecommendCountryPage;