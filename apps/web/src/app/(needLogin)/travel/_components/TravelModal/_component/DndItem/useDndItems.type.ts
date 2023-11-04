import { Item } from '@/store/travelDetailModal.atoms';

export interface DraggableItemProps {
  dragProvided: any;
  item: Item;
  index: number;
  // eslint-disable-next-line no-unused-vars
  onAddMemo: (id: number) => void;
  // eslint-disable-next-line no-unused-vars
  onEditMemo: (id: number, memoIndex: number, updatedMemo: string) => void;
  // eslint-disable-next-line no-unused-vars
  onDeleteMemo: (id: number, memoIndex: number) => void;
  // eslint-disable-next-line no-unused-vars
  onDeleteItem: (id: number) => void;
  // eslint-disable-next-line no-unused-vars
  onEditItemName: (id: number) => void;
}
