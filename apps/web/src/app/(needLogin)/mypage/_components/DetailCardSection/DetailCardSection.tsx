import Image from 'next/image';

import flagImage from '/public/images/flag.png';
import { detailPageConfig } from '@/constants/detailPage.constans';
import { formattedDateFunc } from '@/utils/formattedDate';
import materialIcon from '@/utils/materialIcon';

export const DetailCardSection = ({ storyDetail }) => {
  const { date = 'Default Date', location = 'Default location' } =
    storyDetail?.content || {};
  const formattedDate = formattedDateFunc(
    date instanceof Date ? date : new Date(date)
  );
  const { tags = [] } = storyDetail?.content || {};

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
        {/* {detailPageConfig.subtitle.map((subtitle, index) => (
          //  key 유니크한 값으로 변경 예정
          <div key={index} className='ml-10 flex items-center gap-5'>
            <div className='border-primaryGray-500 flex h-[30px] w-[120px] items-center justify-center rounded-sm border border-[1px] border-opacity-60 text-[14px] '>
              {subtitle}
            </div>
            <div className=' text-primaryBlue-700 text-[14px] font-semibold'>
              {handleSubtitleDescription(subtitle)}
            </div>
          </div>
        ))} */}
        <div className='ml-10 flex items-center gap-5'>
          <div className='border-primaryGray-500 flex h-[30px] w-[120px] items-center justify-center rounded-sm border border-[1px] border-opacity-60 text-[14px] '>
            {detailPageConfig.subtitle[0]}
          </div>
          <div className=' text-primaryBlue-700 text-[14px] font-semibold'>
            {location}
          </div>
        </div>
        <div className='ml-10 flex items-center gap-5'>
          <div className='border-primaryGray-500 flex h-[30px] w-[120px] items-center justify-center rounded-sm border border-[1px] border-opacity-60 text-[14px] '>
            {detailPageConfig.subtitle[1]}
          </div>
          <div className=' text-primaryBlue-700 text-[14px] font-semibold'>
            {formattedDate}
          </div>
        </div>

        <div className='ml-10 flex items-center gap-5'>
          <div className='border-primaryGray-500 flex h-[30px] w-[120px] items-center justify-center rounded-sm border border-[1px] border-opacity-60 text-[14px] '>
            {detailPageConfig.subtitle[2]}
          </div>
          <div className='flex gap-2'>
            {tags?.map((tag, index) => (
              <div
                key={index}
                className=' text-primaryBlue-700 text-[14px] font-semibold'
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
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
