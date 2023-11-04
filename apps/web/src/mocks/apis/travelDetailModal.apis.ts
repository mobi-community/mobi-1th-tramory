import { rest } from 'msw';

import { TravelDailyPlansState } from '@/store/travelDetailModal.atoms';

export const travelDetailModal = rest.post<TravelDailyPlansState>(
  '/updateDetailModal',
  (req, res, ctx) => {
    const { travelDailyPlansDetails } = req.body;

    console.log(travelDailyPlansDetails);

    return res(
      ctx.json({
        message: '전송완료',
      })
    );
  }
);
