import Image from 'next/image';

const OneFlagInfo = ({ item }) => {
  return (
    <div>
      <Image src={item.img} width={500} height={300} alt='국기 이미지' />
      <div>{item.name}</div>
    </div>
  );
};

export default OneFlagInfo;
