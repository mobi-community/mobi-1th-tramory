import { rest } from 'msw';

import { recordStoriesMock } from '@/app/(needLogin)/mypage/my_story/record/_mocks/recordStoriesMock';

// 스토리 목록
export const getStoryList = rest.get(
  '/story/storypage/:page',
  (req, res, ctx) => {
    const mockStoryList = recordStoriesMock;
    const resoibseStatus = (
      status: number,
      success: boolean,
      message: string
    ) => {
      return res(ctx.status(status), ctx.json({ success, message }));
    };
    const page = req.params.page;

    if (!mockStoryList) {
      return resoibseStatus(401, false, '실패');
    } else {
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          message: '성공',
          data: mockStoryList.slice(
            (Number(page) + 1) * 10 - 10,
            (Number(page) + 1) * 10
          ),
          total: mockStoryList.length,
        })
      );
    }
  }
);

// 스토리 상세
export const getStoryDetail = rest.get(
  '/story/detail/:postId',
  (req, res, ctx) => {
    const postId = req.params.postId;

    const targetStory = recordStoriesMock.find(
      (detail) => detail.id === postId
    );

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        message: 'success',
        data: targetStory,
      })
    );
  }
);

// 좋아요 반영
export const postLikedStatus = rest.post(
  '/story/detail/like',
  async (req, res, ctx) => {
    // req로 전달한 스토리 id
    let storyId: string;
    let isLiked: boolean;

    await req.json().then((data) => {
      storyId = data.storyId;
      isLiked = data.isLiked;
    });

    // 불변성 유지
    const newStoryList = [...recordStoriesMock];
    // 목데이터에서 타겟 스토리 찾기
    const targetIdx = newStoryList.findIndex((story) => story.id === storyId);

    const resoibseStatus = (
      status: number,
      success: boolean,
      message: string
    ) => {
      return res(ctx.status(status), ctx.json({ success, message }));
    };

    // 스토리가 존재하는 경우
    if (targetIdx !== -1) {
      isLiked
        ? (newStoryList[targetIdx].content.liked -= 1) // 좋아요가 눌러져있던 스토리면 취소하기
        : (newStoryList[targetIdx].content.liked += 1); // 좋아요가 눌러져있지 않던 스토리면 추가하기
    } else {
      return resoibseStatus(401, false, '실패');
    }

    const data = {
      status: !isLiked,
      likedCnt: newStoryList[targetIdx].content.liked,
    };

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        message: 'success',
        data,
      })
    );
  }
);

// 조회수 반영
export const postViewedStatus = rest.patch(
  '/story/detail/viewed',
  async (req, res, ctx) => {
    let storyId: string;
    let viewCnt: number;

    await req.json().then((data) => {
      storyId = data.storyId;
    });

    const newStoryList = [...recordStoriesMock];
    const targetIdx = newStoryList.findIndex((story) => story.id === storyId);

    const resoibseStatus = (
      status: number,
      success: boolean,
      message: string
    ) => {
      return res(ctx.status(status), ctx.json({ success, message }));
    };

    // 스토리가 존재하는 경우
    if (targetIdx !== -1) {
      viewCnt = newStoryList[targetIdx].content.viewed + 1;
    } else {
      return resoibseStatus(401, false, '실패');
    }

    const data = {
      storyId,
      viewCnt,
    };

    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        message: 'success',
        data,
      })
    );
  }
);
