import { useAtom } from 'jotai';

export const useIndiviualToggle = (atomCreator, id) => {
  const [toggleState, setToggleState] = useAtom(atomCreator(id));

  const handleToggle = () => {
    setToggleState((prev: boolean) => !prev);
  };

  return {
    toggleState,
    setToggleState,
    handleToggle,
  };
};
