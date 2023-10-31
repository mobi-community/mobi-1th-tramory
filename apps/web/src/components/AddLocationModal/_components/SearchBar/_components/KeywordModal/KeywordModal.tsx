'use client';

import { useAddLocationModal } from '@/components/AddLocationModal/hooks/useAddLocationModal';
import { keywordMock } from '@/components/AddLocationModal/mocks/keywordMock';

import type { modalProps } from './KeywordModal.types';

export const KeywordModal: React.FC<modalProps> = ({ field }) => {
  const { isSearchModalOpen, setIsSearchModalOpen } = useAddLocationModal();

  const isLast = (i: number, arr: string[]) =>
    i !== arr.length - 1 ? 'border-b-[1px] border-b-primaryGray-300' : '';

  if (!isSearchModalOpen) return null;

  return (
    <div>
      <div className='no-scroll bg-primaryBlue-100 absolute left-0 top-10 z-20 mt-5 max-h-[300px] w-[750px] overflow-y-scroll rounded-[20px] p-10 text-lg'>
        {keywordMock.map((keyword, i, arr) => (
          <li
            key={Math.random() * 1000}
            className={`hover:bg-primaryBlue-200 cursor-pointer list-none px-[20px] py-[10px] ${isLast(
              i,
              arr
            )}`}
            onClick={() => {
              setIsSearchModalOpen((prev: boolean) => !prev);
              field.onChange(keyword);
            }}
          >
            {keyword}
          </li>
        ))}
      </div>
    </div>
  );
};
