/**
 *
 * @todo
 * 배지 발급 개수 부분 현재 0으로 하드코딩 되어있음
 * 추후 개발 시 발급된 배지 개수로 수정 예정
 */
'use client';
import 'swiper/css';
import 'swiper/css/navigation';

import { useAtom } from 'jotai';
import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { isIndividualOneBadgeToggleAtom } from '@/store';

import { HowToNotification } from '../HowToNotification';
import type { OneBadgeSlideProps } from './OneBadgeSlide.types';

export const OneBadgeSlide = ({
  item,
  badgeDefault,
  id,
}: OneBadgeSlideProps) => {
  const { title, description, info } = item;
  const [isIndividualToggle, setIsIndividualToggle] = useAtom(
    isIndividualOneBadgeToggleAtom(id)
  );

  return (
    <div className='mb-12 pr-12'>
      <div className='relative my-8 flex items-center'>
        <p className='text-primaryBlue-700/80 ml-12 mr-2 text-xl font-bold'>
          {title} (0/{description.length})
        </p>
        <span
          onMouseOver={() => setIsIndividualToggle(true)}
          onMouseOut={() => setIsIndividualToggle(false)}
          className='material-icons-outlined'
          style={{ color: '#70D1E6', cursor: 'pointer', fontSize: '18px' }}
        >
          info
        </span>
        {isIndividualToggle && <HowToNotification info={info} />}
      </div>
      <div className='bg-primaryGray-200 ml-12 flex items-center rounded-[30px] px-8 py-16'>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
          }}
          slidesPerView={4}
          spaceBetween={1}
          className='mySwiper'
          style={{ paddingRight: '80px' }}
        >
          <span
            className='material-icons-outlined prev-btn text-primaryGray-200 absolute top-[40px] z-10 rounded-full bg-white/80 p-3'
            style={{ fontSize: '20px', cursor: 'pointer' }}
          >
            arrow_back_ios
          </span>
          <div className='flex'>
            {description.map((desc, i: number) => (
              <SwiperSlide key={i}>
                <div key={i} className='relative'>
                  <div className='flex justify-center pl-[80px]'>
                    <Image
                      src={badgeDefault}
                      width={126}
                      height={152}
                      alt='배지 디폴트 이미지'
                      priority
                    />
                    {!desc.subtitle ? (
                      <div className='text-primaryGray-300 absolute top-[50px] text-center font-bold'>
                        <h1
                          className='text-sm'
                          dangerouslySetInnerHTML={{ __html: desc.title }}
                        />
                      </div>
                    ) : (
                      <div className='text-primaryGray-300 absolute top-[40px] text-center font-bold'>
                        <h1
                          className='text-sm'
                          dangerouslySetInnerHTML={{ __html: desc.title }}
                        />
                        <p
                          className='text-sm'
                          dangerouslySetInnerHTML={{
                            __html: desc.subtitle || null,
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <span
            className='material-icons-outlined next-btn text-primaryGray-200 next-btn absolute right-0 top-[40px] z-10 rounded-full bg-white/80 p-3'
            style={{ fontSize: '20px', cursor: 'pointer' }}
          >
            arrow_forward_ios
          </span>
        </Swiper>
      </div>
    </div>
  );
};
