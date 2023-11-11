import { rest } from 'msw';

import { suggestedKeyword } from '@/app/(needLogin)/map/_mocks';

export const getLocationKeywords = rest.get(
  '/searchKeyword/location',
  (req, res, ctx) => {
    const mockKeywordList = suggestedKeyword;
    const resoibseStatus = (
      status: number,
      success: boolean,
      message: string
    ) => {
      return res(ctx.status(status), ctx.json({ success, message }));
    };

    const url = new URL(req.url);
    const inputValue = url.searchParams.get('inputValue');

    if (!mockKeywordList) {
      return resoibseStatus(401, false, '실패');
    } else if (!inputValue) {
      res(
        ctx.status(200),
        ctx.json({
          success: true,
          message: '성공',
          data: [],
        })
      );
    } else {
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          message: '성공',
          data: mockKeywordList.filter(({ keyword }) =>
            keyword.includes(inputValue)
          ),
        })
      );
    }
  }
);

export const getStoriesKeyword = rest.get(
  '/searchKeyword/stories',
  (req, res, ctx) => {
    const mockKeywordList = [
      { keyword: 'kei' },
      { keyword: 'zoey' },
      { keyword: 'heepy' },
      { keyword: 'natalie' },
      { keyword: 'jane' },
      { keyword: '일본' },
      { keyword: '유럽' },
    ];
    const resoibseStatus = (
      status: number,
      success: boolean,
      message: string
    ) => {
      return res(ctx.status(status), ctx.json({ success, message }));
    };

    const url = new URL(req.url);
    const inputValue = url.searchParams.get('inputValue');

    if (!mockKeywordList) {
      return resoibseStatus(401, false, '실패');
    } else if (!inputValue) {
      res(
        ctx.status(200),
        ctx.json({
          success: true,
          message: '성공',
          data: [],
        })
      );
    } else {
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          message: '성공',
          data: mockKeywordList.filter((word) =>
            word.keyword.includes(inputValue)
          ),
        })
      );
    }
  }
);
