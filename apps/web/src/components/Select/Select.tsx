import { useSelect } from './_hooks/useSelect';
import {
  getMypageCategoryClasses,
  getOneOptionClasses,
  getOptionClasses,
  getSelectClasses,
} from './Select.styles';
import type { SelectType } from './Select.types';

export const Select = ({
  options,
  onChange,
  initialValue,
  variant = 'service',
  value,
}: SelectType) => {
  const { isToggle, currentValue, handleOpenOptions, handleChangeValue } =
    useSelect(value, onChange);

  const selectClasses = getSelectClasses(variant, isToggle);
  const optionClasses = getOptionClasses(variant);
  const onlyMypageCategory = getMypageCategoryClasses(variant);
  const oneOptionClasses = getOneOptionClasses(variant);

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
