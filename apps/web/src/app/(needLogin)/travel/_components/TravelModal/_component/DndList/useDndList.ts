import { useAtom } from 'jotai';
import { DropResult } from 'react-beautiful-dnd';

import { Item, travelDetailModalAtoms } from '@/store/travelDetailModal.atoms';

export const useDndList = () => {
  const [items, setItems] = useAtom(travelDetailModalAtoms);

  const handleDeleteItem = (itemId: number) => {
    const updatedItems = items.filter((item) => item.id !== itemId);

    setItems(updatedItems);
  };

  const handleEditItemName = (itemId: number) => {
    const newName = prompt('경로수정(나중에 구글맵으로연결필요):');

    if (newName) {
      const updatedItems = items.map((item) =>
        item.id === itemId ? { ...item, placeName: newName } : item
      );

      setItems(updatedItems);
    }
  };

  const handleAddMemo = (itemId: number, memo: string) => {
    if (memo) {
      const updatedItems = items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              description: item.description
                ? `${item.description}, ${memo}`
                : memo,
            }
          : item
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
    const newItemSequence = items.length + 1;
    const newItem: Item = {
      id: Date.now(),
      sequence: newItemSequence,
      placeName: `New Place ${newItemSequence}`,
      addressName: '',
      latitude: '',
      longitude: '',
      description: '',
      country: { countryName: '' },
      city: { cityName: '' },
    };

    setItems([...items, newItem]);
  };

  const handleEditMemo = (itemId: number, updatedMemo: string) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, description: updatedMemo };
      }
      return item;
    });

    setItems(updatedItems);
  };

  const handleDeleteMemo = (itemId: number, memoIndex: number) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        const memos = item.description.split(', ');

        memos.splice(memoIndex, 1);
        return { ...item, description: memos.join(', ') };
      }
      return item;
    });

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
