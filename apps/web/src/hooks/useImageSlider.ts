'use client';
import { useState } from 'react';

export const useImageSlider = (images, itemsToShow = 3) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const visibleImages = images.slice(
    currentImageIndex,
    currentImageIndex + itemsToShow
  );

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - itemsToShow ? prevIndex + 1 : prevIndex
    );
  };

  return {
    visibleImages,
    goToPreviousSlide,
    goToNextSlide,
  };
};
