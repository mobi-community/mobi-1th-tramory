import { RefObject, useEffect } from 'react';

export const usePageScroll = (wrapperRef: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      const pageHeight = window.innerHeight - 70; // 화면 세로길이

      // 스크롤 아래로 내릴 때
      if (deltaY > 0) {
        wrapperRef.current?.scrollTo({
          top: pageHeight,
          left: 0,
          behavior: 'smooth',
        });
      } else {
        // 스크롤 위로 올릴 때
        wrapperRef.current.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
};
