'use client';
import { useCallback, useState } from 'react';

export const useImageSlider = (images, itemsToShow = 3) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const updateImageIndex = useCallback(
    (newIndex) => {
      setCurrentImageIndex((prevIndex) =>
        newIndex < 0 ? prevIndex : newIndex % images.length
      );
    },
    [images.length]
  );

  const getVisibleImages = useCallback(() => {
    const visibleImages = [];

    for (let i = 0; i < itemsToShow; i++) {
      visibleImages.push(images[(currentImageIndex + i) % images.length]);
    }
    return visibleImages;
  }, [currentImageIndex, images, itemsToShow]);

  const goToPreviousSlide = useCallback(() => {
    updateImageIndex(
      currentImageIndex - 1 < 0 ? images.length - 1 : currentImageIndex - 1
    );
  }, [currentImageIndex, images.length, updateImageIndex]);

  const goToNextSlide = useCallback(() => {
    updateImageIndex((currentImageIndex + 1) % images.length);
  }, [currentImageIndex, images.length, updateImageIndex]);

  return {
    visibleImages: getVisibleImages(),
    goToPreviousSlide,
    goToNextSlide,
  };
};
