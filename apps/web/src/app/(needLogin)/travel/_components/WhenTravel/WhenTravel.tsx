import NavigateButton from '../NavigateButton/NavigateButton';
import WhenCalener from './components/WhenCalendar/WhenCalendar';

const WhenTravel = ({ title }) => {
  return (
    <div className='mt-[57px] flex h-[600px] items-center justify-center '>
      <div className='bg-primaryBlue-100 absolute flex h-[600px] w-full max-w-[969px] justify-center '>
        <div>
          <div className='text-primaryGray-500 ml-[103px] mt-[40px] text-[30px] font-semibold'>
            {title}
          </div>
          <div className='mt-[20px]'>
            <WhenCalener />
          </div>
        </div>
      </div>
      <NavigateButton />
    </div>
  );
};

export default WhenTravel;
