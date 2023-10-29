import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useDndList } from './useDndList';
import DndItem from '../DndItem';

const DndList: React.FC = () => {
  const {
    items,
    handleAddNewItem,
    handleDeleteItem,
    handleEditItemName,
    handleAddMemo,
    handleOnDragEnd,
    handleEditMemo,
    handleDeleteMemo,
  } = useDndList();

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
              className='relative min-h-[400px]'
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
                      onDeleteItem={handleDeleteItem}
                      onEditItemName={handleEditItemName}
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
