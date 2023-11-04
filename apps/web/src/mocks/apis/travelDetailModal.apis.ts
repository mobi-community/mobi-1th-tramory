import { rest } from 'msw';

import { Item } from '@/store/travelDetailModal.atoms';

export const travelDetailModal = rest.post<Item[]>(
  '/updateDetailModal',
  (req, res, ctx) => {
    const travelDailyPlansState = req.body;

    console.log(travelDailyPlansState);

    return res(
      ctx.json({
        message: '전송완료',
      })
    );
  }
);
