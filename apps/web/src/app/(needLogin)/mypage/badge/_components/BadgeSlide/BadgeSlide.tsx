import { badgeConfig } from '@/constants';

import { OneBadgeSlide } from '../OneBadgeSlide';

export const BadgeSlide = () => {
  const badgeDefault = badgeConfig.badgeDefault;

  return (
    <div>
      {badgeConfig.badges.map((item, index) => (
        <OneBadgeSlide key={index} item={item} badgeDefault={badgeDefault} />
      ))}
    </div>
  );
};
