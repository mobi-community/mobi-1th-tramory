import Image from 'next/image';

import flagImage from '/public/images/flag.png';
import { detailPageConfig } from '@/constants/detailPage.constans';

import type { DetailSectionProps } from './DetailSection.types';

export const DetailCardSection = ({ targetStory }: DetailSectionProps) => {
  const { content } = targetStory;

  const handleSubtitleDescription = (subtitle: string) => {
    if (subtitle === '여행지') return content.location;
    else if (subtitle === '날짜') return content.date;
    else if (subtitle === '카테고리') return content.category;
    else return targetStory.id;
  };
  const country = ['일본', '영국', '프랑스'];

  if (targetStory)
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
      </div>
    );
};

export default DetailCardSection;
