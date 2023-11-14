export const ConnerLine = () => {
  return (
    <div>
      <div className='absolute z-20 ml-10 mt-10'>
        <div className='h-0.5 w-14 bg-white'></div>
        <div className='h-14 w-0.5 bg-white'></div>
      </div>
      <div className='absolute right-0 z-20 mr-10 mt-10'>
        <div className='h-0.5 w-14 bg-white'></div>
        <div className='absolute right-0 h-14 w-0.5 bg-white'></div>
      </div>
      <div className='absolute bottom-0 z-20 mb-10 ml-10'>
        <div className='h-14 w-0.5 bg-white'></div>
        <div className='h-0.5 w-14 bg-white'></div>
      </div>
      <div className='absolute bottom-0 right-0 z-20 mb-10 mr-10'>
        <div className='h-14 w-0.5 bg-white'></div>
        <div className='absolute right-0 h-0.5 w-14 bg-white'></div>
      </div>
    </div>
  );
};
