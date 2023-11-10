export type HeaderConfig = typeof headerConfig;

export const headerConfig = {
  href: [
    {
      title: 'story_community',
      href: '/story_community',
    },
    {
      title: 'badge',
      href: '/mypage/badge',
    },
    {
      title: 'mypage',
      href: '/mypage',
    },
    {
      title: 'setting',
      href: '/mypage/setting/account',
    },
  ],
  iconStyle: {
    style: 'text-primaryGray-400 cursor-pointer pl-5',
    size: 32,
  },
  settingStyle: 'hover:bg-primaryGray-100 min-h-[35px] w-[88px] pt-[7px]',
};
