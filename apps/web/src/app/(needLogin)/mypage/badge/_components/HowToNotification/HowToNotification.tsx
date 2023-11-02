import type { infoProps } from './HowToNotification.types';

export const HowToNotification = ({ info }: infoProps) => {
  const { title, description } = info;

  return (
    <div className='absolute bottom-0 left-56 z-10 flex flex-col items-center rounded-2xl border-2 border-[#70D1E6] bg-white/90 p-7'>
      <h1 className='text-primaryBlue-700 mb-2 text-lg font-bold'>How to...</h1>
      <div className='text-center'>
        <p
          className='mb-1 font-bold text-[#70D1E6]'
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};
