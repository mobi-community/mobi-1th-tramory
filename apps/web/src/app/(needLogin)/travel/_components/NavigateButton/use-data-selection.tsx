import { atom, useAtom } from 'jotai';

export const isDateSelectedAtom = atom(false);

export const useDateSelection = () => {
  const [isDateSelected, setIsDateSelected] = useAtom(isDateSelectedAtom);

  return {
    isDateSelected,
    setIsDateSelected,
  };
};
