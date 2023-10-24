export const Tab = ({ title, bgColor, zIndex }) => {
  const shadowStyle = {
    boxShadow:
      '0px -5px 5px -3px rgba(0, 0, 0, 0.1), 10px 0px 15px -3px rgba(0, 0, 0, 0.1)',
  };
  return (
    <div
      className={`flex w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-tr-[10px] z-${zIndex}`}
    >
      <div
        style={shadowStyle}
        className={`bg-${bgColor} flex h-[40px] w-[320px] translate-x-[30px] skew-x-[-20deg] transform items-center justify-center rounded-tl-[12px] border`}
      >
        <p className='mr-7 skew-x-[+20deg] transform text-[14px]'>{title}</p>
      </div>
    </div>
  );
};
