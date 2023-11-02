import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

import {
  getMypageCategoryClasses,
  getOneOptionClasses,
  getOptionClasses,
  getSelectClasses,
} from './Select.styles';
import type { SelectType } from './Select.types';

const isToggleAtom = atom(false);
const valueAtom = atom('');

export const Select = ({
  options,
  onChange,
  initialValue,
  variant = 'service',
  value,
}: SelectType) => {
  const [currentValue, setCurrentValue] = useAtom(valueAtom);
  const [isToggle, setIsToggle] = useAtom(isToggleAtom);
  const selectClasses = getSelectClasses(variant, isToggle);
  const optionClasses = getOptionClasses(variant);
  const onlyMypageCategory = getMypageCategoryClasses(variant);
  const oneOptionClasses = getOneOptionClasses(variant);

  useEffect(() => {
    setCurrentValue(value);
  }, [setCurrentValue, value]);

  const handleOpenOptions = () => {
    setIsToggle((prev) => !prev);
    if (isToggle) return setIsToggle(false);
  };

  const handleChangeValue = (value: string) => {
    setCurrentValue(value);
    if (onChange) onChange(value); // 선택한 값으로 현재 값을 업데이트
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
        <div className={`absolute z-[110] ${optionClasses}`}>
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
