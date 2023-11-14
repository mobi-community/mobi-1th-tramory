import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

export const tabStateFamily = atomFamily(() =>
  atom({
    state: false,
  })
);

export const activeTabSlugAtom = atom('');

export const selectTabAtom = atom(null, (get, set, selectedSlug: string) => {
  const currentActiveSlug = get(activeTabSlugAtom);

  if (currentActiveSlug !== selectedSlug) {
    set(tabStateFamily(currentActiveSlug), { state: false });
  }
  set(tabStateFamily(selectedSlug), { state: true });
  set(activeTabSlugAtom, selectedSlug);
});
