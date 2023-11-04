import { atom, useAtom } from 'jotai';

import { travelDailyPlansDetailsAtom } from '@/store/travelDetailModal.atoms';

import { DraggableItemProps } from './useDndItems.type';

interface MemoState {
  editingMemoIndex: number | null;
  currentMemo: string;
}

const defaultState: MemoState = {
  editingMemoIndex: null,
  currentMemo: '',
};

const memoStateAtom = atom<MemoState>(defaultState);

export const useDndItem = (props: DraggableItemProps) => {
  const [memoState, setMemoState] = useAtom(memoStateAtom);
  const [, setTravelDailyPlansDetails] = useAtom(travelDailyPlansDetailsAtom);

  // 메모 수정 버튼
  const handleEditButtonClick = (memoIndex: number) => {
    setMemoState({
      editingMemoIndex: memoIndex,
      currentMemo: props.item.memos[memoIndex],
    });
  };

  // 메모 수정 완료 체크버튼
  const handleCheckButtonClick = (memoIndex: number) => {
    if (memoState.currentMemo) {
      props.onEditMemo(props.item.id, memoIndex, memoState.currentMemo);
      // 전역 travelDailyPlansDetails 상태 업데이트
      setTravelDailyPlansDetails((oldDetails) =>
        oldDetails.map((detail) =>
          detail.id === props.item.id
            ? {
                ...detail,
                placeName: props.item.name, // 아이템 이름으로 placeName 업데이트
                description: props.item.memos.join(', '), // 모든 메모를 description으로 합쳐서 업데이트
              }
            : detail
        )
      );
      // 메모 초기화
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
