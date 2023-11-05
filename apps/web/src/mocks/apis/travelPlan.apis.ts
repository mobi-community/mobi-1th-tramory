import { rest } from 'msw';

import { TravelPlanType } from '@/types/travelPlan.types';

export const addPlan = rest.post<TravelPlanType>(
  '/api/plans',
  async (req, res, ctx) => {
    const planData = {
      theme: null,
      endDate: null,
      startDate: null,
      title: null,
      travelHashTags: null,
      isPublic: null,
      isComplete: null,
      isRecord: null,
      user: null,
      travelDailyPlansDetails: null,
    };

    await req.json().then((data) => {
      planData.endDate = data.endDate;
      planData.startDate = data.startDate;
      planData.theme = data.theme;
      planData.title = data.title;
      planData.travelHashTags = Array(4)
        .fill(null)
        .map((_, index) => ({
          id: Math.floor(Math.random() * 100000),
          hashTag: { name: data[`tag${index}`] },
        }));
      planData.isPublic = data.isPublic;
      planData.isComplete = data.isComplete;
      planData.isRecord = data.isRecord;
      planData.user = data.user;
      planData.travelDailyPlansDetails = data.travelDailyPlansDetails;
    });

    return res(
      ctx.status(200),
      ctx.json({
        id: Math.floor(Math.random() * 100000),
        ...planData,
      })
    );
  }
);
