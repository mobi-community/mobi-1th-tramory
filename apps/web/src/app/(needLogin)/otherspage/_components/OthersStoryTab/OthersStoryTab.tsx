'use client';
import { useAtom } from 'jotai';
import Link from 'next/link';

import { otherTabList } from '@/constants';
import { otherStoryTabAtom } from '@/store/otherStoryTab.atom';

const OtherStoryTab = () => {
  const [isTab, setIstTab] = useAtom(otherStoryTabAtom);

  return (
    <>
      <div className='border-gray m-auto mt-[120px] flex max-w-[920px] border-b'>
        {otherTabList.map((tab) => (
          <div key={tab.id} onClick={() => setIstTab(tab.tabType)}>
            <Link
              href={{
                pathname: `/otherspage`,
                query: {
                  tabId: tab.id,
                },
              }}
            >
              <div
                className={`ml-[20px] mr-[20px] flex w-[95px] justify-center ${
                  isTab == tab.tabType
                    ? 'border-b border-blue-300'
                    : 'border-none'
                } pb-[8px]`}
              >
                <li
                  className={`list-none text-[18px] ${
                    isTab == tab.tabType ? 'text-blue-300' : 'text-black'
                  }`}
                >
                  {tab.tabType}
                </li>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default OtherStoryTab;
