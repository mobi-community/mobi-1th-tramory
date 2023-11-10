import { useSelect } from './_hooks/useSelect';
import {
  oneOptionVariants,
  optionVariants,
  selectVariants,
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

  const selectClasses =
    selectVariants({ variant }) +
    (variant === 'modalCategory' && isToggle ? ' border-[#6EA5FF]' : '');
  const optionClasses = optionVariants({ variant });
  const oneOptionClasses = oneOptionVariants({ variant });

  return (
    <div className='relative' onClick={handleOpenOptions}>
      <div className={selectClasses}>
        <span>{currentValue ? `${currentValue}` : `${initialValue}`}</span>
        <span className={'material-icons-outlined'}>
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
