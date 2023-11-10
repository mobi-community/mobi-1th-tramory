import { SetStateAction } from 'jotai';
import { RESET } from 'jotai/utils';

type SetStateActionWithReset<Value> =
  | Value
  | typeof RESET
  // eslint-disable-next-line no-unused-vars
  | ((prev: Value) => Value | typeof RESET);

export interface submitFuncProps {
  searchKeyword: string;
  // eslint-disable-next-line no-unused-vars
  setIsCountry: (args_0: SetStateAction<boolean>) => void;
  // eslint-disable-next-line no-unused-vars
  setTargetLocation: (args_0: SetStateActionWithReset<string>) => void;
  setIsCountryInfoOpen: (
    // eslint-disable-next-line no-unused-vars
    args_0: SetStateAction<{
      isOpen: boolean;
    }>
  ) => void;
}
