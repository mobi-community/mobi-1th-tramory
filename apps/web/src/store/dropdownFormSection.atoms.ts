import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

export const dropdownCountAtom = atom(1);
export const dropdownToggleFamily = atomFamily((id: string) => atom(true));
export const dropdownIdsAtom = atom<string[]>([]);

export const initializeDropdownTogglesAtom = atom(
  null,
  (get, set, initialValues) => {
    const currentIds = get(dropdownIdsAtom);
    const newIds = Object.keys(initialValues);
    const uniqueIds = Array.from(new Set([...currentIds, ...newIds])); // Set을 배열로 변환

    set(dropdownIdsAtom, uniqueIds);

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

export const toggleAllDropdownsAtom = atom(
  null,
  (get, set, action: 'open' | 'close') => {
    const ids = get(dropdownIdsAtom);
    const initialDropdownStates = {};

    ids.forEach((id) => {
      initialDropdownStates[id] = action === 'open';
    });
    set(initializeDropdownTogglesAtom, initialDropdownStates);
  }
);
