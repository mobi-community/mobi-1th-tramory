'use client';
import { useState } from 'react';

// 약간 오류가 있어서 기능 구현때 제대로 수정할 예정입니다.!

export const useImageSlider = (images, itemsToShow = 3) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const visibleImages = images.slice(
    currentImageIndex,
    currentImageIndex + itemsToShow
  );

  const goToPreviousSlide = () => {
    // 만약 현재 첫 번째 이미지 세트를 보고 있을 경우, 마지막 이미지 세트로 바로 이동
    if (currentImageIndex === 0) {
      const remainder = images.length % itemsToShow;
      const lastIndex =
        remainder === 0
          ? images.length - itemsToShow
          : images.length - remainder;

      setCurrentImageIndex(lastIndex);
    } else {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToNextSlide = () => {
    // 현재 마지막 이미지 세트를 보고 있거나 그 이상의 인덱스를 가리킬 경우, 처음으로 바로 되돌림
    if (currentImageIndex + itemsToShow >= images.length) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  return {
    visibleImages,
    goToPreviousSlide,
    goToNextSlide,
  };
};
