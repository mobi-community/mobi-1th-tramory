'use client';

import { useCallback, useEffect, useRef } from 'react';

import { AddLocationModal } from '@/components';
import { useAddLocationModal } from '@/components/AddLocationModal/_hooks/useAddLocationModal';
import { recommendPageConfig } from '@/constants';

import { PageBox } from './_components';

const RecommendCountryPage: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>();
  const pageHeightRef = useRef<number>();

  useEffect(() => {
    pageHeightRef.current = window?.innerHeight + 20;
  }, []);

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
      top: pageHeightRef.current,
      behavior: 'smooth',
    });
  }, [wrapperRef, pageHeightRef]);

  // 기존 scroll 이벤트를 막아주는 함수
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
    };

    // window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const { handleOpenModal } = useAddLocationModal();

  return (
    <div>
      <div>
        <button onClick={handleOpenModal}>장소 추가 모달 열기</button>
      </div>
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
      <AddLocationModal />
    </div>
  );
};

export default RecommendCountryPage;
