import { useAtom } from 'jotai';
import { useRef } from 'react';
import { uploadedImagesAtom, sliderIndexAtom } from '@/store/uploadImage.atoms';
import ImageSlider from './ImageSlider';

const UploadImgFiles: React.FC = () => {
  const [uploadedImages, setUploadedImages] = useAtom(uploadedImagesAtom);
  const [sliderIndex, setSliderIndex] = useAtom(sliderIndexAtom);

  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).slice(
        0,
        10 - uploadedImages.length
      );
      setUploadedImages((prev) => [...prev, ...newImages]);
    }
  };

  const nextSlide = () => {
    if (sliderIndex < uploadedImages.length - 4) {
      setSliderIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (sliderIndex > 0) {
      setSliderIndex((prev) => prev - 1);
    }
  };

  const deleteImage = (index: number) => {
    const newImages = [...uploadedImages];
    newImages.splice(index, 1);
    setUploadedImages(newImages);
  };

  return (
    <>
      <div className='flex items-center gap-3'>
        <div>사진업로드 ({uploadedImages.length}/10)</div>
        <input
          ref={inputFileRef}
          type='file'
          accept='image/*'
          multiple
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
        <button
          className='rounded border px-5 py-1'
          onClick={() => inputFileRef.current?.click()}
        >
          <span className='material-icons-outlined'>add_a_photo</span>
        </button>
      </div>

      {uploadedImages.length === 0 ? (
        <div
          className='flex h-[100px] w-[150px] cursor-pointer items-center justify-center rounded border-2 border-dashed'
          onClick={() => inputFileRef.current?.click()}
        >
          <span className='material-icons-outlined'>add_box</span>
        </div>
      ) : (
        <ImageSlider
          images={uploadedImages}
          sliderIndex={sliderIndex}
          onDelete={deleteImage}
          onNext={nextSlide}
          onPrev={prevSlide}
        />
      )}
    </>
  );
};

export default UploadImgFiles;
