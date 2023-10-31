import Image, { StaticImageData } from 'next/image';

/**
 * @Todo 목데이터 타입이라 해당 파일에 임시로 작성했습니다.
 * 추후 실제 데이터 타입으로 수정 예정
 */
type OneFlagInfoType = {
  img: StaticImageData;
  name: string;
};

type OneFlagInfoProps = {
  item: OneFlagInfoType;
};

const OneFlagInfo = ({ item }: OneFlagInfoProps) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex h-[93px] items-center'>
        <Image src={item.img} width={140} alt='국기 이미지' priority />
      </div>
      <div className='text-primaryGray-500 mt-2 font-bold'>{item.name}</div>
    </div>
  );
};

export default OneFlagInfo;
