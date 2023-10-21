import { Header } from '../../components/Header';

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
  asideContent: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}
