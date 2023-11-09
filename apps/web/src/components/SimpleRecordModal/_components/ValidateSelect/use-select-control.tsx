import { useAtom } from 'jotai';

import { openSelectAtom } from '@/store';

export const useSelectControl = () => {
  const [openSelect, setOpenSelect] = useAtom(openSelectAtom);

  const handleSelect = (value, field) => {
    setOpenSelect(false);
    field.onChange(value);
  };

  return { openSelect, setOpenSelect, handleSelect };
};
