import Header from '../../components/Header/Header';

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
  asideContent: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
