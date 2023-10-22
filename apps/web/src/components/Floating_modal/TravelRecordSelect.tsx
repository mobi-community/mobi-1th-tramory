'use client';

import { useRouter } from 'next/navigation';

import { travelRecordOptionConfig } from '../../constants';

const ViewTravelRecordType: React.FC<{}> = () => {
  const router = useRouter();

  const handleButtonClick = (url: string) => {
    router.push(url);
  };

  return (
    <div className='inline-flex items-center justify-center'>
      <div className='flex w-full flex-col items-center px-2.5'>
        <h2 className='mb-4 text-center text-lg font-bold'>기록하기</h2>
        <div className='flex w-full gap-4'>
          {travelRecordOptionConfig.map((item) => (
            <button
              key={item.id}
              id={item.id}
              name='option1'
              className={`flex h-[120px] w-[150px] flex-col items-center justify-center gap-2 ${item.bgColor} rounded-lg p-4 ${item.fontColor} text-sm font-bold hover:bg-opacity-70 focus:outline-none`}
              style={{ minWidth: '120px' }}
              onClick={() => handleButtonClick(item.redirectUrl)}
            >
              {item.id === 'SIMPLE_RECORD' ? (
                <span
                  className='material-icons-outlined'
                  style={{ fontSize: '40px' }}
                >
                  edit_location
                </span>
              ) : (
                <span
                  className='material-icons-outlined'
                  style={{ fontSize: '50px' }}
                >
                  note_alt
                </span>
              )}
              <span className='mt-1'>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewTravelRecordType;