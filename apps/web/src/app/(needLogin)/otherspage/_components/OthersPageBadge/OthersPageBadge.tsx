'use client';
import Image from 'next/image';

import { badgeConfig } from '@/constants';

const OthersPageBadge = () => {
  const currentBadge = badgeConfig.badges.find((badge) => badge.slug == 'plan');

  const badgeImgInfo = badgeConfig;

  return (
    <>
      <div className='m-auto mt-[-147px] h-[800px] w-[1024px] border  shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'>
        <div className='bg-primaryGray-200 m-auto mx-12 mb-12 mt-[180px] grid grid-cols-5 items-center gap-4 gap-y-16 rounded-[30px] px-8 py-16'>
          {currentBadge.description.map((item, index: number) => (
            <div key={index} className='relative flex justify-center'>
              <Image
                src={badgeImgInfo.badgeDefault}
                width={126}
                height={152}
                alt='배지 디폴트 이미지'
                priority
              />
              {!item.subtitle ? (
                <div className='text-primaryGray-300 absolute top-[50px] text-center font-bold'>
                  <h1
                    className='text-sm'
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                </div>
              ) : (
                <div className='text-primaryGray-300 absolute top-[40px] text-center font-bold'>
                  <h1
                    className='text-sm'
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p
                    className='text-sm'
                    dangerouslySetInnerHTML={{ __html: item.subtitle || null }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OthersPageBadge;