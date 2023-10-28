interface DraggableItemProps {
  dragProvided: any;
  item: { id: number; name: string; memos: string[] };
  index: number;
  onAddMemo: (id: number) => void;
  onEditMemo: (id: number, memoIndex: number) => void;
  onDeleteMemo: (id: number, memoIndex: number) => void;
}

const DndItem: React.FC<DraggableItemProps> = ({
  dragProvided,
  item,
  index,
  onAddMemo,
  onEditMemo,
  onDeleteMemo,
}) => {
  return (
    <div
      className='min-h-[50px] p-4'
      ref={dragProvided.innerRef}
      {...dragProvided.draggableProps}
      {...dragProvided.dragHandleProps}
      style={{
        userSelect: 'none',
        ...dragProvided.draggableProps.style,
      }}
    >
      <div className='flex items-start'>
        <span className='bg-primaryBlue-default mr-4 inline-block h-7 w-7 rounded-full text-center font-bold leading-7 text-white'>
          {index + 1}
        </span>
        <div className='flex flex-col'>
          <div>{item.name}</div>
          {item.memos.length === 0 && (
            <button
              onClick={() => onAddMemo(item.id)}
              className='mt-2 flex items-center'
            >
              <span className='material-icons-outlined mr-2 h-5 w-5 '>
                add_circle
              </span>
              기록하기
            </button>
          )}
        </div>
      </div>
      {item.memos.map((memo, memoIndex) => (
        <div className='mt-2 flex items-center justify-between rounded bg-gray-300 p-2'>
          <span>{memo}</span>
          <div className='space-x-2'>
            <button onClick={() => onEditMemo(item.id, memoIndex)}>
              <span className='material-icons-outlined h-5 w-5'>edit</span>
            </button>
            <button onClick={() => onDeleteMemo(item.id, memoIndex)}>
              <span className='material-icons-outlined h-5 w-5'>delete</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DndItem;
