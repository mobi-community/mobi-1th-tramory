import { atom, useAtom } from 'jotai';

import type { SelectType } from './Select.types';

const isToggleAtom = atom(false);
const valueAtom = atom('');

export const Select = ({
  options,
  onChange,
  initialValue,
  variant = 'service',
}: SelectType) => {
  const [currentValue, setCurrentValue] = useAtom(valueAtom);
  const [isToggle, setIsToggle] = useAtom(isToggleAtom);
  const selectClasses = {
    service:
      'w-[700px] flex justify-between border py-2 px-3 rounded text-sm leading-6 cursor-pointer',
    mypageCategory:
      'w-[160px] pl-4 pr-2 py-1 flex justify-end border border-primaryBlue-700 text-sm leading-6 cursor-pointer',
    modalCategory: `w-[400px] flex justify-between border py-[10px] px-4 rounded text-sm leading-6 cursor-pointer ${
      isToggle ? 'border-[#6EA5FF]' : ''
    }`,
  }[variant];

  const optionClasses = {
    service:
      'w-[700px] flex flex-col border pb-2 px-3 rounded text-sm leading-6 cursor-pointer bg-white/90 top-11',
    mypageCategory:
      'w-[160px] pb-2 px-3 flex flex-col items-center border border-primaryBlue-700 text-sm leading-6 cursor-pointer top-10',
    modalCategory:
      'w-[400px] flex flex-col border pb-2 px-3 rounded text-sm leading-6 cursor-pointer bg-[#EEF5FF]/90 top-11 border-[#6EA5FF] top-[52px]',
  }[variant];

  const onlyMypageCategory = {
    mypageCategory: 'ml-[30px]',
  }[variant];

  const oneOptionClasses = {
    service: 'hover:font-bold mt-2',
    mypageCategory: 'hover:font-bold mt-2',
    modalCategory:
      'hover:font-bold hover:text-primaryBlue-300 mt-2 text-primaryGray-500',
  }[variant];

  const handleOpenOptions = () => {
    setIsToggle((prev) => !prev);
    if (isToggle) return setIsToggle(false);
  };

  const handleChangeValue = (value: string) => {
    setCurrentValue(value);
    onChange(value); // 선택한 값으로 현재 값을 업데이트
    setIsToggle(false);
  };

  return (
    <div className='relative' onClick={handleOpenOptions}>
      <div className={selectClasses}>
        <span>{currentValue ? `${currentValue}` : `${initialValue}`}</span>
        <span className={`material-icons-outlined ${onlyMypageCategory}`}>
          {isToggle ? 'expand_less' : 'expand_more'}
        </span>
      </div>
      {isToggle && (
        <div className={`absolute ${optionClasses}`}>
          {options.map((option, idx) => (
            <div
              className={oneOptionClasses}
              key={idx}
              onClick={() => handleChangeValue(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
