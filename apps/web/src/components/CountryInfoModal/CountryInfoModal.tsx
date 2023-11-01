import { PropsWithChildren } from 'react';

import materialIcon from '@/utils/materialIcon';

import { useCountryInfoModal } from './hooks/useCountryInfoModal';

export const CountryInfoModal: React.FC<
  PropsWithChildren<{ country: string }>
> = ({ children, country }) => {
  const { isCountryInfoOpen, closeCountryInfoModal } =
    useCountryInfoModal(country);

  if (!isCountryInfoOpen.isOpen) return null;

  /*
  @ Todo
  - 데이터 연결 후: mock데이터 부분은 삭제하고, country 값을 사용해 DB에 요청한 해당 국가/도시 정보를 사용할 예정입니다.
  */

  return (
    <div className='bg-primaryGray-300 fixed inset-0 z-50 flex items-center justify-center bg-opacity-20'>
      <div className='bg-primaryBeige flex w-[606px] flex-col border border-gray-300 p-5 shadow-md'>
        <div className='mb-1 flex justify-end'>
          <button
            className='bg-primaryGreen bg-primaryGreen h-6 h-[24px] h-[24px] w-6 w-[24px] w-[24px] cursor-pointer p-[2px] text-white'
            onClick={closeCountryInfoModal}
          >
            {materialIcon({ iconName: 'close', size: 20 })}
          </button>
        </div>
        <div className='flex-1'>{children}</div>
      </div>
    </div>
  );
};
