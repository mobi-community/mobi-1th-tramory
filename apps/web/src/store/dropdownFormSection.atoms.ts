import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

export const dropdown_count_atom = atom(1);
export const dropdownToggleFamily = atomFamily((id: string) => atom(true));

export const initializeDropdownTogglesAtom = atom(
  null,
  (get, set, initialValues) => {
    Object.entries(initialValues).forEach(([id, value]) => {
      set(dropdownToggleFamily(id), value);
    });
  }
);

export const getDropdownInitialValues = (
  initialValues: Record<string, boolean>
): Record<string, boolean> => {
  const defaultValues: Record<string, boolean> = {};
  for (const id in initialValues) {
    defaultValues[id] = initialValues[id] ?? false;
  }
  return defaultValues;
};

export const dropdownToggleActionAtom = atom(
  null,
  (get, set, { id, state = undefined }) => {
    const currentToggle = get(dropdownToggleFamily(id));
    set(dropdownToggleFamily(id), state !== undefined ? state : !currentToggle);
  }
);
