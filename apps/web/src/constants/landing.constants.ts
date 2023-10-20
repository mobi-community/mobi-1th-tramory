/**
 * Todo
 * 마이페이지 - 설정 라우팅 이후 href 부여할 것
 * landingBgImage - 임시 이미지, 변경할 예정
 */
export type LandingConfig = typeof landingConfig;
import landingBgImage from '../app/landing/_mock/landing_bg.jpg';

export const landingConfig = {
  landingBgImage,
  title: 'Tramory,<br />Your Travel Memories.',
  description:
    '특별한 나만의 여행을 기록하고 공유하세요 <br /> 여행을 떠나보세요, 당신만의 방식으로',
  button: 'Start the jorney',
  footer: [
    {
      title: 'Contact',
      href: '/',
    },
    {
      title: 'Terms of Use',
      href: '/',
    },
    {
      title: 'Privacy Policy',
      href: '/',
    },
  ],
  copyright: '© 2023 Tramory. All rights reserved.',
};
