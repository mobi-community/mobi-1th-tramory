'use client';
import { useAtom, useSetAtom } from 'jotai';

import {
  dropdownToggleFamily,
  initializeDropdownTogglesAtom,
} from '@/store/dropdownFormSection.atoms';

export const DateHeader = ({ index, date, id }) => {
  const dropdownInitializers = useSetAtom(initializeDropdownTogglesAtom);
  const [toggleState, setToggleState] = useAtom(dropdownToggleFamily(id));

  const handleInitialDropdownStates = ({ id }) => {
    const initialDropdownStates = {};

    initialDropdownStates[id] = true; // 초기상태를 모두 열려있는 상태로 하기위해서!
    dropdownInitializers(initialDropdownStates);
  };

  const handleToggle = () => {
    setToggleState(!toggleState);
  };

  return (
    <div
      onClick={() => {
        handleInitialDropdownStates({ id });
        handleToggle();
      }}
      className='border-primaryBlue-700 mt-4 flex w-full cursor-pointer items-center justify-between border-[1px] border-opacity-90 py-2 font-semibold text-black'
    >
      <div className=' ml-3'>
        Day{index + 1} ({date})
      </div>
      <span className='material-icons-outlined mr-2 cursor-pointer'>
        {toggleState ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
      </span>
    </div>
  );
};
