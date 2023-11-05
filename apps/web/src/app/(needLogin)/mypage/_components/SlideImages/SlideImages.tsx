import { useSearchParams } from 'next/navigation';

export const SlideImages = () => {
  // const { postId } = useParams();
  const params = useSearchParams();
  const page = params.get('page');

  const isRecordPage = page === 'record';

  // const planDetail = planDescription.filter((detail) => detail.id === postId);
  // const images = planDetail[0].content.images;

  if (isRecordPage)
    return (
      <div className='bg-primaryGray-200 mb-4 mt-5 flex w-full justify-between'>
        {/* {images.map((image) => (
          <div key={planDetail[0].id}>
            <Image src={image} alt='나라 이미지' width={240} />
          </div>
        ))} */}
      </div>
    );
};
