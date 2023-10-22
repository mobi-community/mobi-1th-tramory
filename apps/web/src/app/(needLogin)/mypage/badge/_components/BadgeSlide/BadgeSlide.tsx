// import { badgeConfig } from '../../../../../../constants';
import { badgeConfig } from '@/constants';

export const BadgeSlide = () => {
  return (
    <div>
      <h1>
        {badgeConfig.badges.map((item) => (
          <>{item.title}</>
        ))}
      </h1>
    </div>
  );
};
