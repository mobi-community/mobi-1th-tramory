export type MypageNavConfig = typeof mypageNavConfig;
import mainLogo from '/public/images/main-logo-bk.png';

export const mypageNavConfig = {
  logoImage: mainLogo,
  nav: [
    {
      icon: 'home',
      title: '홈',
      href: '/mypage',
    },
    {
      icon: 'description',
      title: '내 스토리',
      href: '/mypage/my_story/plan',
      subNav: [
        {
          title: '나의 여행 계획',
          href: '/mypage/my_story/plan',
        },
        {
          title: '나의 여행 기록',
          href: '/mypage/my_story/record',
        },
      ],
    },
    {
      icon: 'collections_bookmark',
      title: '관심 스토리',
      href: '/',
    },
    {
      icon: 'military_tech',
      title: '나의 배지',
      href: '/mypage/badge',
    },
    {
      icon: 'travel_explore',
      title: '방문 국가',
      href: '/mypage/visit_country/continent',
    },
    {
      icon: 'settings',
      title: '설정',
      href: '/mypage/setting/account',
      subNav: [
        {
          title: '계정 설정',
          href: '/mypage/setting/account',
        },
        {
          title: '서비스 문의',
          href: '/mypage/setting/service',
        },
        {
          title: '회원 탈퇴',
          href: '/mypage/setting/cancel_membership',
        },
      ],
    },
  ],
};
