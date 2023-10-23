import WhenCalener from './components/WhenCalendar';

const WhenTravel = () => {
  return (
    <div className='mt-[57px] flex h-[600px] items-center justify-center '>
      <div className='bg-primaryBlue-100 absolute flex h-[600px] w-full max-w-[969px] justify-center'>
        <WhenCalener />
      </div>
    </div>
  );
};

export default WhenTravel;
