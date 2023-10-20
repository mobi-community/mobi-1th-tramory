export const AuthIcon = () => {
  const circleArray = new Array(5).fill(null);

  return (
    <>
      <div className='h-px w-full bg-[#166C63]'></div>
      <div className='flex items-center text-5xl font-bold text-[#166C63]'>
        <p>TRA</p>
        {circleArray.map((_, idx) => (
          <div
            key={idx}
            className='mr-1 h-1 w-1 rounded-full bg-[#166C63]'
          ></div>
        ))}
        <span>icon</span>
        {circleArray.map((_, idx) => (
          <div
            key={idx}
            className='mr-1 h-1 w-1 rounded-full bg-[#166C63]'
          ></div>
        ))}
        <p>MORY</p>
      </div>
      <div className='h-px w-[420px] bg-[#166C63]'></div>
    </>
  );
};
