'use client';
import { atom, useAtom, useAtomValue } from 'jotai';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';

import { mypageNavConfig } from '@/constants';
import { badgeAtom } from '@/store/mypage.atoms';

import { MyPageContainer } from '../../_components';
import { HowToNotification } from '../_components';

const isOneHowToAtom = atom(false);

const MyPageTabs = () => {
  const pathname = usePathname();
  const basePath = pathname.replace(/\/[^/]+$/, '');
  const navTitle = mypageNavConfig.nav.find(
    (nav) => nav.href === basePath
  ).title;
  const params = useSearchParams();
  const slug = params.get('filter');

  const badges = useAtomValue(badgeAtom);
  const currentBadge = badges.find((badge) => badge.slug === slug);

  const [isOneHowTo, setIsOneHowTo] = useAtom(isOneHowToAtom);

  return (
    <div className='text-primaryBlue-700 ml-10 flex w-full flex-col items-center justify-center'>
      <MyPageContainer title={navTitle}>
        <div className='relative my-8 flex items-center'>
          <p className='text-primaryBlue-700/80 mx-12 mr-2 text-xl font-bold'>
            {currentBadge.title} (0/{currentBadge.description.length})
          </p>
          <span
            onMouseOver={() => setIsOneHowTo(true)}
            onMouseOut={() => setIsOneHowTo(false)}
            className='material-icons-outlined'
            style={{ color: '#70D1E6', cursor: 'pointer', fontSize: '18px' }}
          >
            info
          </span>
          {isOneHowTo && <HowToNotification info={currentBadge.info} />}
        </div>
        <div className='bg-primaryGray-200 mx-12 mb-20 grid grid-cols-5 items-center gap-4 gap-y-16 rounded-[30px] px-8 py-16'>
          {currentBadge.description.map((item, index: number) => (
            <div key={index} className='relative flex justify-center'>
              <Image
                src={item.badgeImage}
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
      </MyPageContainer>
    </div>
  );
};

export default MyPageTabs;
