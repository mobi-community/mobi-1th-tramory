import { sliderIndexAtom, uploadedImagesAtom } from '@/store/uploadImage.atoms';
import { useAtom } from 'jotai';
import { useRef } from 'react';

const TravelModal: React.FC = () => {
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
      <div className='inline-flex items-center justify-center'>
        <div className='flex w-full flex-col items-center px-2.5'>
          <h2 className='mb-4 text-center text-lg font-bold'>1일차 기록</h2>
          <div className='flex w-full flex-col gap-4'>
            <div className='h-[350px] w-[650px] bg-gray-200'>지도</div>
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
            </div>
            <div>
              위치 바뀌는 영역
              <div>컴포넌트 map 돌리기</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelModal;
