import Image from 'next/image';

import flagImage from '/public/images/flag.png';
import { detailPageConfig } from '@/constants/detailPage.constans';
import materialIcon from '@/utils/materialIcon';

import type { DetailSectionProps } from './DetailSection.types';

export const DetailCardSection = ({ planDetail }: DetailSectionProps) => {
  const { content } = planDetail;

  const handleSubtitleDescription = (subtitle) => {
    // 여행지는 한국어로 된 여행지 data를 받아야할듯
    if (subtitle === '여행지') return content.location;
    else if (subtitle === '날짜') return content.date;
    else return planDetail.id;
  };
  // 추후 실제 데이터로 변경 예정
  const country = ['일본', '영국', '프랑스'];

  return (
    <div className=' border-primaryGray-300 relative mt-5 flex w-full rounded-xl border border-[1px] border-opacity-60 px-12 py-5'>
      <div>
        <Image src={flagImage} alt='national_flag' width={210} />
        <div className='mt-3 flex w-full items-center justify-center gap-2'>
          {country.map((_, index) => (
            <div key={index}>
              <div className=' bg-primaryGray-300 hover:bg-primaryGray-400 h-[9px] w-[9px] cursor-pointer rounded-full' />
            </div>
          ))}
        </div>
      </div>
      <div className='flex w-full flex-col gap-2'>
        {detailPageConfig.subtitle.map((subtitle, index) => (
          //  key 유니크한 값으로 변경 예정
          <div key={index} className='ml-10 flex items-center gap-5'>
            <div className='border-primaryGray-500 flex h-[30px] w-[120px] items-center justify-center rounded-sm border border-[1px] border-opacity-60 text-[14px] '>
              {subtitle}
            </div>
            <div className=' text-primaryBlue-700 text-[14px] font-semibold'>
              {handleSubtitleDescription(subtitle)}
            </div>
          </div>
        ))}
      </div>
      <div className='border-primaryBlue-700 hover:bg-primaryBlue-700 absolute right-3 top-3 flex h-[22px] w-[22px] cursor-pointer items-center justify-center rounded-full border p-1 hover:text-white hover:opacity-80'>
        {materialIcon({
          iconName: 'edit',
          size: 18,
        })}
      </div>
    </div>
  );
};

export default DetailCardSection;
