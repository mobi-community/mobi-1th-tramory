import { useAtom } from 'jotai';
import { useRef } from 'react';
import { uploadedImagesAtom, sliderIndexAtom } from '@/store/uploadImage.atoms';

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
      <div className='relative flex bg-gray-100'>
        {uploadedImages.length === 0 ? (
          <div
            className='flex h-[100px] w-[150px] cursor-pointer items-center justify-center rounded border-2 border-dashed'
            onClick={() => inputFileRef.current?.click()}
          >
            <span className='material-icons-outlined'>add_box</span>
          </div>
        ) : (
          <>
            <button
              className='absolute left-0 top-1/2 z-20 h-[30px] w-[30px] -translate-y-1/2 transform rounded-full border bg-white pt-[3px]'
              onClick={prevSlide}
            >
              <span className='material-icons-outlined'>chevron_left</span>
            </button>
            <button
              className='absolute right-0 top-1/2 z-20 h-[30px] w-[30px] -translate-y-1/2 transform rounded-full border bg-white pt-[3px]'
              onClick={nextSlide}
            >
              <span className='material-icons-outlined rotate-180'>
                chevron_left
              </span>
            </button>
            {uploadedImages
              .slice(sliderIndex, sliderIndex + 4)
              .map((image, idx) => (
                <div className='relative mr-2' key={idx}>
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Uploaded ${idx}`}
                    className='mr-2 h-[100px] w-[150px] rounded object-cover'
                  />
                  <button
                    className='absolute right-[10px] top-0 h-[20px] w-[20px] rounded bg-black'
                    onClick={() => deleteImage(sliderIndex + idx)}
                  >
                    <span
                      className='material-icons-outlined text-white'
                      style={{ fontSize: '15px' }}
                    >
                      close
                    </span>
                  </button>
                </div>
              ))}
          </>
        )}
      </div>
    </>
  );
};

export default UploadImgFiles;
