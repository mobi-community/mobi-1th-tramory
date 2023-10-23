import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from 'next/image';
import Slider, { Settings } from 'react-slick';

type ImageSliderProps = {
  images: string[];
};

const ImageSlider = ({ images }: ImageSliderProps) => {
  const sliderSettings: Settings = {
    dots: true,
    infinite: false,
    speed: 0,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Slider {...sliderSettings}>
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            width={500}
            height={250}
            className='rounded-2xl object-cover pl-[5px]'
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
