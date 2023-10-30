import { useAtom } from 'jotai';
import { travelModalDndList } from '@/store/travelModalDnd.atoms';
import { DropResult } from 'react-beautiful-dnd';

export const useDndList = () => {
  const [items, setItems] = useAtom(travelModalDndList);

  const handleDeleteItem = (itemId: number) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const handleEditItemName = (itemId: number) => {
    const newName = prompt('경로수정(나중에 구글맵으로연결필요):');
    if (newName) {
      const updatedItems = items.map((item) =>
        item.id === itemId ? { ...item, name: newName } : item
      );
      setItems(updatedItems);
    }
  };

  const handleAddMemo = (itemId: number) => {
    const memo = prompt('기록하기:');
    if (memo) {
      const updatedItems = items.map((item) =>
        item.id === itemId ? { ...item, memos: [...item.memos, memo] } : item
      );
      setItems(updatedItems);
    }
  };

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(items);
    const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, reorderedItem);

    setItems(reorderedItems);
  };

  const handleAddNewItem = () => {
    const newItemName = `${items.length + 1}`;
    setItems((prevItems) => [
      ...prevItems,
      { id: Date.now(), name: newItemName, memos: [] },
    ]);
  };

  const handleEditMemo = (
    itemId: number,
    memoIndex: number,
    updatedMemo: string
  ) => {
    const updatedItems = items.map((item) =>
      item.id === itemId
        ? {
            ...item,
            memos: item.memos.map((memo, index) =>
              index === memoIndex ? updatedMemo : memo
            ),
          }
        : item
    );
    setItems(updatedItems);
  };

  const handleDeleteMemo = (itemId: number, memoIndex: number) => {
    const updatedItems = items.map((item) =>
      item.id === itemId
        ? {
            ...item,
            memos: item.memos.filter((_, index) => index !== memoIndex),
          }
        : item
    );
    setItems(updatedItems);
  };

  return {
    items,
    handleAddNewItem,
    handleDeleteItem,
    handleEditItemName,
    handleAddMemo,
    handleOnDragEnd,
    handleEditMemo,
    handleDeleteMemo,
  };
};
