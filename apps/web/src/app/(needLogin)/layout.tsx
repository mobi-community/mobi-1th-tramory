'use client';
import { usePathname } from 'next/navigation';

import { Header } from '@/components';

// 로그인 하지 않은 사람이 접속하면 되돌리게 처리

export default function NeedLoginLayout({
  children,
}: {
  children: React.ReactNode;
  asideContent: React.ReactNode;
}) {
  const pathName = usePathname();
  const isMyPage = pathName.includes('mypage');

  return (
    <>
      {!isMyPage && <Header />}
      <div>{children}</div>
    </>
  );
}
