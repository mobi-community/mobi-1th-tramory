import { atom } from 'jotai';

export const mypage_nav_states_atom = atom({});

export const selected_nav_atom = atom(
  null,
  (get, set, { href, title, router }) => {
    const currentStates = get(mypage_nav_states_atom);

    if (currentStates[title]) {
      set(mypage_nav_states_atom, {});
    } else {
      set(mypage_nav_states_atom, {
        [title]: true,
      });
      router.push(href);
    }
  }
);
