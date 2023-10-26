export const DateHeader = ({ date, handleToggleUpdate, isToggleOpen }) => {
  return (
    <div className='border-primaryBlue-700 mt-4 flex w-full items-center justify-between border-[1px] border-opacity-90 py-2 font-semibold text-black'>
      <div className=' ml-3'>Day({date})</div>
      <span
        onClick={() => handleToggleUpdate(date)}
        className='material-icons-outlined mr-2 cursor-pointer'
      >
        {isToggleOpen(date) ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
      </span>
    </div>
  );
};
