export const Tab = ({ children, bgColor, zIndex }) => {
  const shadowStyle = {
    boxShadow:
      '0px -5px 10px -3px rgba(0, 0, 0, 0.1), 10px 0px 20px -3px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div
      className={`text-primaryGray-400 flex w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-tr-[10px] font-bold z-${zIndex}`}
    >
      <div
        style={shadowStyle}
        className={`bg-${bgColor} hover:bg-primaryGray-300 border-primaryGray-200 flex h-[40px] w-[320px] translate-x-[30px] skew-x-[-20deg] transform items-center justify-center rounded-tl-[12px] border border-b-white transition-all duration-300 hover:text-black`}
      >
        <p className='mr-7 skew-x-[+20deg] transform text-[14px]'>{children}</p>
      </div>
    </div>
  );
};
