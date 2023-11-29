import { useState } from 'react';

import { AddLocationModal } from '@/components';

import { useOpenAddLocationModal } from '../useOpenModal/useOpenADdLocationModal';
import { useDndItem } from './useDnditem';
import { DraggableItemProps } from './useDndItems.type';

const DndItem: React.FC<DraggableItemProps> = (props) => {
  const {
    editingMemoIndex,
    currentMemo,
    setMemoState,
    handleEditButtonClick,
    handleCheckButtonClick,
  } = useDndItem(props);

  const openAddLocationModal = useOpenAddLocationModal();

  const [isAddMemo, setIsAddMemo] = useState(false);
  const [newMemo, setNewMemo] = useState('');

  const isEditingDescription = editingMemoIndex === props.item.id;

  const handleAddMemoClick = () => {
    setIsAddMemo(true);
  };

  const handleSaveMemoClick = () => {
    if (newMemo) {
      props.onAddMemo(props.item.id, newMemo);
      setIsAddMemo(false);
      setNewMemo('');
    }
  };

  return (
    <div
      className=' min-h-[60px] border-b px-4 py-6'
      ref={props.dragProvided.innerRef}
      {...props.dragProvided.draggableProps}
      {...props.dragProvided.dragHandleProps}
      style={{
        userSelect: 'none',
        ...props.dragProvided.draggableProps.style,
      }}
    >
      <div className='flex items-start'>
        <span className='bg-primaryBlue-default mr-4 inline-block h-7 w-7 rounded-full text-center font-bold leading-7 text-white'>
          {props.index + 1}
        </span>
        <div className='text-primaryBlue-default flex w-full flex-col '>
          <div className='flex items-center justify-between text-center'>
            <span className='text-lg font-bold leading-normal'>
              {props.item.placeName}
            </span>
            <div className='flex items-center space-x-3 text-xs'>
              <button
                className='ml-3 rounded border px-3 py-1 leading-5'
                onClick={openAddLocationModal}
              >
                수정
              </button>
              <button
                className='ml-3 rounded border px-3 py-1 leading-5'
                onClick={() => props.onDeleteItem(props.item.id)}
              >
                삭제
              </button>
              <span className='material-icons-outlined leading-5'>menu</span>
            </div>
            <AddLocationModal />
          </div>

          {props.item.description.length === 0 && !isAddMemo && (
            <button
              onClick={handleAddMemoClick}
              className='mt-2 flex items-center text-sm '
            >
              <span className='material-icons-outlined mr-2 h-5 w-5'>
                add_circle
              </span>
              기록하기
            </button>
          )}
          {isAddMemo && (
            <div className='mt-2 flex items-center bg-gray-100 text-sm'>
              <input
                type='text'
                value={newMemo}
                onChange={(e) => setNewMemo(e.target.value)}
                className='ml-3 w-full max-w-[550px] border bg-gray-100'
              />
              <button
                onClick={handleSaveMemoClick}
                className='ml-3 rounded  px-3 py-1 leading-5'
              >
                <span className='material-icons-outlined h-5 w-5'>check</span>
              </button>
            </div>
          )}
        </div>
      </div>
      {props.item.description.length > 0 && (
        <div className='ml-7 mt-2 flex items-center justify-between rounded bg-gray-100 p-5'>
          {isEditingDescription ? (
            <input
              value={currentMemo}
              onChange={(e) => {
                setMemoState((prev) => ({
                  ...prev,
                  currentMemo: e.target.value,
                }));
              }}
              className='w-full border bg-gray-100'
            />
          ) : (
            <span className='max-w-[450px]'>{props.item.description}</span>
          )}

          <div className='space-x-3'>
            {isEditingDescription ? (
              <button onClick={() => handleCheckButtonClick()}>
                <span className='material-icons-outlined h-5 w-5'>check</span>
              </button>
            ) : (
              <>
                <button onClick={() => handleEditButtonClick()}>
                  <span className='material-icons-outlined h-5 w-5'>edit</span>
                </button>
                <button onClick={() => props.onDeleteMemo(props.item.id, 0)}>
                  <span className='material-icons-outlined h-5 w-5'>
                    delete
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DndItem;
