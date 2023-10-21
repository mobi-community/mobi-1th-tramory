// 레이아웃 처리 (공통 nav bar = StageIndicator등 )

export default function TravelLayout({
  children,
}: {
  children: React.ReactNode;
  asideContent: React.ReactNode;
}) {
  return (
    <>
      <div>
        <div>{children}</div>
      </div>
    </>
  );
}
