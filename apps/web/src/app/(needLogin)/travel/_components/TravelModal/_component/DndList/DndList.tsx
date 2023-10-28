'use client';

import { travelModalDndList } from '@/store/travelModalDnd.atoms';
import { useAtom } from 'jotai';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import DndItem from './DndItem';

const DndList: React.FC = () => {
  const [items, setItems] = useAtom(travelModalDndList);

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

  return (
    <div>
      {/*경로추가하기 버튼 누르면 지도 팝업 떠야함 해당로직 나중에추가 */}
      <button
        className='mb-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
        onClick={handleAddNewItem}
      >
        경로추가하기
      </button>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='items'>
          {(dropProvided) => (
            <ul
              {...dropProvided.droppableProps}
              ref={dropProvided.innerRef}
              className='relative min-h-[400px] '
            >
              {items.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={`draggable-${item.id.toString()}`}
                  index={index}
                >
                  {(dragProvided) => (
                    <DndItem
                      dragProvided={dragProvided}
                      item={item}
                      index={index}
                      onAddMemo={handleAddMemo}
                      onEditMemo={handleEditMemo}
                      onDeleteMemo={handleDeleteMemo}
                    />
                  )}
                </Draggable>
              ))}

              {dropProvided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DndList;
