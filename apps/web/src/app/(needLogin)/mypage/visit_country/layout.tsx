import Link from 'next/link';

/**
 * @todo
 * 추후 공용 컴포넌트 탭으로 수정 예정
 */
export default function VistedContriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className='flex justify-end'>
        <Link className='mr-4' href='/mypage/visit_country/continent'>
          대륙별
        </Link>
        <Link className='mr-4' href='/mypage/visit_country/my_visited'>
          내 방문 국가 모아보기
        </Link>
      </div>
      {children}
    </div>
  );
}
