export const AuthSloganSection = () => {
  const circleArray = new Array(5).fill(null);

  return (
    <>
      <div className='bg-primaryGreen mt-6 h-px w-full'></div>
      <div className='flex w-full items-center justify-between text-4xl font-bold text-[#166C63]'>
        <p className='my-4'>TRA</p>
        {circleArray.map((_, idx) => (
          <div
            key={idx}
            className='bg-primaryGreen mr-1 h-1 w-1 rounded-full'
          ></div>
        ))}
        <span className='material-icons-outlined rotate-90'>
          airplanemode_active
        </span>
        {circleArray.map((_, idx) => (
          <div
            key={idx}
            className='bg-primaryGreen mr-1 h-1 w-1 rounded-full'
          ></div>
        ))}
        <p>MORY</p>
      </div>
      <div className='bg-primaryGreen h-px w-full'></div>
    </>
  );
};
