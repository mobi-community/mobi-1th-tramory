import { useAtom } from 'jotai';
import { useEffect } from 'react';

import { inquiryHistoryAtom } from '@/store/mypage.atoms';

import { OneInquiryHistory } from '../OneInquiryHistory/OneInquiryHistory';

export const UserInquiryHistory = () => {
  const [inquiryHistory, setInquiryHistory] = useAtom(inquiryHistoryAtom);

  useEffect(() => {
    const fetchInquiryHistory = async () => {
      try {
        const response = await fetch('/user/service/inquiryhistory');

        const data = await response.json();

        if (response.ok) {
          setInquiryHistory(data.data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('사용자 정보를 가져오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchInquiryHistory();
  }, [setInquiryHistory]);

  return (
    <div className='my-[30px] text-[#2c2c2c]'>
      {inquiryHistory.map((data, index) => (
        <OneInquiryHistory data={data} key={index} />
      ))}
    </div>
  );
};
