import { useEffect, useState } from 'react';

import { FlagInfo } from '@/components';
import type { FlagMockType } from '@/components/Profile/_components/FlagInfo/FlagInfo.types';

const OthersPageVisitCountry = () => {
  const [othersBanner, setOthersBanner] = useState<FlagMockType[]>([]);
  const getOthersBanner = async () => {
    const res = await fetch('/api/othersBanner');
    const data = await res.json();

    setOthersBanner(data);
  };

  useEffect(() => {
    getOthersBanner();
  }, []);

  return (
    <>
      <div className='m-auto mt-[-147px] h-full w-[1024px] border  shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'>
        <div className='m-auto mt-[200px] w-[930px]'>
          {othersBanner.map((data, index) => (
            <div key={index} className='flex flex-col'>
              <FlagInfo data={data} id={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OthersPageVisitCountry;
