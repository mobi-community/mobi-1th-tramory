export const DateHeader = ({
  index,
  date,
  handleToggleListState,
  toggleListState,
}) => {
  return (
    <div
      onClick={() => handleToggleListState(date)}
      className='border-primaryBlue-700 mt-4 flex w-full items-center justify-between border-[1px] border-opacity-90 py-2 font-semibold text-black'
    >
      <div className=' ml-3'>
        Day{index + 1} ({date})
      </div>
      <span className='material-icons-outlined mr-2 cursor-pointer'>
        {toggleListState[date] ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
      </span>
    </div>
  );
};
