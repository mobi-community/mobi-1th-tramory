import WhenCalener from './components/WhenCalendar';

const WhenTravel = () => {
  return (
    <div className='mt-[57px] flex h-[600px] items-center justify-center '>
      <div className='bg-primaryBlue-100 absolute flex h-[600px] w-full max-w-[969px] justify-center'>
        <div>
          <div className='text-[30px] font-semibold'>언제 떠나셨나요?</div>
          <WhenCalener />
        </div>
      </div>
    </div>
  );
};

export default WhenTravel;
