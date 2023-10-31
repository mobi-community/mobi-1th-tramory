/* eslint-disable @next/next/no-img-element */
import { Button } from 'ui';

type ImageSliderProps = {
  images: File[];
  sliderIndex: number;
  // eslint-disable-next-line no-unused-vars
  onDelete: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  sliderIndex,
  onDelete,
  onNext,
  onPrev,
}) => {
  const SLIDER_INCREMENT = 4;

  return (
    <div className='relative flex bg-gray-100'>
      <Button
        variant='outline'
        size='smIcon'
        className='absolute left-0 top-1/2 z-20 -translate-y-1/2 transform rounded-full'
        onClick={onPrev}
      >
        <span className='material-icons-outlined  text-black'>
          chevron_left
        </span>
      </Button>
      <Button
        variant='outline'
        size='smIcon'
        className='absolute right-0 top-1/2 z-20 -translate-y-1/2 transform rounded-full'
        onClick={onNext}
      >
        <span className='material-icons-outlined rotate-180 text-black'>
          chevron_left
        </span>
      </Button>
      {images
        .slice(sliderIndex, sliderIndex + SLIDER_INCREMENT)
        .map((image, idx) => (
          <div
            className={`relative ${idx < SLIDER_INCREMENT - 1 && 'mr-4'}`}
            key={idx}
          >
            <img
              src={URL.createObjectURL(image)}
              alt={`Uploaded ${idx}`}
              className='h-[100px] w-[150px] rounded object-cover'
            />
            <Button
              className='bg-gray-75/100 absolute right-2 top-2 h-2 w-2 rounded-full border p-2'
              onClick={() => onDelete(sliderIndex + idx)}
            >
              <span
                className='material-icons-outlined text-gray'
                style={{ fontSize: '14px', fontWeight: 'bold' }}
              >
                close
              </span>
            </Button>
          </div>
        ))}
    </div>
  );
};

export default ImageSlider;
