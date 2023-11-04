import { atom, useAtom } from 'jotai';

import { travelDetailModal } from '@/store/travelDetailModal.atoms';

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
  const [travelDailyPlansDetails, setTravelDailyPlansDetails] =
    useAtom(travelDetailModal);

  console.log('travelDailyPlansDetails', travelDailyPlansDetails);

  // 메모 수정 버튼
  const handleEditButtonClick = (memoIndex: number) => {
    setMemoState({
      editingMemoIndex: memoIndex,
      currentMemo: props.item.id[memoIndex],
    });
  };

  // 메모 수정 완료 체크버튼
  const handleCheckButtonClick = (memoIndex: number) => {
    if (memoState.currentMemo) {
      props.onEditMemo(props.item.id, memoIndex, memoState.currentMemo);
      // 전역 travelDailyPlansDetails 상태 업데이트
      setTravelDailyPlansDetails((oldDetails) => {
        console.log('olddetail', oldDetails);

        return oldDetails.map((detail) =>
          detail.id === props.item.id
            ? {
                ...detail,
                placeName: props.item.placeName,
                description: props.item.description,
              }
            : detail
        );
      });
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
