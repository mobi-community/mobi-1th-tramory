import { useDndItem } from './useDnditem';

interface DraggableItemProps {
  dragProvided: any;
  item: { id: number; name: string; memos: string[] };
  index: number;
  onAddMemo: (id: number) => void;
  onEditMemo: (id: number, memoIndex: number, updatedMemo: string) => void;
  onDeleteMemo: (id: number, memoIndex: number) => void;
  onDeleteItem: (id: number) => void;
  onEditItemName: (id: number) => void;
}

const DndItem: React.FC<DraggableItemProps> = (props) => {
  const {
    editingMemoIndex,
    currentMemo,
    setMemoState,
    handleEditButtonClick,
    handleCheckButtonClick,
  } = useDndItem(props);

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
              {props.item.name}
            </span>
            <div className='space-x-3 text-xs'>
              <button
                className='ml-3 rounded border px-3 py-1 leading-5'
                onClick={() => props.onEditItemName(props.item.id)}
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
          </div>
          {props.item.memos.length === 0 && (
            <button
              onClick={() => props.onAddMemo(props.item.id)}
              className='mt-2 flex items-center text-sm '
            >
              <span className='material-icons-outlined mr-2 h-5 w-5'>
                add_circle
              </span>
              기록하기
            </button>
          )}
        </div>
      </div>
      {props.item.memos.map((memo, memoIndex) => (
        <div className='ml-7 mt-2 flex items-center justify-between rounded bg-gray-100 p-5'>
          {editingMemoIndex === memoIndex ? (
            <input
              value={currentMemo}
              onChange={(e) => {
                setMemoState((prev) => ({
                  ...prev,
                  currentMemo: e.target.value,
                }));
              }}
            />
          ) : (
            <span>{memo}</span>
          )}

          <div className='space-x-3'>
            {editingMemoIndex === memoIndex ? (
              <button onClick={() => handleCheckButtonClick(memoIndex)}>
                <span className='material-icons-outlined h-5 w-5'>check</span>
              </button>
            ) : (
              <>
                <button onClick={() => handleEditButtonClick(memoIndex)}>
                  <span className='material-icons-outlined h-5 w-5'>edit</span>
                </button>
                <button
                  onClick={() => props.onDeleteMemo(props.item.id, memoIndex)}
                >
                  <span className='material-icons-outlined h-5 w-5'>
                    delete
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DndItem;
