import { rest } from 'msw';

import { TravelPlanType } from '@/types/travelPlan.types';

export const addPlan = rest.post<TravelPlanType>(
  '/api/plans',
  async (req, res, ctx) => {
    let theme;
    let endDate;
    let startDate;
    let title;
    let travelHashTags;
    let isPublic;
    let isComplete;
    let isRecord;
    let user;
    let travelDailyPlansDetails;

    await req.json().then((data) => {
      endDate = data.endDate;
      startDate = data.startDate;
      theme = data.theme;
      title = data.title;
      travelHashTags = Array(4)
        .fill(null)
        .map((_, index) => ({
          id: Math.floor(Math.random() * 100000),
          hashTag: { name: data[`tag${index}`] },
        }));
      isPublic = data.isPublic;
      isComplete = data.isComplete;
      isRecord = data.isRecord;
      user = data.user;
      travelDailyPlansDetails = data.travelDailyPlansDetails;
    });

    return res(
      ctx.status(200),
      ctx.json({
        id: Math.floor(Math.random() * 100000),
        endDate,
        startDate,
        theme,
        title,
        travelHashTags,
        isPublic,
        isComplete,
        isRecord,
        user,
        travelDailyPlansDetails,
      })
    );
  }
);
