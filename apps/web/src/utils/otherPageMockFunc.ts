import { badgeConfig } from '@/constants';
import { visitedContriesConfig } from '@/constants/visited_contries.contstants';

export const currentBadge = badgeConfig.badges.find(
  (badge) => badge.slug == 'plan'
).description;
export const currentBanner = visitedContriesConfig.tabs.map((tabs) => tabs)[0]
  .continents;
