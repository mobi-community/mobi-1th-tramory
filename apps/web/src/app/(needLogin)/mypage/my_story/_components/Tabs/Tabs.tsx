'use client';

import { Tab } from '@/components';
import { useAtom } from 'jotai';
import { current_tab_atom, draft_tab_atom } from '@/store/tab.atoms';

export const Tabs = () => {
  const [currentTab] = useAtom(current_tab_atom);
  const [draftTab] = useAtom(draft_tab_atom);

  return (
    <div className='mr-10 mt-10 flex w-full items-end justify-end space-x-[-30px]'>
      <Tab bgColor={currentTab.color} zIndex={currentTab.zIndex}>
        여행 기록
      </Tab>
      <Tab bgColor={draftTab.color} zIndex={draftTab.zIndex}>
        임시 저장 기록
      </Tab>
    </div>
  );
};
