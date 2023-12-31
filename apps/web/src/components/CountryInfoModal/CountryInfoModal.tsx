import { PropsWithChildren } from 'react';

import materialIcon from '@/utils/materialIcon';

import { useCountryInfoModal } from './_hooks/useCountryInfoModal';

export const CountryInfoModal: React.FC<
  PropsWithChildren<{
    target: string;
  }>
> = ({ children, target }) => {
  const { isCountryInfoOpen, closeCountryInfoModal } =
    useCountryInfoModal(target);

  if (!isCountryInfoOpen.isOpen) return null;

  /*
  @ Todo
  - 데이터 연결 후: mock데이터 부분은 삭제하고, country 값을 사용해 DB에 요청한 해당 국가/도시 정보를 사용할 예정입니다.
  */

  // if (isCountryInfoOpen.isOpen)
  return (
    <div className='bg-primaryGray-300 fixed inset-0 z-[200] flex items-center justify-center bg-opacity-20'>
      <div className='bg-primaryBeige flex max-h-[450px] w-[400px] flex-col border border-gray-300 p-5 shadow-md'>
        <div className='relative mb-1 flex justify-end'>
          <button
            className='bg-primaryGreen bg-primaryGreen h-[20px] w-[20px] cursor-pointer p-[1px] text-white'
            onClick={closeCountryInfoModal}
          >
            {materialIcon({ iconName: 'close', size: 18 })}
          </button>
        </div>
        <div className='flex-1'>{children}</div>
      </div>
    </div>
  );
};
