export interface DraggableItemProps {
  dragProvided: any;
  item: { id: number; name: string; memos: string[] };
  index: number;
  onAddMemo: (id: number) => void;
  onEditMemo: (id: number, memoIndex: number, updatedMemo: string) => void;
  onDeleteMemo: (id: number, memoIndex: number) => void;
  onDeleteItem: (id: number) => void;
  onEditItemName: (id: number) => void;
}
