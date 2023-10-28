import { atom } from 'jotai';

export const current_tab_atom = atom({
  state: true,
  color: 'white',
  zIndex: '9',
});
export const draft_tab_atom = atom({
  state: false,
  color: 'primaryGray-200',
  zIndex: '1',
});

export const tab_selected_atom = atom(null, (get, set) => {
  if (get(current_tab_atom).state === true) {
    set(current_tab_atom, {
      state: false,
      color: 'primaryGray-200',
      zIndex: '1',
    });
    set(draft_tab_atom, { state: true, color: 'white', zIndex: '9' });
  } else {
    set(current_tab_atom, {
      state: true,
      color: 'white',
      zIndex: '9',
    });
    set(draft_tab_atom, {
      state: false,
      color: 'primaryGray-200',
      zIndex: '1',
    });
  }
});
