import Image, { StaticImageData } from 'next/image';

export const ImageSlide: React.FC<{ images: StaticImageData[] }> = ({
  images,
}) => {
  return (
    <div>
      <div>
        {images.map((image) => (
          <div
            className='relative h-[170px] w-[170px]'
            key={Math.random() * 10000}
          >
            <Image
              src={image}
              alt='여행 사진'
              key={Math.random() * 1000}
              layout='fill'
              className='rounded-[8px]'
            />
          </div>
        ))}
      </div>
    </div>
  );
};
