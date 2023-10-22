import { MyPageHeader, MyPageNavBar } from './_components';

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
  asideContent: React.ReactNode;
}) {
  return (
    <>
      <div>
        <div className='flex'>
          <div>
            <MyPageNavBar />
          </div>
          <div>
            <MyPageHeader />
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
