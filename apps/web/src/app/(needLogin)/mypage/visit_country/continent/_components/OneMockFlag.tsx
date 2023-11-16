import Image from 'next/image';

export const OneMockFlag = ({ data }) => {
  return (
    <div className='grid grid-cols-5 gap-x-4 px-7'>
      {data.map((oneData, idx) => (
        <div key={idx} className='mb-16 flex h-[93px] flex-col items-center'>
          <Image src={oneData.img} width={140} alt='국기 이미지' priority />
          <div className='text-primaryGray-500 mt-2 font-bold'>
            {oneData.name}
          </div>
        </div>
      ))}
    </div>
  );
};
