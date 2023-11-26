import { rest } from 'msw';

import type {
  TravelPlanType,
  TravelRecordType,
} from '@/types/TravelRegister.types';

// 여행 계획 post 요청 로직
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

// 여행 기록 post 요청 로직
export const addRecord = rest.post<TravelRecordType>(
  '/api/records',
  async (req, res, ctx) => {
    const planData = {
      theme: null,
      endDate: null,
      startDate: null,
      title: null,
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
