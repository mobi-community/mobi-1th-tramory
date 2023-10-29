'use client';

import { usePathname } from 'next/navigation';
import { MyPageHeader, MyPageNavBar } from './_components';

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
  asideContent: React.ReactNode;
}) {
  const pathName = usePathname();
  const isDetailPage =
    pathName.startsWith('/mypage/my_story/plan/') ||
    pathName.startsWith('/mypage/my_story/record/');

  return (
    <>
      <div>
        <div className='flex'>
          <div>
            <MyPageNavBar />
          </div>
          <div>
            {!isDetailPage && <MyPageHeader />}
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
