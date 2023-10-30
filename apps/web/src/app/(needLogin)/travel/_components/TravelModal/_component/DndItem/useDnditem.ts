import { atom, useAtom } from 'jotai';

interface MemoState {
  editingMemoIndex: number | null;
  currentMemo: string;
}

const defaultState: MemoState = {
  editingMemoIndex: null,
  currentMemo: '',
};

const memoStateAtom = atom<MemoState>(defaultState);

interface UseDndItemProps {
  item: { id: number; name: string; memos: string[] };
  // eslint-disable-next-line no-unused-vars
  onEditMemo: (id: number, memoIndex: number, updatedMemo: string) => void;
}

export const useDndItem = (props: UseDndItemProps) => {
  const [memoState, setMemoState] = useAtom(memoStateAtom);

  const handleEditButtonClick = (memoIndex: number) => {
    setMemoState({
      editingMemoIndex: memoIndex,
      currentMemo: props.item.memos[memoIndex],
    });
  };

  const handleCheckButtonClick = (memoIndex: number) => {
    if (memoState.currentMemo) {
      props.onEditMemo(props.item.id, memoIndex, memoState.currentMemo);
      setMemoState(defaultState);
    }
  };

  return {
    editingMemoIndex: memoState.editingMemoIndex,
    currentMemo: memoState.currentMemo,
    setMemoState,
    handleEditButtonClick,
    handleCheckButtonClick,
  };
};
