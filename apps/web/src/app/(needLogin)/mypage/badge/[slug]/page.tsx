'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { MyPageContainer } from '@/components';
import { badgeConfig } from '@/constants';

const MyPageTabs = () => {
  const pathname = usePathname();

  const slug = pathname.split('/').pop();

  const currentBadge = badgeConfig.badges.find((badge) => badge.slug === slug);

  const badgeImgInfo = badgeConfig;

  return (
    <div>
      <MyPageContainer title='나의 배지'>
        <div className='mb-8 flex items-center'>
          <p className='text-primaryBlue-700/80 mr-2 text-xl font-bold'>
            {currentBadge.title} (0/{currentBadge.description.length})
          </p>
          <span
            className='material-icons-outlined'
            style={{ color: '#70D1E6', cursor: 'pointer', fontSize: '18px' }}
          >
            info
          </span>
        </div>
        <div className='bg-primaryGray-200 grid grid-cols-5 items-center gap-4 gap-y-16 rounded-[30px] px-8 py-16'>
          {currentBadge.description.map((item, index: number) => (
            <div key={index} className='relative flex justify-center'>
              <Image
                src={badgeImgInfo.badgeDefault}
                width={126}
                height={152}
                alt='배지 디폴트 이미지'
                priority
              />
              <div className='text-primaryGray-300 absolute top-[40px] text-center font-bold'>
                {/* 디폴트 메세지 */}
                {/* <h1
                  className='text-sm'
                  dangerouslySetInnerHTML={{
                    __html: badgeImgInfo.defaultMessage,
                  }}
                /> */}
                <h1
                  className='text-sm '
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  className='text-xs'
                  dangerouslySetInnerHTML={{ __html: item.subtitle || null }}
                />
              </div>
            </div>
          ))}
        </div>
      </MyPageContainer>
    </div>
  );
};

export default MyPageTabs;
