// 로그인 하지 않은 사람이 접속하면 되돌리게 처리

export default function NeedLoginLayout({
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
