/**
 * @todo
 * 추후 공용 컴포넌트 탭으로 수정 예정
 */

import Link from 'next/link';

import { badgeConfig } from '@/constants';

export default function BagdeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className='flex justify-end'>
        <Link className='mr-4' href='/mypage/badge'>
          ALL
        </Link>
        {badgeConfig.badges.map((badge, index) => (
          <Link
            className='mr-4'
            key={index}
            href={`/mypage/badge/${badge.slug}`}
          >
            {badge.title}
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
}
