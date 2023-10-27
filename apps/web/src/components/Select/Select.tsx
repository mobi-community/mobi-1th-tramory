import { atom, useAtom } from 'jotai';

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
}: SelectType) => {
  const [currentValue, setCurrentValue] = useAtom(valueAtom);
  const [isToggle, setIsToggle] = useAtom(isToggleAtom);
  const selectClasses = getSelectClasses(variant, isToggle);
  const optionClasses = getOptionClasses(variant);
  const onlyMypageCategory = getMypageCategoryClasses(variant);
  const oneOptionClasses = getOneOptionClasses(variant);

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
