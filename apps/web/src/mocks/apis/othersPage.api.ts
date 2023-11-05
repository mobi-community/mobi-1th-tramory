import { rest } from 'msw';

import { UserInfo } from '@/app/(needLogin)/otherspage/_mocks';
import { storyMock } from '@/app/(needLogin)/story_community/_mocks';
import { badgeConfig } from '@/constants';
import { visitedContriesConfig } from '@/constants/visited_contries.contstants';
const currentBadge = badgeConfig.badges.find(
  (badge) => badge.slug == 'plan'
).description;
const currentBanner = visitedContriesConfig.tabs.map((tabs) => tabs)[0]
  .continents;

export const getOtherStories = rest.get(
  '/api/othersStories',
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(storyMock));
  }
);

export const getOthersUserInfo = rest.get(
  '/api/othersUserInfo',
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(UserInfo));
  }
);

export const getOtherBadges = rest.get('/api/othersBadges', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(currentBadge));
});

export const getOthersBanner = rest.get(
  '/api/othersBanner',
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(currentBanner));
  }
);
