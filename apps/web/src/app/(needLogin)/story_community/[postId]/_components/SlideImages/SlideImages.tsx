import Image from 'next/image';

import { SlideImagesProps } from './SlideImages.types';

export const SlideImages: React.FC<SlideImagesProps> = ({ targetStory }) => {
  const images = targetStory?.content.images;

  return (
    <div className='bg-primaryGray-200 mb-4 mt-5 flex w-full justify-between'>
      {images.map((image) => (
        <div key={targetStory.id}>
          <Image src={image} alt='나라 이미지' width={240} height={240} />
        </div>
      ))}
    </div>
  );
};
