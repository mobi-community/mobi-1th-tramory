'use client';

import { useAddLocationModal } from '@/components/AddLocationModal/hooks/useAddLocationModal';
import {
  keywordMock,
  keywordType,
} from '@/components/AddLocationModal/mocks/keywordMock';
import { AddLocationConfig } from '@/constants';

import type { modalProps } from './KeywordModal.types';

export const KeywordModal: React.FC<modalProps> = ({ field }) => {
  const { isSearchModalOpen, setIsSearchModalOpen } = useAddLocationModal();

  const isLast = (i: number, arr: keywordType) =>
    i !== arr.length - 1 ? 'border-b-[1px] border-b-primaryGray-300/[80%]' : '';

  const hasResult = (
    <ul className='no-scroll bg-primaryBlue-100 absolute left-0 top-10 z-20 mt-5 max-h-[262px] w-[750px] overflow-y-scroll rounded-[20px] p-10 pt-[20px] text-lg'>
      {keywordMock.map((keyword, i, arr) => (
        <li
          key={Math.random() * 1000}
          className={`hover:bg-primaryBlue-200 cursor-pointer list-none px-[20px] py-[10px] ${isLast(
            i,
            arr
          )}`}
          onClick={() => {
            setIsSearchModalOpen((prev: boolean) => !prev);
            field.onChange(keyword.location);
          }}
        >
          <div className='text-base font-bold'>{keyword.location}</div>
          <div className='text-primaryGray-300 text-xs'>{keyword.address}</div>
        </li>
      ))}
    </ul>
  );

  const notHasResult = (
    <div className='no-scroll bg-primaryBlue-100 absolute left-0 top-10 z-20 mt-5 max-h-[262px] w-[750px] overflow-y-scroll rounded-[20px] p-10 text-lg'>
      <div className='text-xl font-bold'>
        {AddLocationConfig.noResultText[0]}
      </div>
      <div className='text-primaryGray-300 text-base'>
        {AddLocationConfig.noResultText[1]}
      </div>
    </div>
  );

  if (isSearchModalOpen)
    return <div>{keywordMock.length ? hasResult : notHasResult}</div>;
};
