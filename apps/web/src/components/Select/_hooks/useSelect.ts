import { useEffect, useState } from 'react';

// eslint-disable-next-line no-unused-vars
export const useSelect = (value: string, onChange: (value: string) => void) => {
  const [currentValue, setCurrentValue] = useState('');
  const [isToggle, setIsToggle] = useState(false);

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

  return {
    isToggle,
    currentValue,
    setCurrentValue,
    handleOpenOptions,
    handleChangeValue,
  };
};
