import Image from 'next/image';

export const SlideImages = ({ storyDetail }) => {
  const images = storyDetail?.content?.images;

  return (
    <div className='bg-primaryGray-200 mb-4 mt-5 flex w-full justify-between'>
      {images?.map((image: string) => (
        <div key={Math.random() * 1000}>
          <Image src={image} alt='나라 이미지' width={240} height={200} />
        </div>
      ))}
    </div>
  );
};
