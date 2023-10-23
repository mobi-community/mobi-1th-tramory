'use client';
import 'swiper/css';
import 'swiper/css/navigation';

import { atom, useAtom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { HowToNotification } from '../HowToNotification';
/**
 *
 * @todo
 * 배지 발급 개수 부분 현재 0으로 하드코딩 되어있음
 * 추후 개발 시 발급된 배지 개수로 수정 예정
 * 구글 아이콘 추후 util 컴포넌트로 수정 예정
 */

const isHowToAtom = atomFamily(() => atom(false));

export const OneBadgeSlide = ({ item, badgeDefault, defaultMessage, id }) => {
  const { title, description, info } = item;
  const [isHowtoOpen, setIsHowToOpen] = useAtom(isHowToAtom(id));

  const handleToggleHowTo = (event: React.MouseEvent) => {
    event.stopPropagation(); // 상위 요소 이벤트 버블링 막기
    setIsHowToOpen((prev) => !prev);
  };

  // span 아이콘 클릭하지 않고 해당 div 영역 클릭할 경우 HowToNotification이 false 상태가되어 꺼짐
  const handleBackgroundClick = () => {
    setIsHowToOpen(false);
  };

  return (
    <div onClick={handleBackgroundClick}>
      <div className='relative my-8 flex items-center'>
        <p className='text-primaryBlue-700/80 mr-2 text-xl font-bold'>
          {title} (0/{description.length})
        </p>
        <span
          onClick={handleToggleHowTo}
          className='material-icons-outlined'
          style={{ color: '#70D1E6', cursor: 'pointer', fontSize: '18px' }}
        >
          info
        </span>
        {isHowtoOpen && <HowToNotification info={info} />}
      </div>
      <div className='bg-primaryGray-200 flex items-center rounded-[30px] px-8 py-16'>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
          }}
          slidesPerView={5}
          spaceBetween={1}
          className='mySwiper'
          style={{ paddingRight: '80px' }}
        >
          <span
            className='material-icons-outlined prev-btn text-primaryGray-200 absolute top-[40px] z-10 rounded-full bg-white/80 p-3'
            style={{ fontSize: '32px', cursor: 'pointer' }}
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
                    <div className='text-primaryGray-300 absolute top-[40px] text-center font-bold'>
                      <h1
                        className='text-sm'
                        dangerouslySetInnerHTML={{ __html: defaultMessage }}
                      />
                      {/* 배지 발급 받았을 때, css 수정해야함
                <h1
                  className='text-sm '
                  dangerouslySetInnerHTML={{ __html: desc.title }}
                />
                <p
                  className='text-xs'
                  dangerouslySetInnerHTML={{ __html: desc.subtitle || null }}
                /> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <span
            className='material-icons-outlined next-btn text-primaryGray-200 next-btn absolute right-0 top-[40px] z-10 rounded-full bg-white/80 p-3'
            style={{ fontSize: '32px', cursor: 'pointer' }}
          >
            arrow_forward_ios
          </span>
        </Swiper>
      </div>
    </div>
  );
};
