import { Button } from 'ui';

type ImageSliderProps = {
  images: File[];
  sliderIndex: number;
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
  return (
    <div className='relative flex bg-gray-100'>
      <Button
        className='absolute left-0 top-1/2 z-20 h-[30px] w-[30px] -translate-y-1/2 transform rounded-full border bg-white pt-[7px]'
        onClick={onPrev}
      >
        <span className='material-icons-outlined  text-black'>
          chevron_left
        </span>
      </Button>
      <Button
        className='absolute right-0 top-1/2 z-20 h-[30px] w-[30px] -translate-y-1/2 transform rounded-full border bg-white pt-[5px]'
        onClick={onNext}
      >
        <span className='material-icons-outlined rotate-180 text-black'>
          chevron_left
        </span>
      </Button>
      {images.slice(sliderIndex, sliderIndex + 4).map((image, idx) => (
        <div className='relative mr-2' key={idx}>
          <img
            src={URL.createObjectURL(image)}
            alt={`Uploaded ${idx}`}
            className='mr-2 h-[100px] w-[150px] rounded object-cover'
          />
          <Button
            className='absolute right-[10px] top-0 h-[20px] w-[20px] rounded bg-black'
            onClick={() => onDelete(sliderIndex + idx)}
          >
            <span
              className='material-icons-outlined text-white'
              style={{ fontSize: '14px' }}
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
