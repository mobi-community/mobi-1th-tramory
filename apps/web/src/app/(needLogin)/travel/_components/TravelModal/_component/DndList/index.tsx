import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Button } from 'ui';

import DndItem from '../DndItem';
import { useDndList } from './useDndList';

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
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='items'>
          {(dropProvided) => (
            <ul
              {...dropProvided.droppableProps}
              ref={dropProvided.innerRef}
              className='relative'
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
      {/*경로추가하기 버튼 누르면 지도 팝업 떠야함 해당로직 나중에추가 */}
      <Button
        variant='roundednavy'
        className='my-5 mr-5'
        onClick={(e) => {
          e.preventDefault();
          handleAddNewItem();
        }}
      >
        장소 추가
      </Button>
    </div>
  );
};

export default DndList;
