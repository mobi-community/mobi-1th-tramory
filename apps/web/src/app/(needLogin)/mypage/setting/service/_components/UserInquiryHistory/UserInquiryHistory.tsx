import { InquiryMockData } from '../../_mock/InquiryMocks';
import { OneInquiryHistory } from '../OneInquiryHistory/OneInquiryHistory';

export const UserInquiryHistory = () => {
  return (
    <div className='my-[30px] text-[#2c2c2c]'>
      {InquiryMockData.map((data, index) => (
        <OneInquiryHistory data={data} key={index} />
      ))}
    </div>
  );
};
