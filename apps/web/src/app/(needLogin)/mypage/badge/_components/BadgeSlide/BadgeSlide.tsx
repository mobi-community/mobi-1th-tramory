import { badgeConfig } from '@/constants';

import { OneBadgeSlide } from '../OneBadgeSlide';

export const BadgeSlide = () => {
  const badgeDefault = badgeConfig.badgeDefault;
  const defaultMessage = badgeConfig.defaultMessage;

  return (
    <div>
      {badgeConfig.badges.map((item, index) => (
        <OneBadgeSlide
          id={index}
          key={index}
          item={item}
          badgeDefault={badgeDefault}
          defaultMessage={defaultMessage}
        />
      ))}
    </div>
  );
};
