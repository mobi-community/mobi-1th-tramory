import { rest } from 'msw';

import { TravelPlanType } from '@/types/travelPlan.types';

export const addPlan = rest.post<TravelPlanType>(
  '/api/plans',
  async (req, res, ctx) => {
    let category;
    let endDate;
    let startDate;
    let tag0;
    let tag1;
    let tag2;
    let tag3;
    let title;

    await req.json().then((data) => {
      endDate = data.endDate;
      startDate = data.startDate;
      category = data.category;
      tag0 = data.tag0;
      tag1 = data.tag1;
      tag2 = data.tag2;
      tag3 = data.tag3;
      title = data.title;
    });

    return res(
      ctx.status(200),
      ctx.json({
        id: Math.floor(Math.random() * 100000),
        endDate,
        startDate,
        category,
        tag0,
        tag1,
        tag2,
        tag3,
        title,
      })
    );
  }
);
