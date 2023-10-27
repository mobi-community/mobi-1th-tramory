import Link from 'next/link';

import { otherTabList } from '@/constants/otherspagetap.constants';

const OtherStoryTab = () => {
  return (
    <>
      <div className='border-gray m-auto mt-[120px] flex max-w-[920px] border-b'>
        {otherTabList.map((tab) => (
          <Link
            href={{
              pathname: `/otherspage`,
              query: {
                stepId: tab.id,
              },
            }}
            key={tab.id}
          >
            <div className='ml-[20px] mr-[20px] flex w-[95px] justify-center border-b border-red-500 pb-[8px]'>
              <li className='list-none text-[18px]'>{tab.tabType}</li>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default OtherStoryTab;
