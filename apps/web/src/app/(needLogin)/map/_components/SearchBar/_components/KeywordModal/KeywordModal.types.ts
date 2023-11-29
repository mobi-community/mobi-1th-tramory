import { MutableRefObject } from 'react';
import type { ControllerRenderProps, FieldValues } from 'react-hook-form';

export type modalProps = {
  field: ControllerRenderProps<FieldValues, 'searchKeyword'>;
  listRef: MutableRefObject<HTMLDivElement>;
  focusRef: MutableRefObject<HTMLLIElement>;
};
